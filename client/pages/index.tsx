import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MERN - Job Board</title>
        <meta name='description' content='Job Board created with MERN stack' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main>
        <h2 className='text-green-400'>Hello, Next</h2>
      </main>
    </>
  )
}
