import React from 'react'
import {} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              About
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Blog
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Team
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Pricing
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Contact
            </a>
          </div>
          <div className='px-5 py-2'>
            <a
              href='#'
              className='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Terms
            </a>
          </div>
        </nav>
        <div className='flex justify-center mt-8 space-x-6'>
          <a href='#' className='text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Facebook</span>
            {/* <BsFileArrowDown /> */}
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Instagram</span>
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Twitter</span>
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>GitHub</span>
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Dribbble</span>
          </a>
        </div>
        <p className='mt-8 text-base leading-6 text-center text-gray-400'>
          © 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
