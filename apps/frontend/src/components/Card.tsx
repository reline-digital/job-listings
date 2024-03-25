import { Job } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Pill } from '.'

export function Card({ job }: { job: Job }) {
  return (
    <div
      className={`${job.featured && 'border-primary border-l-4'} flex flex-col justify-between gap-4 rounded bg-white p-4 font-semibold shadow-lg md:flex-row md:items-center  md:gap-8 md:px-6 md:py-8`}
    >
      <div className="md:flex md:items-center md:gap-4">
        <Image
          src={job.logo}
          alt={job.company}
          className="-mt-11 h-14 w-14 rounded-full md:static md:mt-0 md:h-auto md:w-auto"
          width={40}
          height={40}
        />
        <div className="mt-4 flex w-full flex-col gap-1 md:mt-0">
          <div className="flex gap-4">
            <span className="text-primary">{job.company}</span>
            <div className="flex gap-2 uppercase text-white">
              {job.new ? (
                <span className="bg-primary rounded-full px-2 py-1 text-xs">
                  new!
                </span>
              ) : null}
              {job.featured ? (
                <span className="bg-secondary rounded-full px-2 py-1 text-xs">
                  featured
                </span>
              ) : null}
            </div>
          </div>
          <h2 className="text-secondary capitalize">{job.position}</h2>
          <div className="text-secondary-light flex flex-wrap items-center gap-2 text-xs capitalize">
            <span className="p-1">{job.postedAt}</span>
            <span>&#x2022;</span>
            <span className="p-1">{job.contract}</span>
            <span>&#x2022;</span>
            <span className="p-1">{job.location}</span>
          </div>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className="flex flex-wrap items-center gap-4 ">
        <Pill>{job.role}</Pill>
        <Pill>{job.level}</Pill>
        {job.languages.map((language) => (
          <Pill key={language}>{language}</Pill>
        ))}
        {job.tools.map((tool) => (
          <Pill key={tool}>{tool}</Pill>
        ))}
      </div>
    </div>
  )
}
