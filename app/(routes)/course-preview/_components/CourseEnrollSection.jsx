import { Button } from '../../../../components/ui/button'
import React from 'react'

function CourseEnrollSection() {
  const membership = false;
  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>
      <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
      {/* Is Membership and Login */}
      {membership ? <div className='gap-3 flex flex-col mt-3'>
        <h2 className='font-light text-white'>Enroll Now to Start Learning and Building the project</h2>
        <Button className="bg-white text-primary hover:bg-primary 
          hover:text-white hover:border hover:border-solid">Enroll Now</Button>
      </div>
      : <div className='gap-3 flex flex-col mt-3'>
        <h2 className='font-light text-white'>Buy Monthly Membershop and Get Access to All Courses</h2>
        <Button className="bg-white text-primary hover:bg-primary 
          hover:text-white hover:border hover:border-solid">Buy Membership Just $2.99</Button>
      </div>}
      {/* Above Not Membership Or not Login */}
    </div>
  )
}

export default CourseEnrollSection