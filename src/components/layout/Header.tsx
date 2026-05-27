"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-widest text-white">
          HERO
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li><Link href="/services" className="text-sm text-white hover:text-[#F18E24] transition-colors">サービス</Link></li>
          <li><Link href="/blog" className="text-sm text-white hover:text-[#F18E24] transition-colors">ブログ</Link></li>
        </ul>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#F18E24] text-white text-sm px-5 py-2 hover:bg-[#D4780F] transition-colors">
          LINEで相談する
        </a>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="メニュー">
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#404040] px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/services" className="text-sm text-white" onClick={() => setIsOpen(false)}>サービス</Link></li>
            <li><Link href="/blog" className="text-sm text-white" onClick={() => setIsOpen(false)}>ブログ</Link></li>
            <li>
              <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className="block bg-[#F18E24] text-white text-sm px-5 py-2 text-center" onClick={() => setIsOpen(false)}>
                LINEで相談する
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
