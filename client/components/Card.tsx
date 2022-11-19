import Image from 'next/image'
import React from 'react'

import companyLogo from '../assets/images/photosnap.png'

export default function Card() {
  return (
    <div className='flex outline-dashed flex-col md:flex-row justify-between items-center'>
      {/* card header */}
      <div className='flex'>
        {/* compnay logo */}
        <div>
          <Image src={companyLogo} alt='photosnap' />
        </div>
        {/* job description */}
        <div>
          {/* job description header */}
          <div>
            <a href='/' className='text-primary'>
              Photosnap
            </a>
            <span className='bg-primary'>NEW!</span>
            <span className='bg-secondary text-lightGrayishCyan'>FEATURED</span>
          </div>
          {/* job title */}
          <h2 className='text-secondary'>Senior Frontend Developer</h2>
          {/* job time info */}
          <div className='flex'>
            <span className='text-darkGrayishCyan'>1d ago</span>
            <span className='text-darkGrayishCyan'>Full Time</span>
            <span className='text-darkGrayishCyan'>USA only</span>
          </div>
        </div>
      </div>
      {/* card tags */}
      <div className='flex'>
        <span className='text-primary'>Frontend</span>
        <span className='text-primary'>Senior</span>
        <span className='text-primary'>HTML</span>
        <span className='text-primary'>CSS</span>
        <span className='text-primary'>JavaScript</span>
      </div>
    </div>
  )
}
