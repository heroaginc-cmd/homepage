"use client"

import { useState } from "react"
import styles from "./DramaGenerator.module.css"

type GeneratorState = "idle" | "loading" | "done" | "error"

export default function DramaGenerator() {
  const [genre, setGenre] = useState("")
  const [setting, setSetting] = useState("")
  const [theme, setTheme] = useState("")
  const [result, setResult] = useState("")
  const [state, setState] = useState<GeneratorState>("idle")

  const handleGenerate = async () => {
    if (!genre || !setting || !theme) return
    setState("loading")
    setResult("")

    try {
      const res = await fetch("/api/generate-drama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre, setting, theme }),
      })
      const data = await res.json()
      setResult(data.script)
      setState("done")
    } catch {
      setState("error")
    }
  }

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>ジャンル</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">選択してください</option>
              <option value="恋愛">恋愛</option>
              <option value="ビジネス">ビジネス</option>
              <option value="コメディ">コメディ</option>
              <option value="感動">感動</option>
              <option value="サスペンス">サスペンス</option>
            </select>
            <span className={styles.selectArrow}>▼</span>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>舞台・設定</label>
          <input
            type="text"
            className={styles.input}
            placeholder="例：東京のカフェ、会社の会議室"
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>テーマ・伝えたいこと</label>
          <input
            type="text"
            className={styles.input}
            placeholder="例：挑戦することの大切さ、諦めない心"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        {state === "loading" ? (
          <div className={styles.loading}>
            <span className={styles.spinner} />
            AIが台本を生成しています...
          </div>
        ) : (
          <button
            className={styles.button}
            onClick={handleGenerate}
            disabled={!genre || !setting || !theme}
          >
            台本を生成する
          </button>
        )}

        {state === "error" && (
          <p className={styles.error}>エラーが発生しました。もう一度お試しください。</p>
        )}
      </div>

      {state === "done" && result && (
        <div className={styles.result}>
          <p className={styles.resultLabel}>Generated Script</p>
          <h2 className={styles.resultHeading}>生成された台本</h2>
          <pre className={styles.script}>{result}</pre>
          <div className={styles.ctaRow}>
            <a
              href="https://lin.ee/vBEfQwi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#F18E24", color: "#ffffff", padding: "14px 32px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none" }}
            >
              この台本について相談する（LINE）
            </a>
            <p className={styles.ctaNote}>
              プロによる脚本・撮影・編集もお気軽にご相談ください。
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
