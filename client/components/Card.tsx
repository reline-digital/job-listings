import Image from 'next/image'
import React from 'react'

import companyLogo from '../assets/images/photosnap.png'

const data = {
  id: 1,
  img: companyLogo,
  company: 'Photosnap',
  title: 'Senior frontend developer',
  info: ['1d ago', 'full time', 'USA only'],
  tags: ['frontend', 'senior', 'html', 'css', 'javascript'],
}

export default function Card() {
  console.log(data.company)
  return (
    <div className='flex bg-white flex-col md:flex-row p-6 justify-between items-center'>
      {/* card header */}

      <div className='flex'>
        {/* compnay logo */}
        <div className='rounded-full max-w-[80px]'>
          <Image src={companyLogo} alt='photosnap' />
        </div>
        {/* job description */}
        <div>
          {/* job description header */}
          <div>
            <a href='/' className='text-primary'>
              {data.company}
              {/* Photosnap */}
            </a>
            <span className='bg-primary'>NEW!</span>
            <span className='bg-secondary text-lightGrayishCyan'>FEATURED</span>
          </div>
          {/* job title */}
          <h2 className='text-secondary'>{data.title}</h2>
          {/* job time info */}
          <div className='flex'>
            {data.info.map((tag, i) => (
              <span key={i} className='text-darkGrayishCyan'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* card tags */}
      <div className='flex gap-4'>
        {data.tags.map((tag, i) => (
          <span key={i} className='text-primary bg-lightCyan'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
