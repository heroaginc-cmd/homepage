import type { Organization, WebSite, WithContext } from "schema-dts"

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HERO株式会社",
  url: "https://hero-corp.jp",
  logo: "https://hero-corp.jp/logo.png",
  description:
    "AIショートドラマ制作・マーケティングコンサル・映像制作・AI支援を提供。B2B・B2C問わず、映像とAIでブランド課題を解決します。",
  foundingLocation: {
    "@type": "Place",
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://hero-corp.jp/blog?q={search_term_string}",
    },
  },
}