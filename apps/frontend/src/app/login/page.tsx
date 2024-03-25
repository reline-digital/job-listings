'use client'

import { Button } from '@/components/Button'
import { useState } from 'react'

export default function Login() {
  const [error, setError] = useState('')
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')
    if (!email || !password) {
      return setError('Both fields are required')
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/user/login`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      )
      if (!response.ok) {
        const data = await response.json()
        // throw new Error(data.message)
        console.log(data)
        setError(data.error)
      }
      const data = await response.json()
      setError('')
      console.log(data)
    } catch (error) {
      setError('some thing went wrong')
    }
  }

  async function getUser() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/user/profile`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function logOutUser() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/user/logout`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      {/* <button onClick={getUser}>get user</button> */}
      {/* <button onClick={logOutUser}>logout user</button> */}
      <div className="w-96">
        <h1 className="mb-6 text-center text-4xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" id="email" className="sr-only">
              email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded border border-gray-200 p-3"
            />
          </div>
          <div>
            <label htmlFor="password" id="password" className="sr-only">
              password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-200 p-3"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}
