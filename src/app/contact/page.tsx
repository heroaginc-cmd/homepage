import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
}

const faqs = [
  {
    q: "どんな規模の方でも対応できますか？",
    a: "はい。開業前の個人事業主からスタートアップ・中堅企業まで幅広く対応しています。",
  },
  {
    q: "相談から契約までの流れは？",
    a: "LINEでのヒアリング → オンラインMTG → ご提案・お見積もり → 契約の流れが一般的です。",
  },
  {
    q: "どのエリアに対応していますか？",
    a: "オンラインで全国対応しています。",
  },
  {
    q: "まず何を相談すればいいですか？",
    a: "「こんな課題がある」「こんなことがしたい」という段階でも大丈夫です。一緒に整理します。",
  },
]

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{ minHeight: "50vh", display: "flex", alignItems: "center", backgroundColor: "#0A0F1E" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "96px 24px" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "24px" }}>Contact</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>
            お問い合わせ
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#B5BBCC", maxWidth: "36rem", lineHeight: 1.7 }}>
            サービスのご相談・お見積もりは、LINEからお気軽にどうぞ。初回相談は無料です。
          </p>
        </div>
      </section>

      {/* LINE CTA */}
      <section style={{ padding: "96px 24px", backgroundColor: "#131A2E" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "16px" }}>LINE</p>
            <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#FFFFFF", marginBottom: "24px" }}>LINEで相談する</h2>
            <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7, marginBottom: "40px" }}>
              下記のボタンからHERO株式会社の公式LINEを友だち追加してください。
              メッセージを送っていただければ、担当者が丁寧にご返信いたします。
            </p>
            <a
              href="https://lin.ee/vBEfQwi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: "linear-gradient(135deg, #FFD200 0%, #FF3A7A 100%)", color: "#0A0F1E", padding: "16px 40px", fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "0.02em", textDecoration: "none", borderRadius: "9999px" }}
            >
              LINEで無料相談する
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 24px", backgroundColor: "#0A0F1E" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "16px" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#FFFFFF", marginBottom: "64px" }}>よくある質問</h2>
          <div style={{ borderTop: "1px solid #2A3354" }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: "32px 0", borderBottom: "1px solid #2A3354", display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
                <dt style={{ fontSize: "1rem", fontWeight: 500, color: "#FFFFFF" }}>{q}</dt>
                <dd style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>{a}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
