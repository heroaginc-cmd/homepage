export default function WorkDetailPage({ params }: { params: { id: string } }) {
  return <main><h1>事例詳細: {params.id}</h1></main>
}
