import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({ courseInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='p-3 bg-white rounded-sm'>
      <h2>Contents</h2>
      {courseInfo.chapter.map((item, index) => (
        <div>
          <h2 className={`flex flex-row justify-between items-center p-2 text-[14px] 
            border rounded-sm px-4 cursor-pointer m-2 
            hover:bg-gray-200 hover:text-gray-500 ${activeIndex == index && 'bg-primary text-white'}`}>
            {index+1}. {item.name}
            {activeIndex == index ? <Play className='w-4 h-4' /> : <Lock className='w-4 h-4' />}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default CourseContentSection