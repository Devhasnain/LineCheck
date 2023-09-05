'use client'
import Login from '@/app/login/Login'
import React from 'react'
import { redirect } from 'next/navigation'
import Header1 from '@/components/Header1'

const page = () => {
  
    
  return (
    <div className='bg-[#000000de]'>
      <Header1/>
        <Login/>
    </div>
  )
}

export default page