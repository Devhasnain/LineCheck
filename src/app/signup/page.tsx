import Header from '@/components/Header'
import React from 'react'
import Signup from '@/app/signup/Signup'


const page = () => {
  return (
    <div className='bg-black'>
      <Header/>
        <Signup/>
    </div>
  )
}

export default page