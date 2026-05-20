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
    <main className="pt-20">

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">Contact</p>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            お問い合わせ
          </h1>
          <p className="text-base md:text-lg text-[#A3A3A3] max-w-xl leading-relaxed">
            サービスのご相談・お見積もりは、LINEからお気軽にどうぞ。初回相談は無料です。
          </p>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">LINE</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-6">LINEで相談する</h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-10">
              下記のボタンからHERO株式会社の公式LINEを友だち追加してください。
              メッセージを送っていただければ、担当者が丁寧にご返信いたします。
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-16">よくある質問</h2>
          <div className="flex flex-col divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <dt className="text-base font-medium text-[#1A1A1A]">{q}</dt>
                <dd className="text-sm text-[#6B6B6B] leading-relaxed">{a}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
