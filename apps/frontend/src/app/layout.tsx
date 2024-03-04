import { League_Spartan } from 'next/font/google'

import './styles.css'

const league_spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html className={league_spartan.className} lang='en'>
      <body>{children}</body>
    </html>
  )
}
