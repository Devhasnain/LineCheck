import Header from '@/components/Header'
import React from 'react'
import Signup from '@/app/signup/Signup'


const page = () => {
  return (
    <div className='bg-[#000000de]'>
      <Header/>
        <Signup/>
    </div>
  )
}

export default page