import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import ProductDetail from './ProductDetail'

const page = () => {
    const Card = ()=>{
        return(
            <div className='shadow-[0px_1px_4px_0px_#00000014] relative w-[250px] rounded-lg'>
              <div className="flex flex-col items-start absolute top-2 z-10 left-2">
              <span className="p-1 bg-white text-red-600">
                Spend £30
                </span>
                <span className="p-1 bg-red-600 text-white">
                20% off entire menu
                </span>
              </div>
        <div className="relative h-[200px] rounded-lg ">
        <Image src={'/presentation.png'}  className='rounded-lg' fill alt=''/>
        </div>
        <div className="p-2 pb-8 relative" >
            <div className="rounded-3xl absolute bg-white  right-4 flex justify-center items-center flex-col -top-8 h-[60px] w-[80px]">
                <h1 className='text-[16px] font-medium'>5-15</h1>
                <p className='text-[12px] text-[#585C5C]'>min</p>
            </div>
            <h1 className='text-md font-semibold'>Remedy Kitchen</h1>
            <span className='flex items-center gap-2'>
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
        )
    }
  return (
   
   <div className="">
    <ProductDetail/>
    {/* <Header/> */}
    {/* <div className="flex justify-center items-center mb-8">
        <div className="flex gap-2 relative rounded-md p-2 w-[500px] h-[45px] bg-[#E8EBEB]">
    <Image src={'/search.png'}  className='rounded-lg ' width={20} height={20} alt=''/>
            <input type="text" className='bg-[#E8EBEB] w-full h-full px-2' placeholder='Search Popeyes Louisiana Kitchen' />
        </div>
    </div>
    <div className="w-[90%] mx-auto my-0">
    <div className="flex items-center gap-1 w-full">
    {Array(4).fill(undefined).map((items)=>(
        <div className="relative h-[200px] w-[320px]  rounded-lg ">
        <Image src={'/img2.png'}  className='rounded-lg' fill alt=''/>
        </div>
    ))}
    </div>
     <div className="mt-8">
        <div className="flex items-center gap-4">
        <h1 className='text-[25px] font-bold'>Offers near you</h1>
        <p className='text-[#4D7C1B] text-[14px]'>View all (298)</p>
        </div>
        <div className="mt-2 flex gap-4 items-center">
            {Array(5).fill(undefined).map((items)=>(
                <Card/>
            ))}
        </div>
    </div>
    <div className="mt-8">
        <div className="flex items-center gap-4">
        <h1 className='text-[25px] font-bold'>Top picks in your neighbourhood</h1>
        <p className='text-[#4D7C1B] text-[14px]'>View all (298)</p>
        </div>
        <div className="mt-2 flex gap-4 items-center">
            {Array(5).fill(undefined).map((items)=>(
                <Card/>
            ))}
        </div>
    </div>
   </div> */}
   </div>
  )
}

export default page