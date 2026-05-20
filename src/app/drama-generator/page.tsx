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
      <section style={{ backgroundColor: "#1A1A1A", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "16px" }}>
            Free Tool
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.25, marginBottom: "16px" }}>
            AI台本生成
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#A3A3A3", maxWidth: "36rem", lineHeight: 1.7 }}>
            ジャンル・舞台・テーマを入力するだけで、AIがショートドラマの台本を自動生成します。初回無料でお試しください。
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ backgroundColor: "#F9F9F9", padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <DramaGenerator />
        </div>
      </section>

    </main>
  )
}
