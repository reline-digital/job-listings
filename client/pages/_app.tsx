import '../assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { League_Spartan } from '@next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-leagueSpartan',
  weight: ['500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${leagueSpartan.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
