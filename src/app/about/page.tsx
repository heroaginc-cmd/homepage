import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
}

const values = [
  "顧客の願う成果を共に求め",
  "本質的な価値を追求し",
  "関わる全ての企業への感謝を忘れず",
  "常に挑戦する心を持って",
  "最高の成果を創造する",
]

const companyInfo = [
  { label: "会社名", value: "HERO株式会社" },
  { label: "代表者", value: "山形 啓泰（YAMAGATA HIROYASU）" },
  { label: "創業", value: "2021年10月8日" },
  { label: "本社", value: "石川県金沢市京町20番41号" },
  { label: "支店", value: "東京都渋谷区本町3丁目38番1号" },
  { label: "事業内容", value: "ショートドラマ制作 / マーケティングコンサルティング / 映像制作 / AI支援" },
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{ minHeight: "50vh", display: "flex", alignItems: "center", backgroundColor: "#1A1A1A" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "96px 24px" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "24px" }}>Mission</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>
            伝わるを<span style={{ color: "#F18E24", fontWeight: 600 }}>創る</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#A3A3A3", maxWidth: "36rem", lineHeight: 1.7 }}>
            可能性を最大化させ、価値の創造に伴走する。
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "96px 24px", backgroundColor: "#F9F9F9" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "16px" }}>Value</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#1A1A1A", marginBottom: "64px" }}>私たちが大切にすること</h2>
          <div style={{ borderTop: "1px solid #E5E5E5" }}>
            {values.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "32px", padding: "24px 0", borderBottom: "1px solid #E5E5E5" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 300, color: "#F18E24", width: "32px", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#1A1A1A" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section style={{ padding: "96px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "16px" }}>Company</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#1A1A1A", marginBottom: "64px" }}>会社概要</h2>
          <div style={{ borderTop: "1px solid #E5E5E5" }}>
            {companyInfo.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", borderBottom: "1px solid #E5E5E5", padding: "24px 0", gap: "16px" }}>
                <dt style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#6B6B6B", textTransform: "uppercase", width: "160px", flexShrink: 0 }}>{label}</dt>
                <dd style={{ fontSize: "0.875rem", color: "#1A1A1A", lineHeight: 1.7, flex: 1 }}>{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 24px", backgroundColor: "#1A1A1A" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "24px" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>まず、話してみませんか。</h2>
          <p style={{ fontSize: "0.875rem", color: "#A3A3A3", maxWidth: "32rem", margin: "0 auto 48px", lineHeight: 1.7 }}>
            初回相談は無料です。どんな段階でもお気軽にどうぞ。
          </p>
          <a
            href="https://lin.ee/vBEfQwi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "#F18E24", color: "#ffffff", padding: "16px 40px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none" }}
          >
            LINEで相談する
          </a>
        </div>
      </section>

    </main>
  )
}
