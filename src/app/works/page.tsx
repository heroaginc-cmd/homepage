import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.works.title,
  description: pageMeta.works.description,
}

export default function WorksPage() {
  return <main><h1>実績・事例</h1></main>
}
