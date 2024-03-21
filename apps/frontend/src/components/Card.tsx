import Image from 'next/image'
import React from 'react'

export function Card() {
  return (
    <div className="flex justify-between rounded bg-tertiary p-4 shadow-lg outline">
      <div className="flex">
        <Image
          src="/assets/images/company-logo.svg"
          alt="logo"
          className="h-auto w-auto"
          width={40}
          height={40}
        />
        <div>header content</div>
      </div>
      <div>
        <span>tags</span>
      </div>
    </div>
  )
}
