'use client'

import { Button } from '@/components/Button'
import { Job } from '@/types'
import { useState } from 'react'
import { languages, tools } from '../../constants'

export default function PostJob() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('image', file)
      fetch(
        'https://api.imgbb.com/1/upload?key=6f8623c19cbd73ef6785b7ba44f0bda4',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((res) => res.json())
        .then(({ data }) => {
          setLogoUrl(data.url)
          console.log(data)
        })
        .catch((error) => console.error(error))
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: Partial<Job> = Object.fromEntries(formData)
    data.languages = formData.getAll('languages') as string[]
    data.tools = formData.getAll('tools') as string[]
    data.logo = logoUrl as string

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

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
            <div className="w-full">
              <label htmlFor="position">Contract</label>
              <select
                id="contract"
                name="contract"
                className="w-full rounded border border-gray-200 p-3"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Temporary</option>
              </select>
            </div>
            <div className=" w-full">
              <label htmlFor="location">Location</label>
              <select
                id="location"
                name="location"
                className="w-full rounded border border-gray-200 p-3"
              >
                <option value="US only">US only</option>
                <option value="Worldwide">Worldwide</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label htmlFor="level">Level</label>
              <select
                id="level"
                name="level"
                className="w-full rounded border border-gray-200 p-3"
              >
                <option value="Junior">Junior</option>
                <option value="Midweight">Midweight</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                className="w-full rounded border border-gray-200 p-3"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Devops">Devops</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="mobile developer">Mobile Developer</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="mb-2 block text-sm font-bold text-gray-700">
                Languages
              </h3>
              <div className="flex flex-col">
                {languages.map((language) => (
                  <label
                    key={language}
                    className="mt-3 inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      name="languages"
                      value={language}
                      className="form-checkbox h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-2 block text-sm font-bold text-gray-700">
                Tools
              </h3>
              {tools.map((tool) => (
                <label key={tool} className="mt-3 inline-flex items-center">
                  <input
                    type="checkbox"
                    name="tools"
                    value={tool}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">{tool}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="outline">
            <label htmlFor="logo">
              Logo
              <input
                id="logo"
                name="logo"
                type="file"
                className="w-full rounded border border-gray-200 p-3"
                onChange={handleFile}
              />
            </label>
            {/* <Image
              src={job.logo}
              alt={job.company}
              className="-mt-11 h-14 w-14 rounded-full md:static md:mt-0 md:h-auto md:w-auto"
              width={40}
              height={40}
            /> */}
          </div>
          <Button type="submit">Post Job</Button>
        </form>
      </div>
    </div>
  )
}
