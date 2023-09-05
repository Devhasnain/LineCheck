'use client'
import { CounterContext } from '@/ThemeContext';
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import BarChart from '@/components/BarChart';

const page = () => {
    const { state, dispatch } = useContext(CounterContext);
    const [loading, setLoading] = useState(false)
    const [BardsTimming, setBardsTimming] = useState({})
    const [Bards, setBards] = useState([])
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions: any = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch(`http://localhost:8000/api/offers/${1}`, requestOptions)
                    .then(response => response.json())
                    .then((result) => {
      dispatch({ type: "OFFERS",payload: result.data})
                        setLoading(false)
                    })
                    .catch(error => console.log('error', error));


fetch("http://localhost:8000/api/bartimmings/1", requestOptions)
  .then(response => response.json())
  .then((result) =>{

    setBardsTimming(calculateAverages(result.data))
    setBards(result.data)
    console.log(result)
})
  .catch(error => console.log('error', error));
            }
            catch (error) {
                console.log('error', error);
            }
        }
        fetchData();
    }, []);
    
    function calculateAverages(data: any) {
        const totalRecords = data.length;
      
        if (totalRecords === 0) {
          return {
            averageQueue: 0,
            averageVolume: 0,
            averageWaitTime: '00:00', // Initialize with minutes or seconds
          };
        }
      
        let totalQueue = 0;
        let totalVolume = 0;
        let totalWaitTime = 0;
      
        data.forEach((item: any) => {
          totalQueue += parseInt(item.queue);
          totalVolume += parseInt(item.volume);
      
          const [minutes, seconds] = item.waittime.split(':'); // Include minutes or seconds
          totalWaitTime += parseInt(minutes) * 60 + parseInt(seconds); // Calculate in seconds
        });
      
        const averageQueue = totalQueue / totalRecords;
        const averageVolume = totalVolume / totalRecords;
        const averageWaitTimeSeconds = totalWaitTime / totalRecords;
        const averageWaitTime = `${String(Math.floor(averageWaitTimeSeconds / 60)).padStart(2, '0')}:${String(Math.floor(averageWaitTimeSeconds % 60)).padStart(2, '0')}`;
      
        return {
          averageQueue,
          averageVolume,
          averageWaitTime,
        };
      }
      
    if (loading) {
        <div className="">loading ...</div>
    }
    const [getVolume, setVolume] = useState(0)
    const [getWaitTime, setWaitTime] = useState(0)
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
            default:
                break;
        }
    }
    return (
        <div className='flex w-full gap-6'>
            <div className="bg-[#212429] w-[17%] h-screen">
                <div className="flex justify-center">
                    <Image src={'/logo.png'} width={120} height={120} alt='' />

                </div>
                <nav>
                    <ul className='flex flex-col gap-2 mt-8'>
                        <li className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/home.png'} width={25} height={25} alt='' />

                            Home</li>
                        <li className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/Vector (3).png'} width={25} height={25} alt='' />

                            Products</li>
                        <li className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/Vector (4).png'} width={25} height={25} alt='' />

                            Settings</li>
                    </ul>
                </nav>
            </div>
            <div className="w-[83%]">
                <div className="flex w-full h-12 justify-end items-center gap-2 px-8">
                    <span className='h-8 flex justify-center items-center w-8 rounded-full bg-gray-500 text-3xl text-white'>A</span>
                    <h1>Admin1_resto</h1>
                    <Image src={'/icons (2).png'} width={20} height={20} alt='' />
                    <Image src={'/icons (1).png'} width={20} height={20} alt='' />
                </div>
                <div className="flex gap-2 w-full">
                    <div className="w-[60%]">
                        <h1>TOP Bar is open</h1>
                        <p>{new Date().toUTCString()}</p>
                        <div className="w-full flex items-center justify-between gap-2 mb-4">
                            <div className="flex items-center flex-col justify-center p-2 rounded-2xl bg-[linear-gradient(159.93deg,#4100FA_13.38%,_rgba(108,112,118,0)150.07%)] w-[35%] h-[120px]">
                                <p className='text-[10px] text-white'>Total waiting time </p>
                                <h1 className='text-[14px] text-white'>{BardsTimming?.averageWaitTime}</h1>
                            </div>
                            <div className="flex items-center flex-col justify-center p-2 rounded-2xl bg-[linear-gradient(169.45deg,_#D2C7F4_-3.64%,_rgba(108,112,118,0)167.57%)] w-[25%] h-[120px]">
                                <p className='text-[10px] text-white'>Volume of Guest</p>
                                <h1 className='text-[14px] text-white'>{BardsTimming?.averageQueue}</h1>
                            </div>
                            <div className="flex items-center flex-col justify-center p-2 rounded-2xl bg-[linear-gradient(174.24deg,_#4100FA_4.04%,rgba(108,112,118,0)95.06%)] w-[35%] h-[120px]">
                                <p className='text-[10px] text-white'>opening - Closing</p>
                                <h1 className='text-[14px] text-white'>8am:8pm</h1>
                            </div>
                        </div>
                        <div className="">
                            <BarChart Bards={Bards}/>
                            <div className="mt-8 flex  gap-8 p-4 rounded-xl bg-[linear-gradient(183.65deg,#23202D_3%,rgba(100,115,254,0.38)107%)]">
                                <div className="text-center">
                                    <h1 className='text-[20px] font-bold '>WAIT TIME</h1>
                                    <div className="bg-[#1C1C1E80] w-[150px] flex justify-center flex-col items-center rounded-3xl p-2">
                                        <Image src={'/StopwatchIconAnimation.png'} width={100} height={100} alt='' />
                                        <div className="h-10 w-[90%] bg-[#a8a8ad99] rounded-lg  p-1 mx-auto my-0 flex items-center justify-between">
                                            <Image src={'/minus.png'} onClick={() => handlerVolumeChanger('waitTimeMinus')} width={30} height={30} alt='' />
                                            <div className=" flex flex-col items-center">
                                                <h6 className='text-[#FFFFFF] text-[12px]'>Wait</h6>
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
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] ">
                        <h1>Offers</h1>
                        <div className="flex gap-2">
                            <div className="mt-8 flex flex-col items-center gap-1 w-full">
                                {state.offers && state.offers.map((items: any, index: number) => (
                                    <div className="relative h-[150px] w-[250px]  rounded-lg ">
                                        <Image src={items.image} className='rounded-lg' fill alt='' />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex flex-col items-center gap-1 w-full">
                                {state.offers && state.offers.map((items: any, index: number) => (
                                    <div className="relative h-[150px] w-[250px]  rounded-lg ">
                                        <Image src={items.image} className='rounded-lg' fill alt='' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page