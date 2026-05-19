import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
}

export default function AboutPage() {
  return <main><h1>会社概要</h1></main>
}
