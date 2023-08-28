import Calendar from '@/components/Calendar';
import CountDownTimer from '@/components/CountDownTimer';
import ApexChart from '@/components/PieChart';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({ id }: any) => {
    const [loading, setLoading] = useState<any>(false);
    const [data, setData] = useState<any>([]);

    const [getVolume, setVolume] = useState(0)
    const [person, setPerson] = useState(0)
    const [getWaitTime, setWaitTime] = useState(0)
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(`/api/bar?id=${id}`);
                const jsonData = await response.json();
                console.log(jsonData, 'fetching')
                setData(jsonData.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    if (loading) return <h1>loading....</h1>
    console.log(data, 'asdkfjlsdjf')

    const handlerVolumeChanger = (value: string) => {
        switch (value) {
            case "volumeMinus":
                getVolume != 0 && setVolume(getVolume - 5)
                break;
            case "volumePlus":
                getVolume != 100 && setVolume(getVolume + 5)
                break;
            case "waitTimeMinus":
                getWaitTime != 0 && setWaitTime(getWaitTime - 1)
                break;
            case "waitTimePlus":
                getWaitTime != 20 && setWaitTime(getWaitTime + 1)
                break;
            case "personMinus":
                person != 0 && setPerson(person - 1)
                break;
            case "personPlus":
                person != 20 && setPerson(person + 1)
                break;
            default:
                break;
        }
    }

    return (
        <div className="w-[90%] mx-auto my-0">
            <div className="h-[50px] mt-8">
                <h1>Back</h1>
            </div>
            <div className='flex gap-2 '>
                <div className="relative h-[300px] w-[300px] rounded-lg ">
                    <Image src={'/' + data.image} className='rounded-lg' fill alt='' />
                </div>
                <div className="p-2  w-[70%] " >
                    <h1 className='text-md font-semibold text-[25px]'>{data.title}</h1>
                    <span className='flex items-center gap-2 '>
                        <Image src={'/start.png'} className='rounded-lg' height={15} width={15} alt='' />
                        <p className='text-[12px] text-[#4D7C1B]'>{data.rating} Excellent</p>
                        <p className=' text-[12px] text-[#585C5C]'>(500+)</p>
                    </span>
                    <div className="flex justify-center mt-8">
                        {/* <CountDownTimer waitTime={data.waitTime} lineQueue={data.lineQueue}/> */}
                        <div className="flex gap-8 items-center">
                            <div className="text-center">
                            <h1 className='text-[20px] font-bold '>WAIT TIME</h1>
                            <div className="bg-[#1C1C1E80] w-[150px] flex justify-center flex-col items-center rounded-3xl p-2">
                                <Image src={'/StopwatchIconAnimation.png'} width={100} height={100} alt='' />
                                <div className="h-10 w-[90%] bg-[#a8a8ad99] rounded-lg  p-1 mx-auto my-0 flex items-center justify-between">
                                    <Image src={'/minus.png'} onClick={() => handlerVolumeChanger('waitTimeMinus')} width={30} height={30} alt='' />
                                    <div className=" flex flex-col items-center">
                                        <h6 className='text-[#FFFFFF] text-[12px]'>Volume</h6>
                                        <div className='flex items-center '>
                                            <h6 className='text-white text-[14px]'>{getWaitTime}</h6>
                                            
                                            <sub className='text-[#FFFFFF] text-[12px]'>m</sub>
                                        </div>
                                    </div>
                                    <Image src={'/plus.png'} onClick={() => handlerVolumeChanger('waitTimePlus')} width={30} height={30} alt='' />
                                </div>
                            </div>
                            </div>
                            <div className="text-center">
                            <h1 className='text-[20px] font-bold '>Volume</h1>
                            <div className="bg-[#1C1C1E80] w-[150px] flex justify-center flex-col items-center rounded-3xl p-2">
                                <Image src={'/StopwatchIconAnimation (1).png'} width={100} height={100} alt='' />
                                <div className="h-10 w-[90%] bg-[#a8a8ad99] rounded-lg  p-1 mx-auto my-0 flex items-center justify-between">
                                    <Image src={'/minus.png'} onClick={() => handlerVolumeChanger('volumeMinus')} width={30} height={30} alt='' />
                                    <div className=" flex flex-col items-center">
                                        <h6 className='text-[#FFFFFF] text-[12px]'>Volume</h6>
                                        <div className='flex items-center '>
                                            <h6 className='text-white text-[14px]'>{getVolume}</h6>
                                            <sub className='text-[#FFFFFF] text-[12px]'>%</sub>
                                        </div>
                                    </div>
                                    <Image src={'/plus.png'} onClick={() => handlerVolumeChanger('volumePlus')} width={30} height={30} alt='' />
                                </div>
                            </div>
                            </div>
                            <div className="text-center">
                            <h1 className='text-[20px] font-bold '>Person</h1>
                            <div className="bg-[#1C1C1E80] w-[150px] flex justify-center flex-col items-center rounded-3xl p-2">
                                <Image src={'/multiple-users-silhouette 1.png'} width={100} height={100} alt='' />
                                <div className="h-10 w-[90%] bg-[#a8a8ad99] rounded-lg  p-1 mx-auto my-0 flex items-center justify-between">
                                    <Image src={'/minus.png'} onClick={() => handlerVolumeChanger('personMinus')} width={30} height={30} alt='' />
                                    <div className=" flex flex-col items-center">
                                        <h6 className='text-[#FFFFFF] text-[12px]'>Volume</h6>
                                        <div className='flex'>
                                            <h6 className='text-white text-[14px]'>{person}</h6>
                                        </div>
                                    </div>
                                    <Image src={'/plus.png'} onClick={() => handlerVolumeChanger('personPlus')} width={30} height={30} alt='' />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                <Calendar/>
            </div>
        </div>
    )
}

export default ProductDetail