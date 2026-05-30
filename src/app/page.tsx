import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
}

const GRADIENT = "linear-gradient(135deg, #FFD200 0%, #FF3A7A 100%)"

const gradientText: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
}

const primaryPill: React.CSSProperties = {
  display: "inline-block",
  background: GRADIENT,
  color: "#0A0F1E",
  padding: "16px 32px",
  fontSize: "0.9375rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  textDecoration: "none",
  borderRadius: "9999px",
  textAlign: "center",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
}

const outlinePill: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #2A3354",
  color: "#FFFFFF",
  padding: "16px 32px",
  fontSize: "0.9375rem",
  fontWeight: 500,
  letterSpacing: "0.02em",
  textDecoration: "none",
  borderRadius: "9999px",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  transition: "background-color 0.15s ease",
}

export default function HomePage() {
  return (
    <main style={{ paddingTop: "64px", backgroundColor: "#0A0F1E" }}>
      <section className={styles.heroSection}>
        <video
          className={styles.heroVideo}
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "24px" }}>
            HERO Inc. / AI x Media
          </p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.25, marginBottom: "32px", letterSpacing: "-0.01em" }}>
            AI x メディアで、<br />
            <span style={gradientText}>事業を次のステージへ。</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#B5BBCC", maxWidth: "42rem", lineHeight: 1.7, marginBottom: "48px" }}>
            ビデオポッドキャスト、ショートドラマ、AIを活用したSNS運用支援など最先端のマーケティング支援から泥臭い販売動線設計まで一括で支援。
          </p>
          <a href="#services" style={primaryPill}>
            サービスを見る
          </a>
        </div>
      </section>

      <section id="services" style={{ backgroundColor: "#0A0F1E", padding: "96px 24px" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "16px" }}>Services</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#FFFFFF", marginBottom: "64px", letterSpacing: "-0.01em" }}>提供サービス</h2>
          <div className={styles.servicesGrid}>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#FFD200", letterSpacing: "0.1em", marginBottom: "16px" }}>01</p>
              <h3 className={styles.serviceTitle}>ショートドラマ制作</h3>
              <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>AIを活用したブランデッドショートドラマの企画・脚本・制作。SNSで届くコンテンツを量産します。</p>
            </Link>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#FFD200", letterSpacing: "0.1em", marginBottom: "16px" }}>02</p>
              <h3 className={styles.serviceTitle}>マーケティングコンサル</h3>
              <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>コンセプト設計からSNS・LINE設計まで、集客の仕組みを一気通貫で構築します。</p>
            </Link>
            <Link href="/services" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#FFD200", letterSpacing: "0.1em", marginBottom: "16px" }}>03</p>
              <h3 className={styles.serviceTitle}>映像制作</h3>
              <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>ビデオポッドキャスト・商品紹介・インタビュー映像など、目的と予算に合わせた映像を制作します。</p>
            </Link>
            <Link href="/drama-generator" className={styles.serviceCard}>
              <p style={{ fontSize: "0.75rem", color: "#FFD200", letterSpacing: "0.1em", marginBottom: "16px" }}>04</p>
              <h3 className={styles.serviceTitle}>AI支援</h3>
              <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>AI台本生成・コンテンツ自動化・業務効率化など、AIを使った仕組みづくりを支援します。</p>
            </Link>
          </div>
          <div className={styles.ctaButtons} style={{ marginTop: "64px" }}>
            <Link href="/drama-generator" style={primaryPill}>
              AI台本生成を無料体験
            </Link>
            <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" style={outlinePill}>
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#131A2E", padding: "96px 24px", borderTop: "1px solid #2A3354" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "#FFD200", textTransform: "uppercase", marginBottom: "24px" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.25rem)", fontWeight: 300, color: "#FFFFFF", marginBottom: "24px", letterSpacing: "-0.01em" }}>まず、話してみませんか。</h2>
          <p style={{ fontSize: "0.9375rem", color: "#B5BBCC", marginBottom: "48px", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            課題やアイデアをお気軽にLINEでご相談ください。初回相談は無料です。
          </p>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" style={primaryPill}>
            LINEで相談する
          </a>
        </div>
      </section>
    </main>
  )
}
