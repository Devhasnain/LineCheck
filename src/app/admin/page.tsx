'use client'
import { CounterContext } from '@/ThemeContext';
import React, { useState } from 'react'
import Image from 'next/image'
import BarChart from '@/components/BarChart';
import { baseRoute } from '@/utils/route';
import AdminCompmonent from '../../components/AdminComponent';
import AdminCom from '@/components/AdminCom';

const page = () => {
    
    return (
        <div className='flex w-full  bg-black'>
          <AdminCom/>
        </div>
    )
}

export default page