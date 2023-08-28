'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductDetail from './ProductDetail'
import BarChart from '@/components/BarChart'
import HomeComponent from './HomeComponent'

const page = () => {
  
  return (
   
   <div className="">
     <Header/>
    <HomeComponent/>
   
    {/* <BarChart/> */}
   </div>
  )
}

export default page