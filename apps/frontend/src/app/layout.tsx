import { League_Spartan } from 'next/font/google'
import './styles.css'

const league_spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Job Board | All Jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html className={league_spartan.className} lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png" />
      </head>
      <body className="bg-accent">{children}</body>
    </html>
  )
}
