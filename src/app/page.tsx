import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
}

export default function HomePage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#F9F9F9", padding: "96px 24px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "24px" }}>
            HERO Inc. / AI x Media
          </p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.25, marginBottom: "32px" }}>
            AI x メディアで、<br />
            <span style={{ color: "#F18E24", fontWeight: 600 }}>事業を次のステージへ。</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#6B6B6B", maxWidth: "42rem", lineHeight: 1.7, marginBottom: "48px" }}>
            ビデオポッドキャスト、ショートドラマ、AIを活用したSNS運用支援など最先端のマーケティング支援から泥臭い販売動線設計まで一括で支援。
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://lin.ee/vBEfQwi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#F18E24", color: "#ffffff", padding: "16px 32px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none", display: "inline-block", textAlign: "center" }}
            >
              まず相談してみる（LINE）
            </a>
            <Link
              href="/drama-generator"
              style={{ border: "1px solid #1A1A1A", color: "#1A1A1A", padding: "16px 32px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none", display: "inline-block", textAlign: "center" }}
            >
              AI台本生成を無料体験
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "16px" }}>Services</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#1A1A1A", marginBottom: "64px" }}>提供サービス</h2>
          <div className={styles.servicesGrid}>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#F18E24", letterSpacing: "0.1em", marginBottom: "16px" }}>01</p>
              <h3 className={styles.serviceTitle}>ショートドラマ制作</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>AIを活用したブランデッドショートドラマの企画・脚本・制作。SNSで届くコンテンツを量産します。</p>
            </Link>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#F18E24", letterSpacing: "0.1em", marginBottom: "16px" }}>02</p>
              <h3 className={styles.serviceTitle}>マーケティングコンサル</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>コンセプト設計からSNS・LINE設計まで、集客の仕組みを一気通貫で構築します。</p>
            </Link>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#F18E24", letterSpacing: "0.1em", marginBottom: "16px" }}>03</p>
              <h3 className={styles.serviceTitle}>映像制作</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。</p>
            </Link>
            <Link href="/drama-generator" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#F18E24", letterSpacing: "0.1em", marginBottom: "16px" }}>04</p>
              <h3 className={styles.serviceTitle}>AI支援</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7 }}>AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "96px 24px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#F18E24", textTransform: "uppercase", marginBottom: "24px" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>まず、話してみませんか。</h2>
          <p style={{ fontSize: "0.875rem", color: "#A3A3A3", maxWidth: "32rem", margin: "0 auto 48px", lineHeight: 1.7 }}>
            課題やアイデアをお気軽にLINEでご相談ください。初回相談は無料です。
          </p>
          <a
            href="https://lin.ee/vBEfQwi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "#F18E24", color: "#ffffff", padding: "16px 40px", fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none" }}
          >
            LINEで相談する
          </a>
        </div>
      </section>

    </main>
  )
}
