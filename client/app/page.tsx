import React from 'react'
import Button from '../components/Button'
import Home from '../container/Home'

export default function HomePage() {
  return (
    <div>
      <h1 className='text-secondary bg-tertiary text-8xl'>
        Nextjs 13 home page
      </h1>
      <Home />
      <Button />
    </div>
  )
}
