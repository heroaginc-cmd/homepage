import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
}

export default function HomePage() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section>
        <h1>AI×メディアで、事業を次のステージへ。</h1>
        <p>
          ビデオポッドキャスト、ショートドラマ、AIを活用したSNS運用支援など
          最先端のマーケティング支援から泥臭い販売動線設計まで一括で支援。
        </p>
        <div>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
            まず相談してみる（LINE）
          </a>
          <Link href="/drama-generator">
            AI台本生成を無料体験
          </Link>
        </div>
      </section>

      {/* サービス概要 */}
      <section>
        <h2>サービス</h2>
        <div>
          <div>
            <h3>ショートドラマ制作</h3>
            <p>AIを活用したブランデッドショートドラマの企画・脚本・制作。SNSで届くコンテンツを量産します。</p>
            <Link href="/services">詳しく見る</Link>
          </div>
          <div>
            <h3>マーケティングコンサル</h3>
            <p>SNS戦略・オウンドメディア設計・販売動線の構築まで。戦略から実行まで一気通貫で伴走します。</p>
            <Link href="/services">詳しく見る</Link>
          </div>
          <div>
            <h3>映像制作</h3>
            <p>ビデオポッドキャスト・商品紹介・インタビュー映像など、目的に応じた映像を制作します。</p>
            <Link href="/services">詳しく見る</Link>
          </div>
          <div>
            <h3>AI支援</h3>
            <p>AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。</p>
            <Link href="/drama-generator">無料体験する</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <h2>まず、話してみませんか。</h2>
        <p>課題やアイデアをお気軽にLINEでご相談ください。初回相談は無料です。</p>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで相談する
        </a>
      </section>
    </main>
  )
}
