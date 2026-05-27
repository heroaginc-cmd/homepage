import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="text-xl font-bold tracking-widest text-[#F18E24] mb-4">HERO</p>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">AI×メディアで、<br />事業を次のステージへ。</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-[#F18E24] mb-4 uppercase">Services</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">ショートドラマ制作</Link></li>
              <li><Link href="/services" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">マーケティングコンサル</Link></li>
              <li><Link href="/services" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">映像制作</Link></li>
              <li><Link href="/drama-generator" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">AI台本生成</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-[#F18E24] mb-4 uppercase">Company</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/works" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">実績・事例</Link></li>
              <li><Link href="/blog" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">ブログ</Link></li>
              <li><Link href="/contact" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-[#F18E24] mb-4 uppercase">Legal</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/privacy" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/tokusho" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">特定商取引法</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#404040] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B6B6B]">© {new Date().getFullYear()} HERO株式会社. All rights reserved.</p>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className="text-xs text-[#F18E24] hover:text-[#FFA94D] transition-colors">
            LINEで相談する →
          </a>
        </div>
      </div>
    </footer>
  )
}
