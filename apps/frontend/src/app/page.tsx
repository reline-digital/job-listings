import { CardList } from '@/containers'
import { SearchBar, Navbar } from '@/components'

export default function Index() {
  return (
    <>
      <header className="bg-primary bg-[url('/assets/images/bg-header.svg')] bg-cover py-20">
        <div className="fixed top-0 w-full border-b bg-white p-6 shadow-md">
          <Navbar />
        </div>
      </header>

      <div className="-mt-8">
        <SearchBar />
      </div>
      <main className="mx-auto mt-10 max-w-[90%] md:container">
        <CardList />
      </main>
    </>
  )
}
