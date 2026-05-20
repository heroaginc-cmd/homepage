import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { genre, setting, theme } = await req.json()

  const prompt = `あなたはプロの脚本家です。以下の条件でSNS向けショートドラマの台本を書いてください。

【ジャンル】${genre}
【舞台・設定】${setting}
【テーマ】${theme}

以下の形式で書いてください：
- 登場人物（2〜3人）
- シーン1〜3（各シーンに台詞と簡単な状況説明）
- 尺：60〜90秒を想定

台本のみ出力してください。`

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  })

  const data = await response.json()
  const script = data.content?.[0]?.text ?? "台本の生成に失敗しました。"

  return NextResponse.json({ script })
}
