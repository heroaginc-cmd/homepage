import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: pageMeta.works.title,
  description: pageMeta.works.description,
}

export default function WorksPage() {
  return (
    <main>
      <h1>実績・事例</h1>
      <p>事例を準備中です。まずはお気軽にご相談ください。</p>
      <a href="https://lin.ee/vBEfQwi" target="_blank" rel="noopener noreferrer">
        LINEで相談する
      </a>
    </main>
  )
}
