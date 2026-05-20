import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <p>HERO株式会社</p>
          <p>AI×メディアで、事業を次のステージへ。</p>
        </div>

        <div>
          <p>サービス</p>
          <ul>
            <li><Link href="/services">ショートドラマ制作</Link></li>
            <li><Link href="/services">マーケティングコンサル</Link></li>
            <li><Link href="/services">映像制作</Link></li>
            <li><Link href="/drama-generator">AI台本生成</Link></li>
          </ul>
        </div>

        <div>
          <p>会社情報</p>
          <ul>
            <li><Link href="/about">会社概要</Link></li>
            <li><Link href="/works">実績・事例</Link></li>
            <li><Link href="/blog">ブログ</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </div>

        <div>
          <p>法的情報</p>
          <ul>
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
            <li><Link href="/tokusho">特定商取引法</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <p>© {new Date().getFullYear()} HERO株式会社. All rights reserved.</p>
      </div>
    </footer>
  )
}
