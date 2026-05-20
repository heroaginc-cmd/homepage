import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
}

export default function ServicesPage() {
  return (
    <main>
      <h1>サービス一覧</h1>
      <p>AIと映像を軸に、事業成長に必要なマーケティング支援を一括で提供します。</p>

      {/* ショートドラマ制作 */}
      <section>
        <h2>ショートドラマ制作</h2>
        <p>採用・集客・ブランディングを目的としたAI活用型ショートドラマを制作。SNSで届くコンテンツを量産します。</p>
        <h3>こんな企業におすすめ</h3>
        <ul>
          <li>採用に課題を抱えている企業</li>
          <li>SNSでの集客を強化したい企業</li>
          <li>ブランドイメージを映像で伝えたい企業</li>
        </ul>
        <h3>制作の流れ</h3>
        <ol>
          <li>ヒアリング・企画立案</li>
          <li>脚本・絵コンテ作成</li>
          <li>撮影・編集</li>
          <li>納品・SNS投稿サポート</li>
        </ol>
        <h3>料金</h3>
        <ul>
          <li>ライトプラン：月額 ¥150,000〜</li>
          <li>スタンダードプラン：月額 ¥300,000〜</li>
          <li>プレミアムプラン：月額 ¥1,000,000〜</li>
        </ul>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで相談する
        </a>
      </section>

      {/* マーケティングコンサル */}
      <section>
        <h2>マーケティングコンサル</h2>
        <p>コンセプト設計からSNS・LINE設計まで、集客の仕組みを一気通貫で構築します。</p>
        <h3>サービス内容</h3>
        <ul>
          <li>ブランドコンセプト設計</li>
          <li>SNS戦略・運用設計</li>
          <li>LINE公式アカウント設計・配信設計</li>
          <li>販売動線の構築</li>
        </ul>
        <h3>料金</h3>
        <p>月額 ¥100,000 × 3ヶ月コース（計 ¥300,000）</p>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで相談する
        </a>
      </section>

      {/* 映像制作 */}
      <section>
        <h2>映像制作</h2>
        <p>ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。</p>
        <h3>制作実績</h3>
        <ul>
          <li>ビデオポッドキャスト</li>
          <li>商品・サービス紹介映像</li>
          <li>インタビュー・事例映像</li>
          <li>SNS向けショート映像</li>
        </ul>
        <h3>料金</h3>
        <p>¥150,000〜（予算・内容に応じてご相談）</p>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで相談する
        </a>
      </section>

      {/* CTA */}
      <section>
        <h2>まず、話してみませんか。</h2>
        <p>どのサービスが合うかわからない場合もお気軽にご相談ください。</p>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで無料相談する
        </a>
      </section>

    </main>
  )
}
