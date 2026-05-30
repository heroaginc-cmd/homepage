import Link from "next/link"
import styles from "./Footer.module.css"

const eyebrowStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  color: "#FFD200",
  marginBottom: "16px",
  textTransform: "uppercase",
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0F1E", color: "#ffffff", borderTop: "1px solid #2A3354" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}>
        <div className={styles.grid}>
          <div>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: "16px",
                background: "linear-gradient(135deg, #FFD200 0%, #FF3A7A 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              HERO
            </p>
            <p style={{ fontSize: "0.875rem", color: "#B5BBCC", lineHeight: 1.7 }}>AI×メディアで、<br />事業を次のステージへ。</p>
          </div>
          <div>
            <p style={eyebrowStyle}>Services</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/services" className={styles.footerLink}>ショートドラマ制作</Link></li>
              <li><Link href="/services" className={styles.footerLink}>マーケティングコンサル</Link></li>
              <li><Link href="/services" className={styles.footerLink}>映像制作</Link></li>
              <li><Link href="/drama-generator" className={styles.footerLink}>AI台本生成</Link></li>
            </ul>
          </div>
          <div>
            <p style={eyebrowStyle}>Company</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/about" className={styles.footerLink}>会社概要</Link></li>
              <li><Link href="/works" className={styles.footerLink}>実績・事例</Link></li>
              <li><Link href="/blog" className={styles.footerLink}>ブログ</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <p style={eyebrowStyle}>Legal</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/privacy" className={styles.footerLink}>プライバシーポリシー</Link></li>
              <li><Link href="/tokusho" className={styles.footerLink}>特定商取引法</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p style={{ fontSize: "0.75rem", color: "#8089A0" }}>© {new Date().getFullYear()} HERO株式会社. All rights reserved.</p>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className={styles.lineLink}>
            LINEで相談する →
          </a>
        </div>
      </div>
    </footer>
  )
}
