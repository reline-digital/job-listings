import '../assets/styles/globals.css'

import { League_Spartan } from '@next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-leagueSpartan',
  weight: ['500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${leagueSpartan.variable} font-sans`}>
      <head />
      <body className='border border-red-500'>{children}</body>
    </html>
  )
}
