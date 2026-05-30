"use client"

import { useRef, useState } from "react"
import styles from "./DramaGenerator.module.css"

type GeneratorState = "idle" | "loading" | "done" | "error"

type Line = { character: string; dialogue: string }
type Scene = { scene_number: number; direction: string; lines: Line[] }
type Character = { name: string; description: string }
type Script = {
  title: string
  logline: string
  characters: Character[]
  scenes: Scene[]
}

const PURPOSES = ["採用", "集客", "ブランディング", "認知拡大"] as const
const DURATIONS = ["15秒", "30秒", "60秒", "90秒"] as const
const PLATFORMS = ["TikTok", "Instagram Reels", "YouTube Shorts"] as const
const TONES = ["感動系", "共感系", "笑い系", "リアル系", "驚き系"] as const
const HOOKS = ["問題提起", "共感", "驚き", "セリフから始める"] as const

const IMAGE_SLOTS = [
  { field: "image_location", label: "舞台・場所", hint: "撮影場所や舞台のイメージ写真" },
  { field: "image_reference", label: "参考イメージ", hint: "演出・トーンの参考画像" },
  { field: "image_product", label: "商品・サービス", hint: "商品やサービスの画像" },
] as const

type ImageField = (typeof IMAGE_SLOTS)[number]["field"]

const MAX_IMAGE_BYTES = 5 * 1024 * 1024

export default function DramaGenerator() {
  // required
  const [companyName, setCompanyName] = useState("")
  const [purpose, setPurpose] = useState<string>("")
  const [duration, setDuration] = useState<string>("")
  const [platform, setPlatform] = useState<string>("")
  const [message, setMessage] = useState("")

  // optional
  const [showOptional, setShowOptional] = useState(false)
  const [targetAge, setTargetAge] = useState("")
  const [targetIssue, setTargetIssue] = useState("")
  const [tone, setTone] = useState<string>("")
  const [characters, setCharacters] = useState("")
  const [setting, setSetting] = useState("")
  const [hook, setHook] = useState<string>("")
  const [ngWords, setNgWords] = useState("")

  // images
  const [images, setImages] = useState<Partial<Record<ImageField, File>>>({})
  const [previews, setPreviews] = useState<Partial<Record<ImageField, string>>>({})
  const inputRefs = useRef<Partial<Record<ImageField, HTMLInputElement | null>>>({})

  const [state, setState] = useState<GeneratorState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [script, setScript] = useState<Script | null>(null)

  const requiredOk =
    companyName.trim() && purpose && duration && platform && message.trim()

  const handleImage = (field: ImageField, file: File | null) => {
    if (!file) {
      setImages((p) => {
        const next = { ...p }
        delete next[field]
        return next
      })
      setPreviews((p) => {
        const next = { ...p }
        if (next[field]) URL.revokeObjectURL(next[field]!)
        delete next[field]
        return next
      })
      return
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setErrorMsg(`画像サイズが大きすぎます（上限5MB）: ${file.name}`)
      return
    }
    setErrorMsg("")
    setImages((p) => ({ ...p, [field]: file }))
    setPreviews((p) => {
      if (p[field]) URL.revokeObjectURL(p[field]!)
      return { ...p, [field]: URL.createObjectURL(file) }
    })
  }

  const handleGenerate = async () => {
    if (!requiredOk) return
    setState("loading")
    setScript(null)
    setErrorMsg("")

    const form = new FormData()
    form.set("companyName", companyName)
    form.set("purpose", purpose)
    form.set("duration", duration)
    form.set("platform", platform)
    form.set("message", message)
    if (targetAge) form.set("targetAge", targetAge)
    if (targetIssue) form.set("targetIssue", targetIssue)
    if (tone) form.set("tone", tone)
    if (characters) form.set("characters", characters)
    if (setting) form.set("setting", setting)
    if (hook) form.set("hook", hook)
    if (ngWords) form.set("ngWords", ngWords)
    for (const slot of IMAGE_SLOTS) {
      const file = images[slot.field]
      if (file) form.set(slot.field, file)
    }

    try {
      const res = await fetch("/api/generate-drama", { method: "POST", body: form })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data?.error ?? "生成に失敗しました")
        setState("error")
        return
      }
      setScript(data.script as Script)
      setState("done")
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "通信エラーが発生しました")
      setState("error")
    }
  }

  return (
    <div>
      <div className={styles.form}>
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Required</p>
          <h2 className={styles.sectionTitle}>必須項目</h2>

          <Field label="会社名・サービス名">
            <input
              type="text"
              className={styles.input}
              placeholder="例：株式会社HERO / AI台本生成サービス"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Field>

          <Field label="目的">
            <ChipSelect
              options={PURPOSES as unknown as string[]}
              value={purpose}
              onChange={setPurpose}
            />
          </Field>

          <Field label="尺">
            <ChipSelect
              options={DURATIONS as unknown as string[]}
              value={duration}
              onChange={setDuration}
            />
          </Field>

          <Field label="プラットフォーム">
            <ChipSelect
              options={PLATFORMS as unknown as string[]}
              value={platform}
              onChange={setPlatform}
            />
          </Field>

          <Field label="訴求メッセージ">
            <input
              type="text"
              className={styles.input}
              placeholder="例：忙しい人でもAIで動画運用が回せる"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Field>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Images</p>
          <h2 className={styles.sectionTitle}>参考画像（最大3枚）</h2>
          <p className={styles.hint}>
            アップロードした画像をAIが確認し、舞台設定や商品の特徴を脚本に反映します。
          </p>
          <div className={styles.imageGrid}>
            {IMAGE_SLOTS.map((slot) => (
              <div key={slot.field} className={styles.imageSlot}>
                <p className={styles.imageLabel}>{slot.label}</p>
                <p className={styles.imageHint}>{slot.hint}</p>
                <input
                  ref={(el) => {
                    inputRefs.current[slot.field] = el
                  }}
                  id={`img-${slot.field}`}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className={styles.fileInput}
                  onChange={(e) => handleImage(slot.field, e.target.files?.[0] ?? null)}
                />
                {previews[slot.field] ? (
                  <div className={styles.preview}>
                    {}
                    <img
                      src={previews[slot.field]!}
                      alt={slot.label}
                      className={styles.previewImg}
                    />
                    <button
                      type="button"
                      className={styles.previewRemove}
                      onClick={() => {
                        handleImage(slot.field, null)
                        const el = inputRefs.current[slot.field]
                        if (el) el.value = ""
                      }}
                    >
                      削除
                    </button>
                  </div>
                ) : (
                  <label htmlFor={`img-${slot.field}`} className={styles.uploadBox}>
                    <span className={styles.uploadPlus}>+</span>
                    <span className={styles.uploadText}>画像を選択</span>
                  </label>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowOptional((v) => !v)}
            aria-expanded={showOptional}
          >
            <span>{showOptional ? "詳細設定を閉じる" : "詳細設定を開く"}</span>
            <span className={styles.toggleArrow} aria-hidden>
              {showOptional ? "−" : "+"}
            </span>
          </button>

          {showOptional && (
            <div className={styles.optional}>
              <Field label="ターゲット年齢層">
                <input
                  type="text"
                  className={styles.input}
                  placeholder="例：20代後半〜30代前半の女性"
                  value={targetAge}
                  onChange={(e) => setTargetAge(e.target.value)}
                />
              </Field>

              <Field label="ターゲットの悩み・課題">
                <input
                  type="text"
                  className={styles.input}
                  placeholder="例：SNS運用の時間が取れない"
                  value={targetIssue}
                  onChange={(e) => setTargetIssue(e.target.value)}
                />
              </Field>

              <Field label="ジャンル・トーン">
                <ChipSelect
                  options={TONES as unknown as string[]}
                  value={tone}
                  onChange={setTone}
                />
              </Field>

              <Field label="登場人物（人数・関係性・キャラクター）">
                <input
                  type="text"
                  className={styles.input}
                  placeholder="例：先輩女性社員と新人後輩の2人"
                  value={characters}
                  onChange={(e) => setCharacters(e.target.value)}
                />
              </Field>

              <Field label="舞台・シチュエーション">
                <input
                  type="text"
                  className={styles.input}
                  placeholder="例：オフィスの給湯室"
                  value={setting}
                  onChange={(e) => setSetting(e.target.value)}
                />
              </Field>

              <Field label="冒頭の掴み方">
                <ChipSelect
                  options={HOOKS as unknown as string[]}
                  value={hook}
                  onChange={setHook}
                />
              </Field>

              <Field label="NGワード・見せたくないこと">
                <input
                  type="text"
                  className={styles.input}
                  placeholder="例：競合サービス名は出さない"
                  value={ngWords}
                  onChange={(e) => setNgWords(e.target.value)}
                />
              </Field>
            </div>
          )}
        </section>

        {state === "loading" ? (
          <div className={styles.loading}>
            <span className={styles.spinner} />
            AIが台本を生成しています...（30秒前後かかります）
          </div>
        ) : (
          <button
            type="button"
            className={styles.button}
            onClick={handleGenerate}
            disabled={!requiredOk}
          >
            台本を生成する
          </button>
        )}

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>

      {state === "done" && script && <ScriptResult script={script} />}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

function ChipSelect({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className={styles.chips}>
      {options.map((opt) => {
        const active = value === opt
        return (
          <button
            key={opt}
            type="button"
            className={active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
            onClick={() => onChange(active ? "" : opt)}
            aria-pressed={active}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function ScriptResult({ script }: { script: Script }) {
  return (
    <div className={styles.result}>
      <p className={styles.resultLabel}>Generated Script</p>
      <h2 className={styles.resultHeading}>{script.title || "生成された台本"}</h2>
      {script.logline && <p className={styles.logline}>{script.logline}</p>}

      {script.characters?.length > 0 && (
        <div className={styles.charBlock}>
          <p className={styles.metaLabel}>登場人物</p>
          <ul className={styles.charList}>
            {script.characters.map((c, i) => (
              <li key={i}>
                <span className={styles.charName}>{c.name}</span>
                <span className={styles.charDesc}>{c.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SceneList scenes={script.scenes ?? []} />
    </div>
  )
}

function SceneCard({ scene }: { scene: Scene }) {
  return (
    <li className={styles.scene}>
      <div className={styles.sceneHeader}>
        <span className={styles.sceneNum}>SCENE {scene.scene_number}</span>
      </div>
      {scene.direction && <p className={styles.direction}>{scene.direction}</p>}
      {scene.lines?.length > 0 && (
        <div className={styles.lines}>
          {scene.lines.map((line, i) => (
            <div key={i} className={styles.line}>
              <span className={styles.lineChar}>{line.character}</span>
              <span className={styles.lineDialogue}>{line.dialogue}</span>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

function SceneList({ scenes }: { scenes: Scene[] }) {
  if (scenes.length === 0) return null
  const visibleCount = Math.max(1, Math.floor(scenes.length / 3))
  const visible = scenes.slice(0, visibleCount)
  const locked = scenes.slice(visibleCount)

  return (
    <>
      <ol className={styles.sceneList}>
        {visible.map((scene) => (
          <SceneCard key={scene.scene_number} scene={scene} />
        ))}
      </ol>

      {locked.length > 0 && (
        <div className={styles.lockedSection} aria-label="続きはLINEで受け取れます">
          <ol
            className={styles.sceneList}
            aria-hidden
            tabIndex={-1}
            style={{
              filter: "blur(8px)",
              pointerEvents: "none",
              userSelect: "none",
              marginTop: "20px",
            }}
          >
            {locked.map((scene) => (
              <SceneCard key={scene.scene_number} scene={scene} />
            ))}
          </ol>
          <div className={styles.lockOverlay}>
            <div className={styles.lockCard}>
              <p className={styles.lockEyebrow}>Locked</p>
              <p className={styles.lockText}>
                この続きはLINEで受け取れます
              </p>
              <p className={styles.lockSubtext}>
                友だち追加後、生成された台本のフルバージョンをお送りします。
              </p>
              <a
                href="https://lin.ee/vBEfQwi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lockButton}
              >
                LINEで台本を受け取る
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
