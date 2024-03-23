import { CardList } from '@/containers'
import { SearchBar } from '@/components'

export default function Index() {
  return (
    <>
      <header className="bg-primary bg-[url('/assets/images/bg-header.svg')] bg-cover py-14"></header>
      <div className="-mt-8">
        <SearchBar />
      </div>
      <main className="mx-auto mt-10 max-w-[90%] md:container">
        <CardList />
      </main>
    </>
  )
}
