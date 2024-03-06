'use client'
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from '../../../components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'
import Link from "next/link";

function Header() {
  const { user, isLoaded } = useUser();
  return (
    <div className='p-4 bg-white flex justify-between gap-3 size-full'>
      {/* Search bar */}
      <div className='flex gap-2 border rounded-md p-2'>
        <Search className='h-5 w-5'/>
        <input type='text' placeholder='Search' className='outline-none'/>
      </div>
      {/* Get Started Button & Bell Icon */}
      <div className='flex items-center gap-4 justify-end'>
        <BellDot className='text-gray-500 cursor-pointer'/>
        {user && isLoaded ? <UserButton afterSignOutUrl="/courses" /> : <Link href={'/sign-in'}><Button>Get Started</Button></Link>}
      </div>
    </div>
  )
}

export default Header