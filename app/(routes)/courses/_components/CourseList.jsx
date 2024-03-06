import GlobalApi from '../../../_utils/GlobalApi';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../../../../components/ui/select';
import React, { useEffect, useState } from 'react'
import CourseItem from './CourseItem';
import CourseItemSkeleton from './CourseItemSkeleton';
import Link from 'next/link';

function CourseList() {
  const [courseList, setCourseList] = useState([]);

  //Fetch Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then(res => setCourseList(res?.courseLists));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  //For server side render
  // const res = await GlobalApi.getAllCourseList();

  return (
    <div className='bg-white p-5 mt-3 rounded-lg'>
      {/* Title and Filter */}
      <div className='flex justify-between items-center'>
        <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
        <Select className='outline-none'>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>

      </div>
      {/* Course List */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {courseList.length ? courseList.map((item, index) => (
          <Link href={`/course-preview/${item?.slug}`}>
            <div key={index}>
              <CourseItem course={item} key={index}/>
            </div>
          </Link>
        )) : Array.from({ length: 6 }, (_, i) => i + 1).map(item => (
          <div key={item}>
            <CourseItemSkeleton />
          </div>))
        }
      </div>
    </div>
  )
}

export default CourseList