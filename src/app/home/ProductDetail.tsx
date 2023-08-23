import Image from 'next/image'
import React from 'react'

const ProductDetail = () => {
  return (
    <div className="w-[90%] mx-auto my-0">
        <div className="h-[50px] mt-8">
            <h1>Back</h1>
        </div>
    <div className='flex gap-2 '>
       <div className="relative h-[300px] w-[300px] rounded-lg ">
        <Image src={'/presentation.png'}  className='rounded-lg' fill alt=''/>
        </div>
        <div className="p-2 pb-8 " >
            <h1 className='text-md font-semibold text-[25px]'>Remedy Kitchen</h1>
            <span className='flex items-center gap-2 mt-4'>
        <Image src={'/start.png'}  className='rounded-lg' height={15} width={15} alt=''/>
            <p className='text-[12px] text-[#4D7C1B]'>4.9 Excellent</p>
            <p className=' text-[12px] text-[#585C5C]'>(500+)</p>
            </span>
            <span className='flex items-center gap-2'>
            <p className='text-[12px] text-[#585C5C]'>0.5 miles away</p>
            <p className='text-[12px] text-[#585C5C]'>£1.49 delivery</p>
            </span>
        </div>
    </div>
        <div className="flex items-center gap-1 w-full mt-16">
    {Array(4).fill(undefined).map((items)=>(
        <div className="relative h-[200px] w-[320px]  rounded-lg ">
        <Image src={'/img2.png'}  className='rounded-lg' fill alt=''/>
        </div>
    ))}
    </div>
    </div>
  )
}

export default ProductDetail