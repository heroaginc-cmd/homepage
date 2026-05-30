"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "./Header.module.css"

const NAV_LINKS = [
  { label: "サービス", href: "/services" },
  { label: "ブログ", href: "/blog" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "#1A1A1A" }}>
      <nav style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.25rem", letterSpacing: "0.1em", color: "#ffffff", textDecoration: "none" }}>
          HERO
        </Link>

        <ul className={styles.desktopNav}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={styles.navLink}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.desktopCta}>
          <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer" className={styles.lineButton}>
            LINEで相談する
          </a>
        </div>

        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)} aria-label="メニュー">
          <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineTopOpen : ""}`} />
          <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineMiddleOpen : ""}`} />
          <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineBottomOpen : ""}`} />
        </button>
      </nav>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "0.875rem", color: "#ffffff", textDecoration: "none" }} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://lin.ee/vBEfQwi"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", backgroundColor: "#F18E24", color: "#ffffff", fontSize: "0.875rem", padding: "8px 20px", textAlign: "center", textDecoration: "none" }}
                onClick={() => setIsOpen(false)}
              >
                LINEで相談する
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
