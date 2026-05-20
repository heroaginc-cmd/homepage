export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return <main><h1>サービス詳細: {params.id}</h1></main>
}
