'use client'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../_components/CourseVideoDescription'
import GlobalApi from '../../../_utils/GlobalApi'
import CourseEnrollSection from '../_components/CourseEnrollSection';
import CourseContentSection from '../_components/CourseContentSection';

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetail] = useState(null);

  const getCourseById = () => {
    GlobalApi.getCourseBySlug(params.courseId).then(res => setCourseDetail(res?.courseList));
  }

  useEffect(() => {
    params.courseId && getCourseById();
  }, [params]);

  return courseDetail && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-4'>
      {/* Title Video, Description */}
      <div className='col-span-2 bg-white p-3'>
        <CourseVideoDescription courseInfo={courseDetail}/>
      </div>
      {/* Course Content */}
      <div className='flex flex-col gap-3'>
        <CourseEnrollSection />
        <CourseContentSection courseInfo={courseDetail} />
      </div>
    </div>
  )
}

export default CoursePreview