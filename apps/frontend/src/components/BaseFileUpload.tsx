import React, { useEffect, useState } from 'react'
import { AddIcon } from '@/components/icons/AddIcon'
import { BaseFileUploadProps } from '@/types'

export function BaseFileUpload({ name, label, setUrl }: BaseFileUploadProps) {
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)
  const [success, setSuccess] = useState(false)

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    setLoading(true)
    setError(null)
    setSuccess(false)
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('image', file)

      fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((res) => res.json())
        .then(({ data }) => {
          setUrl(data.url)
          setSuccess(true)
          setFileName(file.name)
        })
        .catch((error) => {
          setError('Failed to upload image')
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
      setError(null)
    }, 5000)
  }, [loading])
  return (
    <div className="">
      <label htmlFor={name} className="flex flex-col ">
        <span>{label}</span>
        <span
          className={`flex w-full cursor-pointer items-center gap-2 rounded border border-gray-200  p-3 text-sm ${error && 'bg-red-100'} ${success && 'bg-green-100'}`}
        >
          {fileName ? (
            <span>Uploaded File: {fileName}</span>
          ) : (
            <>
              <AddIcon />
              <span className="mt-0.5">File types: PDF, JPG, JPEG and PNG</span>
            </>
          )}
        </span>
      </label>
      <label htmlFor={name} className="hidden">
        {label}
        <input
          id={name}
          name={name}
          type="file"
          onChange={handleFile}
          disabled={loading}
        />
      </label>
      {loading && <p className="py-2">Uploading...</p>}
      {error && <p className="py-2 text-red-500">{error}</p>}
      {success && (
        <p className="py-2 text-green-500">Image uploaded successfully!</p>
      )}
    </div>
  )
}
