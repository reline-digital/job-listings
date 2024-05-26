'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  SearchableCheckboxList,
  BaseDropdown,
  BaseFileUpload,
} from '@/components'
import { Job } from '@/types'
import {
  languages,
  tools,
  contractOptions,
  levelOptions,
  locationOptions,
  roleOptions,
} from '@/constants'

export default function PostJob() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [success, setSuccess] = useState(false)
  const [logoUrl, setLogoUrl] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true)
    setError(null)
    setSuccess(false)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: Partial<Job> = Object.fromEntries(formData)
    data.languages = formData.getAll('languages') as string[]
    data.tools = formData.getAll('tools') as string[]
    data.logo = logoUrl as string
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess(true)
      })
      .catch((error) => {
        setError('Failed to Submit Job')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
      setError(null)
    }, 5000)
  }, [loading])
  return (
    <div className="my-8 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xl">
        <h1 className="mb-6 text-center text-4xl font-bold">Post a Job</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Cool Company"
              className="w-full rounded border border-gray-200 p-3"
            />
          </div>
          <div className="">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              name="position"
              type="text"
              placeholder="Senior Frontend Developer / Junior Backend Developer"
              className="w-full rounded border border-gray-200 p-3"
            />
          </div>
          <div className="flex justify-between gap-4">
            <BaseDropdown
              title="contract"
              name="contract"
              options={contractOptions}
            />
            <BaseDropdown
              title="location"
              name="location"
              options={locationOptions}
            />
          </div>
          <div className="flex justify-between gap-4">
            <BaseDropdown title="level" name="level" options={levelOptions} />
            <BaseDropdown title="role" name="role" options={roleOptions} />
          </div>
          <div className="flex justify-between gap-4">
            <SearchableCheckboxList
              title="Languages"
              list={languages}
              name="languages"
            />
            <SearchableCheckboxList title="Tools" list={tools} name="tools" />
          </div>
          <BaseFileUpload name="logo" label="Logo" setUrl={setLogoUrl} />
          <Button type="submit">Post Job</Button>
          <span className="mx-auto">
            {loading && <p className="py-2">Submiting job...</p>}
            {error && <p className="py-2 text-red-500">{error}</p>}
            {success && (
              <p className="py-2 text-green-500">
                Form submitted successfully!
              </p>
            )}
          </span>
        </form>
      </div>
    </div>
  )
}
