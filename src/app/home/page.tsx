'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductDetail from './ProductDetail'
import BarChart from '@/components/BarChart'

const page = () => {
    const [GetId,setId]=useState('')
    const Card = ({id,image,waitTime,title,rating,offers,distance}:any)=>{
        return(
            <div key={id} className='shadow-[0px_1px_4px_0px_#00000014] relative w-[250px] rounded-lg' onClick={()=>setId(id)}>
                <div className={`flex flex-col items-start  absolute top-${2} z-10 left-2`}>
              {offers.map((offerItem:any,index:number)=>(
              <span className={`p-1 ${index==0?'bg-white text-red-600':'bg-red-600 text-white'}`}>
                {offerItem.type}
                </span>
                ))}
                </div> 
        <div className="relative h-[200px] rounded-lg ">
        <Image src={'/'+image}  className='rounded-lg' fill alt=''/>
        </div>
        <div className="p-2 pb-8 relative" >
            <div className="rounded-3xl absolute bg-white  right-4 flex justify-center items-center flex-col -top-8 h-[60px] w-[80px]">
                <h1 className='text-[16px] font-medium'>{waitTime.start}-{waitTime.end}</h1>
                <p className='text-[12px] text-[#585C5C]'>min</p>
            </div>
            <h1 className='text-md font-semibold'>{title}</h1>
            <span className='flex items-center gap-2'>
        <Image src={'/start.png'}  className='rounded-lg' height={15} width={15} alt=''/>
            <p className='text-[12px] text-[#4D7C1B]'>{rating} Excellent</p>
            <p className=' text-[12px] text-[#585C5C]'>(500+)</p>
            </span>
            <span className='flex items-center gap-2'>
            <p className='text-[12px] text-[#585C5C]'> {distance.toFixed(2)} miles away</p>
            </span>
        </div>
    </div>
        )
    }

    const [barsWithDistance, setBarsWithDistance] = useState<any>([]);
    const [offers, setOffers] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
      async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch('/api/home?userLatitude=40.7128&userLongitude=-74.0060');
            const jsonData = await response.json();
            console.log(jsonData,'fetching')
            setBarsWithDistance(jsonData.data.barsWithDistance);
            setOffers(jsonData.data.offers);
            setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  
    if(loading) return <h1>loading....</h1>
  return (
   
   <div className="">
     <Header/>
    {GetId!=''?(
        <div className="w-[90%] mx-auto my-0">
            <ProductDetail id={GetId}/>
            <div className="mt-8 flex items-center gap-1 w-full">
    {offers&&offers.map((items:any,index:number)=>(
        <div className="relative h-[200px] w-[320px]  rounded-lg ">
        <Image src={'/'+items.image}  className='rounded-lg' fill alt=''/>
        </div>
    ))}
    </div>
        </div>
    ):(
    <div className="mt-4">
        <div className="flex justify-center items-center mb-8">
            <div className="flex gap-2 relative rounded-md p-2 w-[500px] h-[45px] bg-[#E8EBEB]">
        <Image src={'/search.png'}  className='rounded-lg ' width={20} height={20} alt=''/>
                <input type="text" className='bg-[#E8EBEB] w-full h-full px-2' placeholder='Search Popeyes Louisiana Kitchen' />
            </div>
        </div>
    <div className="w-[90%] mx-auto my-0">
    <div className="flex items-center gap-1 w-full">
    {offers&&offers.map((items:any,index:number)=>(
        <div className="relative h-[200px] w-[320px]  rounded-lg ">
        <Image src={'/'+items.image}  className='rounded-lg' fill alt=''/>
        </div>
    ))}
    </div>
     <div className="mt-8">
        <div className="flex items-center gap-4">
        <h1 className='text-[25px] font-bold'>Offers near you</h1>
        <p className='text-[#4D7C1B] text-[14px]'>View all (298)</p>
        </div>
        <div className="mt-2 flex gap-4 items-center">
            {barsWithDistance&&barsWithDistance.map((items:any,index:number)=>(
                <Card  image={items.image} distance={items.distance} id={items._id} waitTime={items.waitTime} offers={items.offers} title={items.title} rating={items.rating}/>
            ))}
        </div>
    </div>
   </div>
    </div>
    )}
   
    {/* <BarChart/> */}
   </div>
  )
}

export default page