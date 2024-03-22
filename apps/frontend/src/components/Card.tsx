import Image from 'next/image'
import React from 'react'

export function Card() {
  return (
    <div className="border-primary relative flex flex-col justify-between gap-4 rounded border-l-4 bg-white p-4 font-semibold shadow-lg  md:flex-row md:px-6 md:py-8">
      <div className="md:flex md:items-center md:gap-4">
        <Image
          src="/assets/images/company-logo.svg"
          alt="logo"
          className="-mt-11 h-14 w-14 rounded-full md:static md:mt-0 md:h-auto md:w-auto"
          width={40}
          height={40}
        />
        <div className="mt-4 flex w-full flex-col gap-1 md:mt-0">
          <div className="flex gap-4">
            <span className="text-primary">Photosnap</span>
            <div className="flex gap-2 uppercase text-white">
              <span className="bg-primary rounded-full px-2 py-1 text-xs">
                new!
              </span>
              <span className="bg-secondary rounded-full px-2 py-1 text-xs">
                featured
              </span>
            </div>
          </div>
          <h2 className="text-secondary capitalize">
            senior frontend developer
          </h2>
          <div className="text-secondary-light flex flex-wrap items-center gap-2 text-xs capitalize">
            <span className="p-1">1d ago</span>
            <span>&#x2022;</span>
            <span className="p-1">full time</span>
            <span>&#x2022;</span>
            <span className="p-1">USA only</span>
          </div>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className="text-primary flex flex-wrap items-center gap-4 capitalize">
        <span className="bg-tertiary rounded px-2 py-0.5">frontend</span>
        <span className="bg-tertiary rounded px-2 py-0.5">senior</span>
        <span className="bg-tertiary rounded px-2 py-0.5">HTML</span>
        <span className="bg-tertiary rounded px-2 py-0.5">senior</span>
        <span className="bg-tertiary rounded px-2 py-0.5">HTML</span>
      </div>
    </div>
  )
}
