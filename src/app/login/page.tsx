'use client'
import Header from '@/components/Header'
import Login from '@/app/login/Login'
import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {
  
    
  return (
    <div className='bg-[#000000de]'>
      <Header/>
        <Login/>
    </div>
  )
}

export default page