import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.blog.title,
  description: pageMeta.blog.description,
}

export default function BlogPage() {
  return <main><h1>ブログ</h1></main>
}
