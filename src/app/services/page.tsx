import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
}

export default function ServicesPage() {
  return <main><h1>サービス一覧</h1></main>
}
