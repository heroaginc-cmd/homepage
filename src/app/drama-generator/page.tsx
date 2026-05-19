import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import DramaGenerator from "@/components/ui/DramaGenerator"

export const metadata: Metadata = {
  title: pageMeta.dramaGenerator.title,
  description: pageMeta.dramaGenerator.description,
}

export default function DramaGeneratorPage() {
  return (
    <main>
      <DramaGenerator />
    </main>
  )
}
