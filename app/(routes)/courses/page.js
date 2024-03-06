'use client'
import React from 'react';
import WelcomeBanner from './_components/WelcomeBanner';
import CourseList from './_components/CourseList';
import SideBanner from './_components/SideBanner';

function CoursesPage() {
  return (
    <div className='grid md:grid-cols-3 p-5 gap-4'>
      {/* Left Container */}
      <div className='col-span-2'>
        <WelcomeBanner />
        {/* Course List */}
        <CourseList />
        </div>
      {/* Right Container */}
      <div>
        <SideBanner />
      </div>
    </div>
  )
}

export default CoursesPage;