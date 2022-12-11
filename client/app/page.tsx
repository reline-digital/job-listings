import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import Home from './Home'
import RootLayout from './layout'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
