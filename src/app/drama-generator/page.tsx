import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import DramaGenerator from "@/components/ui/DramaGenerator"

export const metadata: Metadata = {
  title: pageMeta.dramaGenerator.title,
  description: pageMeta.dramaGenerator.description,
}

export default function DramaGeneratorPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A0F1E", padding: "80px 24px 64px", borderBottom: "1px solid #2A3354" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "16px" }}>
            Free Tool
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.25, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            AI<span style={{ background: "linear-gradient(135deg, #FFD200 0%, #FF3A7A 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>台本生成</span>
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#B5BBCC", maxWidth: "36rem", lineHeight: 1.7 }}>
            会社情報・目的・尺・訴求メッセージを入力し、参考画像をアップロードするだけで、SNSショートドラマの台本制作をサポートします。
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ backgroundColor: "#0A0F1E", padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <DramaGenerator />
        </div>
      </section>

    </main>
  )
}
