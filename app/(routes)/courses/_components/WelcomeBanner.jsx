import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-lg p-5'>
      <Image src='/monkey-reading-book_433905-2071.avif' alt='monkey' width={100} height={100} className='rounded-full'/>
      <div>
        <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary'>Monkey</span> Academy</h2>
        <h2 className='text-gray-500'>Explore, Learn and Build Your Project</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner