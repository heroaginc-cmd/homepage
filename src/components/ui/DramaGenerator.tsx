"use client"

import { useState } from "react"

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
      <h1>AIドラマ台本生成</h1>
      <p>プロンプトを入力するだけで、AIがショートドラマの台本を自動生成します。</p>
      <div>
        <label>ジャンル</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">選択してください</option>
          <option value="恋愛">恋愛</option>
          <option value="ビジネス">ビジネス</option>
          <option value="コメディ">コメディ</option>
          <option value="感動">感動</option>
          <option value="サスペンス">サスペンス</option>
        </select>
      </div>
      <div>
        <label>舞台・設定</label>
        <input
          type="text"
          placeholder="例：東京のカフェ、会社の会議室"
          value={setting}
          onChange={(e) => setSetting(e.target.value)}
        />
      </div>
      <div>
        <label>テーマ・伝えたいこと</label>
        <input
          type="text"
          placeholder="例：挑戦することの大切さ、諦めない心"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>
      <button onClick={handleGenerate} disabled={state === "loading"}>
        {state === "loading" ? "生成中..." : "台本を生成する"}
      </button>
      {state === "error" && <p>エラーが発生しました。もう一度お試しください。</p>}
      {state === "done" && result && (
        <div>
          <h2>生成された台本</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
}
