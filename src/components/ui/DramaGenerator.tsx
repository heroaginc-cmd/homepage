"use client"

import { useRef, useState } from "react"
import styles from "./DramaGenerator.module.css"

type GeneratorState = "idle" | "gate"

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
const LINE_URL = "https://lin.ee/vBEfQwi"

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

  const handleSubmit = () => {
    if (!requiredOk) return
    setErrorMsg("")
    setState("gate")
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        document
          .getElementById("line-gate")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
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
            台本制作の参考としてアップロードできます（任意）。
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

        <button
          type="button"
          className={styles.button}
          onClick={handleSubmit}
          disabled={!requiredOk}
        >
          台本を生成する
        </button>

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>

      {state === "gate" && <LineGate />}
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

function LineGate() {
  return (
    <div id="line-gate" className={styles.gate} role="region" aria-live="polite">
      <p className={styles.gateEyebrow}>LINE限定</p>
      <h3 className={styles.gateHeading}>
        台本を受け取るにはLINE公式アカウントの追加が必要です
      </h3>
      <p className={styles.gateText}>
        ご入力いただいた条件をもとに作成した台本を、LINEでお送りします。下のボタンから友だち追加後、トーク画面にて台本をお受け取りください。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.gateButton}
      >
        LINEを追加して台本を受け取る
      </a>
      <p className={styles.gateNote}>
        友だち追加は無料です。ブロックはいつでも可能です。
      </p>
    </div>
  )
}
