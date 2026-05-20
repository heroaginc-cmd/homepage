export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <main><h1>記事: {params.slug}</h1></main>
}
