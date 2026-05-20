import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
}

export default function AboutPage() {
  return (
    <main className="pt-20">

      {/* ミッション Hero */}
      <section className="min-h-[50vh] flex items-center bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">Mission</p>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            伝わるを<span className="text-[#F18E24] font-semibold">創る</span>
          </h1>
          <p className="text-base md:text-lg text-[#A3A3A3] max-w-xl leading-relaxed">
            可能性を最大化させ、価値の創造に伴走する。
          </p>
        </div>
      </section>

      {/* Value */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">Value</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-16">私たちが大切にすること</h2>
          <ol className="flex flex-col gap-0 divide-y divide-[#E5E5E5]">
            {[
              "顧客の願う成果を共に求め",
              "本質的な価値を追求し",
              "関わる全ての企業への感謝を忘れず",
              "常に挑戦する心を持って",
              "最高の成果を創造する",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 py-6">
                <span className="text-2xl font-light text-[#F18E24] w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base md:text-lg text-[#1A1A1A]">{item}</p>
              </div>
            ))}
          </ol>
        </div>
      </section>

      {/* 会社概要テーブル */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">Company</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-16">会社概要</h2>
          <div className="border-t border-[#E5E5E5]">
            {[
              { label: "会社名", value: "HERO株式会社" },
              { label: "代表者", value: "山形 啓泰（YAMAGATA HIROYASU）" },
              { label: "創業", value: "2021年10月8日" },
              { label: "本社", value: "石川県金沢市京町20番41号" },
              { label: "支店", value: "東京都渋谷区本町3丁目38番1号" },
              { label: "事業内容", value: "ショートドラマ制作 / マーケティングコンサルティング / 映像制作 / AI支援" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row border-b border-[#E5E5E5] py-6 gap-4">
                <dt className="text-xs tracking-widest text-[#6B6B6B] uppercase sm:w-40 shrink-0">{label}</dt>
                <dd className="text-sm text-[#1A1A1A] leading-relaxed">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">Contact</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">まず、話してみませんか。</h2>
          <p className="text-sm text-[#A3A3A3] mb-12 max-w-lg mx-auto leading-relaxed">
            初回相談は無料です。どんな段階でもお気軽にどうぞ。
          </p>
          <a
            href="https://lin.ee/vBEfQwi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F18E24] text-white px-10 py-4 text-sm tracking-wider hover:bg-[#D4780F] transition-colors"
          >
            LINEで相談する
          </a>
        </div>
      </section>

    </main>
  )
}
