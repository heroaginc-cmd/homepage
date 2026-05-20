import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
}

const services = [
  {
    id: "01",
    title: "ショートドラマ制作",
    tagline: "採用・集客・ブランディングを目的としたAI活用型ショートドラマを制作。SNSで届くコンテンツを量産します。",
    sections: [
      {
        heading: "こんな企業におすすめ",
        items: ["採用に課題を抱えている企業", "SNSでの集客を強化したい企業", "ブランドイメージを映像で伝えたい企業"],
        ordered: false,
      },
      {
        heading: "制作の流れ",
        items: ["ヒアリング・企画立案", "脚本・絵コンテ作成", "撮影・編集", "納品・SNS投稿サポート"],
        ordered: true,
      },
    ],
    pricing: [
      { plan: "ライトプラン", price: "¥150,000〜 / 月" },
      { plan: "スタンダードプラン", price: "¥300,000〜 / 月" },
      { plan: "プレミアムプラン", price: "¥1,000,000〜 / 月" },
    ],
  },
  {
    id: "02",
    title: "マーケティングコンサル",
    tagline: "コンセプト設計からSNS・LINE設計まで、集客の仕組みを一気通貫で構築します。",
    sections: [
      {
        heading: "サービス内容",
        items: ["ブランドコンセプト設計", "SNS戦略・運用設計", "LINE公式アカウント設計・配信設計", "販売動線の構築"],
        ordered: false,
      },
    ],
    pricing: [{ plan: "3ヶ月コース", price: "¥100,000 / 月（計 ¥300,000）" }],
  },
  {
    id: "03",
    title: "映像制作",
    tagline: "ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。",
    sections: [
      {
        heading: "制作実績",
        items: ["ビデオポッドキャスト", "商品・サービス紹介映像", "インタビュー・事例映像", "SNS向けショート映像"],
        ordered: false,
      },
    ],
    pricing: [{ plan: "スポット制作", price: "¥150,000〜（内容応相談）" }],
  },
  {
    id: "04",
    title: "AI支援",
    tagline: "AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。",
    sections: [
      {
        heading: "支援内容",
        items: ["AI台本自動生成ツールの導入", "SNS投稿コンテンツの自動化", "社内業務フローのAI最適化", "カスタムAIツール設計・構築"],
        ordered: false,
      },
    ],
    pricing: [{ plan: "スポット / 月額顧問", price: "内容に応じてご相談" }],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{ padding: "96px 24px", backgroundColor: "#F9F9F9" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "16px" }}>Services</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "24px" }}>提供サービス</h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#6B6B6B", maxWidth: "42rem", lineHeight: 1.7 }}>
            AIと映像を軸に、事業成長に必要なマーケティング支援を一括で提供します。
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} style={{ padding: "96px 24px", backgroundColor: index % 2 === 0 ? "#ffffff" : "#F9F9F9" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div className={styles.serviceLayout}>
              <div>
                <p style={{ fontSize: "0.75rem", color: "#F18E24", letterSpacing: "0.1em", marginBottom: "16px" }}>{service.id}</p>
                <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#1A1A1A", marginBottom: "24px" }}>{service.title}</h2>
                <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "32px" }}>{service.tagline}</p>
                <a
                  href="https://lin.ee/vBEfQwi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", backgroundColor: "#F18E24", color: "#ffffff", fontSize: "0.875rem", padding: "12px 32px", letterSpacing: "0.05em", textDecoration: "none" }}
                >
                  LINEで相談する
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {service.sections.map((sec) => (
                  <div key={sec.heading}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#6B6B6B", textTransform: "uppercase", marginBottom: "16px" }}>{sec.heading}</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {sec.items.map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", color: "#1A1A1A" }}>
                          <span style={{ color: "#F18E24", marginTop: "2px", flexShrink: 0 }}>
                            {sec.ordered ? `${String(i + 1).padStart(2, "0")}.` : "—"}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#6B6B6B", textTransform: "uppercase", marginBottom: "16px" }}>料金</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.pricing.map((p) => (
                      <div key={p.plan} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E5E5E5", paddingBottom: "12px" }}>
                        <span style={{ fontSize: "0.875rem", color: "#6B6B6B" }}>{p.plan}</span>
                        <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1A1A1A" }}>{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "96px 24px", backgroundColor: "#1A1A1A" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "24px" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>まず、話してみませんか。</h2>
          <p style={{ fontSize: "0.875rem", color: "#A3A3A3", maxWidth: "32rem", margin: "0 auto 48px", lineHeight: 1.7 }}>
            どのサービスが合うかわからない場合もお気軽にご相談ください。
          </p>
          <a
            href="https://lin.ee/vBEfQwi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "#F18E24", color: "#ffffff", padding: "16px 40px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none" }}
          >
            LINEで無料相談する
          </a>
        </div>
      </section>

    </main>
  )
}
