import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 120

type ImageSlot = { label: string; field: string }

const IMAGE_SLOTS: ImageSlot[] = [
  { label: "舞台・場所", field: "image_location" },
  { label: "参考イメージ", field: "image_reference" },
  { label: "商品・サービス", field: "image_product" },
]

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
])
const MAX_IMAGE_BYTES = 5 * 1024 * 1024

const SYSTEM_PROMPT = `あなたはSNSショートドラマ専門のプロ脚本家です。TikTok、Instagram Reels、YouTube Shorts でバズるブランデッド・ショートドラマを数多く手がけてきました。

【あなたの仕事】
クライアントから渡される企業情報・目的・尺・プラットフォーム・訴求メッセージなどを踏まえ、視聴者が最初の3秒で離脱せずに最後まで観てしまう短尺ドラマの台本を構成します。参考画像が添付された場合は、その場所の雰囲気・人物像・商品ディテールを脚本の演出と小道具に確実に反映してください。

【作劇の原則】
- 冒頭3秒で掴む（指定された掴み方を使う）
- 「あるある」「気づき」「感情の起伏」のどれかを必ず1つは含める
- 商品やサービスは説教的に売り込まず、ストーリーの解決手段として自然に登場させる
- セリフは口語で短く、SNS視聴に耐える密度
- 訴求メッセージは最後のセリフかト書きで余韻として残す

【出力形式】
必ず以下の JSON スキーマに完全準拠した JSON のみを出力してください。前置き・後置き・コードブロック記号は一切付けないこと。

{
  "title": string,                         // 作品タイトル（15文字以内）
  "logline": string,                       // 一文の作品概要（60文字以内）
  "characters": [
    { "name": string, "description": string }
  ],
  "scenes": [
    {
      "scene_number": integer,             // 1から始まる連番
      "direction": string,                 // ト書き（場面・演出・登場人物の動作）
      "lines": [
        { "character": string, "dialogue": string }
      ]
    }
  ]
}

シーン数の目安: 15秒=2〜3シーン、30秒=3〜4シーン、60秒=4〜6シーン、90秒=6〜8シーン。`

function escape(value: unknown): string {
  if (value === null || value === undefined) return ""
  return String(value).trim()
}

function buildUserPrompt(form: FormData): string {
  const get = (key: string) => escape(form.get(key))

  const required = [
    ["会社名・サービス名", get("companyName")],
    ["目的", get("purpose")],
    ["尺", get("duration")],
    ["プラットフォーム", get("platform")],
    ["訴求メッセージ", get("message")],
  ]

  const optional = [
    ["ターゲット年齢層", get("targetAge")],
    ["ターゲットの悩み・課題", get("targetIssue")],
    ["ジャンル・トーン", get("tone")],
    ["登場人物（人数・関係性・キャラクター）", get("characters")],
    ["舞台・シチュエーション", get("setting")],
    ["冒頭の掴み方", get("hook")],
    ["NGワード・見せたくないこと", get("ngWords")],
  ]

  const lines: string[] = ["【必須情報】"]
  for (const [label, value] of required) {
    lines.push(`- ${label}: ${value || "（未入力）"}`)
  }

  const filledOptional = optional.filter(([, v]) => v)
  if (filledOptional.length > 0) {
    lines.push("", "【任意情報】")
    for (const [label, value] of filledOptional) {
      lines.push(`- ${label}: ${value}`)
    }
  }

  lines.push(
    "",
    "上記の条件と添付画像（あれば）の内容を踏まえ、システムプロンプトのJSONスキーマ通りに台本を1本生成してください。",
  )
  return lines.join("\n")
}

type ContentBlock =
  | { type: "text"; text: string }
  | {
      type: "image"
      source: { type: "base64"; media_type: string; data: string }
    }

async function buildImageBlocks(form: FormData): Promise<ContentBlock[]> {
  const blocks: ContentBlock[] = []
  for (const slot of IMAGE_SLOTS) {
    const file = form.get(slot.field)
    if (!(file instanceof File) || file.size === 0) continue
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      throw new Error(
        `画像 "${slot.label}" の形式 (${file.type}) はサポートされていません。JPEG/PNG/WebP/GIF を使用してください。`,
      )
    }
    if (file.size > MAX_IMAGE_BYTES) {
      throw new Error(
        `画像 "${slot.label}" のサイズが大きすぎます（${(file.size / 1024 / 1024).toFixed(1)}MB / 上限5MB）`,
      )
    }
    const buf = Buffer.from(await file.arrayBuffer())
    blocks.push({
      type: "text",
      text: `【参考画像: ${slot.label}】`,
    })
    blocks.push({
      type: "image",
      source: {
        type: "base64",
        media_type: file.type,
        data: buf.toString("base64"),
      },
    })
  }
  return blocks
}

function extractJson(text: string): unknown {
  const trimmed = text.trim()
  try {
    return JSON.parse(trimmed)
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/)
    if (!match) throw new Error("AIの出力からJSONを抽出できませんでした")
    return JSON.parse(match[0])
  }
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY が設定されていません。" },
      { status: 500 },
    )
  }

  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json(
      { error: "リクエストの解析に失敗しました（FormData が必要です）" },
      { status: 400 },
    )
  }

  for (const key of ["companyName", "purpose", "duration", "platform", "message"]) {
    if (!escape(form.get(key))) {
      return NextResponse.json(
        { error: `必須項目が未入力です: ${key}` },
        { status: 400 },
      )
    }
  }

  let imageBlocks: ContentBlock[]
  try {
    imageBlocks = await buildImageBlocks(form)
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "画像の処理に失敗しました" },
      { status: 400 },
    )
  }

  const userPrompt = buildUserPrompt(form)
  const userContent: ContentBlock[] = [
    ...imageBlocks,
    { type: "text", text: userPrompt },
  ]

  const body = {
    model: "claude-opus-4-7",
    max_tokens: 4096,
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userContent }],
  }

  let res: Response
  try {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    })
  } catch (e) {
    return NextResponse.json(
      { error: `Anthropic API への接続に失敗しました: ${e instanceof Error ? e.message : "unknown"}` },
      { status: 502 },
    )
  }

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const msg =
      (data && typeof data === "object" && "error" in data && (data as { error?: { message?: string } }).error?.message) ||
      `Anthropic API エラー (HTTP ${res.status})`
    return NextResponse.json({ error: msg }, { status: res.status })
  }

  const text =
    (data?.content as Array<{ type: string; text?: string }> | undefined)
      ?.filter((b) => b.type === "text")
      .map((b) => b.text ?? "")
      .join("\n") ?? ""

  let parsed: unknown
  try {
    parsed = extractJson(text)
  } catch (e) {
    return NextResponse.json(
      {
        error: e instanceof Error ? e.message : "AI応答の解析に失敗しました",
        raw: text,
      },
      { status: 502 },
    )
  }

  return NextResponse.json({
    script: parsed,
    usage: data?.usage ?? null,
  })
}
