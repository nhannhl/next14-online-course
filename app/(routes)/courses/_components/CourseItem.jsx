import Image from 'next/image'
import React from 'react'
import { Video, FileVideo2 } from 'lucide-react'

function CourseItem({ course, key }) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer hover:shadow-primary' key={key}>
      <Image src={course?.banner?.url} width={500} height={150} alt='banner' className='rounded-t-xl'/>
      <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course.name}</h2>
        <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
        {course?.chapter?.length ? <div className='flex flex-cols gap-4 items-center'>
          <FileVideo2 color='blue' />
          <h2 className='text-[14px] text-gray-400'>{course?.totalChapters} Chapters</h2>
        </div> : <div className='flex flex-cols gap-4 items-center'>
          <Video color='red' />
          <h2 className='text-[14px] text-gray-400'>Watch On Youtube</h2>
        </div>}
        
        <h2 className='text-[15px]'>{course?.free ? 'Free' : 'Paid'}</h2>
      </div>
    </div>
  )
}

export default CourseItem