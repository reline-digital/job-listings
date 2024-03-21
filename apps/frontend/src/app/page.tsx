import { Card } from '@/components/Card'

export default function Store(): JSX.Element {
  return (
    <>
      <header className="mb-10 bg-primary bg-[url('/assets/images/bg-header.svg')] bg-cover py-14"></header>
      <main className="mx-auto max-w-[90%] md:container">
        <Card />
      </main>
    </>
  )
}
