import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
}

export default function HomePage() {
  return (
    <main className="pt-20">
      <section className="min-h-screen flex items-center bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">HERO Inc. / AI x Media</p>
          <h1 className="text-4xl md:text-6xl font-light text-[#1A1A1A] leading-tight mb-8">
            AI x メディアで、<br />
            <span className="text-[#F18E24] font-semibold">事業を次のステージへ。</span>
          </h1>
          <p className="text-base md:text-lg text-[#6B6B6B] max-w-2xl leading-relaxed mb-12">
            ビデオポッドキャスト、ショートドラマ、AIを活用したSNS運用支援など最先端のマーケティング支援から泥臭い販売動線設計まで一括で支援。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className="bg-[#F18E24] text-white px-8 py-4 text-sm tracking-wider hover:bg-[#D4780F] transition-colors text-center">
              まず相談してみる（LINE）
            </a>
            <Link href="/drama-generator" className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 text-sm tracking-wider hover:bg-[#1A1A1A] hover:text-white transition-colors text-center">
              AI台本生成を無料体験
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-16">提供サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
            <Link href="/services" className="bg-white p-10 hover:bg-[#F9F9F9] transition-colors group">
              <p className="text-xs text-[#F18E24] tracking-widest mb-4">01</p>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 group-hover:text-[#F18E24] transition-colors">ショートドラマ制作</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">AIを活用したブランデッドショートドラマの企画・脚本・制作。SNSで届くコンテンツを量産します。</p>
            </Link>
            <Link href="/services" className="bg-white p-10 hover:bg-[#F9F9F9] transition-colors group">
              <p className="text-xs text-[#F18E24] tracking-widest mb-4">02</p>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 group-hover:text-[#F18E24] transition-colors">マーケティングコンサル</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">コンセプト設計からSNS・LINE設計まで、集客の仕組みを一気通貫で構築します。</p>
            </Link>
            <Link href="/services" className="bg-white p-10 hover:bg-[#F9F9F9] transition-colors group">
              <p className="text-xs text-[#F18E24] tracking-widest mb-4">03</p>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 group-hover:text-[#F18E24] transition-colors">映像制作</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。</p>
            </Link>
            <Link href="/drama-generator" className="bg-white p-10 hover:bg-[#F9F9F9] transition-colors group">
              <p className="text-xs text-[#F18E24] tracking-widest mb-4">04</p>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-3 group-hover:text-[#F18E24] transition-colors">AI支援</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-[#F18E24] uppercase mb-6">Contact</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">まず、話してみませんか。</h2>
          <p className="text-sm text-[#A3A3A3] mb-12 max-w-lg mx-auto leading-relaxed">課題やアイデアをお気軽にLINEでご相談ください。初回相談は無料です。</p>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F18E24] text-white px-10 py-4 text-sm tracking-wider hover:bg-[#D4780F] transition-colors">
            LINEで相談する
          </a>
        </div>
      </section>
    </main>
  )
}
