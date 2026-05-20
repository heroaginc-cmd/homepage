import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
}

export default function ContactPage() {
  return (
    <main>
      <h1>お問い合わせ</h1>
      <p>サービスのご相談・お見積もりは、LINEからお気軽にどうぞ。初回相談は無料です。</p>
      <section>
        <h2>LINEで相談する</h2>
        <p>下記のボタンからHERO株式会社の公式LINEを友だち追加してください。</p>
        <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
          LINEで無料相談する
        </a>
      </section>
      <section>
        <h2>よくある質問</h2>
        <dl>
          <dt>どんな規模の方でも対応できますか？</dt>
          <dd>はい。開業前の個人事業主からスタートアップ・中堅企業まで幅広く対応しています。</dd>
          <dt>相談から契約までの流れは？</dt>
          <dd>LINEでのヒアリング → オンラインMTG → ご提案・お見積もり → 契約の流れが一般的です。</dd>
          <dt>どのエリアに対応していますか？</dt>
          <dd>オンラインで全国対応しています。</dd>
          <dt>まず何を相談すればいいですか？</dt>
          <dd>「こんな課題がある」「こんなことがしたい」という段階でも大丈夫です。一緒に整理します。</dd>
        </dl>
      </section>
    </main>
  )
}
