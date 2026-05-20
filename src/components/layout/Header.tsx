import Link from "next/link"

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          HERO株式会社
        </Link>
        <ul>
          <li><Link href="/about">会社概要</Link></li>
          <li><Link href="/services">サービス</Link></li>
          <li><Link href="/works">実績</Link></li>
          <li><Link href="/blog">ブログ</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで相談する
        </a>
      </nav>
    </header>
  )
}
