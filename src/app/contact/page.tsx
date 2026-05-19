import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
}

export default function ContactPage() {
  return <main><h1>お問い合わせ</h1></main>
}
