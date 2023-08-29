'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import { CounterContext } from '@/ThemeContext';
import BarChart from '@/components/BarChart';
import AdminComponent from './AdminComponent';

const page = () => {
  

    return (
        <div className='flex w-full gap-6'>
            <AdminComponent/>
        </div>
    )
}

export default page