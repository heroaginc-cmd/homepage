import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

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
        items: [
          "採用に課題を抱えている企業",
          "SNSでの集客を強化したい企業",
          "ブランドイメージを映像で伝えたい企業",
        ],
      },
      {
        heading: "制作の流れ",
        items: [
          "ヒアリング・企画立案",
          "脚本・絵コンテ作成",
          "撮影・編集",
          "納品・SNS投稿サポート",
        ],
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
        items: [
          "ブランドコンセプト設計",
          "SNS戦略・運用設計",
          "LINE公式アカウント設計・配信設計",
          "販売動線の構築",
        ],
      },
    ],
    pricing: [
      { plan: "3ヶ月コース", price: "¥100,000 / 月（計 ¥300,000）" },
    ],
  },
  {
    id: "03",
    title: "映像制作",
    tagline: "ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。",
    sections: [
      {
        heading: "制作実績",
        items: [
          "ビデオポッドキャスト",
          "商品・サービス紹介映像",
          "インタビュー・事例映像",
          "SNS向けショート映像",
        ],
      },
    ],
    pricing: [
      { plan: "スポット制作", price: "¥150,000〜（内容応相談）" },
    ],
  },
  {
    id: "04",
    title: "AI支援",
    tagline: "AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。",
    sections: [
      {
        heading: "支援内容",
        items: [
          "AI台本自動生成ツールの導入",
          "SNS投稿コンテンツの自動化",
          "社内業務フローのAI最適化",
          "カスタムAIツール設計・構築",
        ],
      },
    ],
    pricing: [
      { plan: "スポット / 月額顧問", price: "内容に応じてご相談" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-light text-[#1A1A1A] leading-tight mb-6">
            提供サービス
          </h1>
          <p className="text-base md:text-lg text-[#6B6B6B] max-w-2xl leading-relaxed">
            AIと映像を軸に、事業成長に必要なマーケティング支援を一括で提供します。
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#F9F9F9]"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <p className="text-xs text-[#F18E24] tracking-widest mb-4">{service.id}</p>
                <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">{service.title}</h2>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-8">{service.tagline}</p>
                <a
                  href="https://lin.ee/vBEfQwi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F18E24] text-white text-sm px-8 py-3 hover:bg-[#D4780F] transition-colors tracking-wider"
                >
                  LINEで相談する
                </a>
              </div>
              {/* Right */}
              <div className="flex flex-col gap-8">
                {service.sections.map((sec) => (
                  <div key={sec.heading}>
                    <p className="text-xs tracking-widest text-[#6B6B6B] uppercase mb-4">{sec.heading}</p>
                    <ul className="flex flex-col gap-2">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                          <span className="text-[#F18E24] mt-0.5 shrink-0">
                            {sec.ordered ? `${String(i + 1).padStart(2, "0")}.` : "—"}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* 料金 */}
                <div>
                  <p className="text-xs tracking-widest text-[#6B6B6B] uppercase mb-4">料金</p>
                  <div className="flex flex-col gap-3">
                    {service.pricing.map((p) => (
                      <div key={p.plan} className="flex justify-between items-center border-b border-[#E5E5E5] pb-3">
                        <span className="text-sm text-[#6B6B6B]">{p.plan}</span>
                        <span className="text-sm font-medium text-[#1A1A1A]">{p.price}</span>
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
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">Contact</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">まず、話してみませんか。</h2>
          <p className="text-sm text-[#A3A3A3] mb-12 max-w-lg mx-auto leading-relaxed">
            どのサービスが合うかわからない場合もお気軽にご相談ください。
          </p>
          <a
            href="https://lin.ee/vBEfQwi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F18E24] text-white px-10 py-4 text-sm tracking-wider hover:bg-[#D4780F] transition-colors"
          >
            LINEで無料相談する
          </a>
        </div>
      </section>

    </main>
  )
}
