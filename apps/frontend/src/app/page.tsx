import { CardList } from '@/containers'

export default function Index() {
  return (
    <>
      <header className="bg-primary mb-10 bg-[url('/assets/images/bg-header.svg')] bg-cover py-14"></header>
      <main className="mx-auto max-w-[90%] md:container">
        <CardList />
      </main>
    </>
  )
}
