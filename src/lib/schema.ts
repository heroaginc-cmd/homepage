import type { WebSite, WithContext } from "schema-dts"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HERO株式会社",
  url: "https://hero-corp.jp",
  logo: "https://hero-corp.jp/logo.png",
  description:
    "AIショートドラマ制作・マーケティングコンサル・映像制作・AI支援を提供。B2B・B2C問わず、映像とAIでブランド課題を解決します。",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressLocality: "東京都",
  },
  knowsAbout: [
    "ショートドラマ制作",
    "AIコンテンツ制作",
    "マーケティングコンサルティング",
    "映像制作",
    "SNSマーケティング",
  ],
  sameAs: [],
}

export const webSiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HERO株式会社",
  url: "https://hero-corp.jp",
}
