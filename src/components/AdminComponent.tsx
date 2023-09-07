'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
// import BarChart from '@/components/BarChart';
import { baseRoute } from '@/utils/route';
import { CounterContext } from '@/ThemeContext';
import BarCard from './BarCard';


const AdminCompmonent=()=>{
    const [loading, setLoading] = useState(false)
    const [BardsTimming, setBardsTimming] = useState<any>({})
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

            fetch(`${baseRoute}offers/${1}`, requestOptions)
                .then(response => response.json())
                .then((result) => {
  dispatch({ type: "OFFERS",payload: result.data})
                    setLoading(false)
                })
                .catch(error => console.log('error', error));


fetch(`${baseRoute}bartimmings/1`, requestOptions)
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
const { state, dispatch } = useContext(CounterContext);


//   const [toggle,setToggle] = useState(false)
 

  const [bars,setBars] = useState<any>([])
  useEffect(() => {
  const fetchFun =()=>{
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions:any = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/showAllBars", requestOptions)
  .then(response => response.json())
  .then((result:any) =>{
    setBars(result.data)
    console.log(result)})
  .catch(error => console.log('error', error));
  }
  fetchFun()
  }, [])
  
    return(
        <>
<div className="flex gap-2 w-full ">
    {/* {toggle?( */}
        <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4 text-white">Bars</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bars&&bars.map((bar:any) => (
          <BarCard key={bar.bar_id} bar={bar} />
        ))}
      </div>
    </div>
    {/* )
    : */}
    {/* <CreateBar/> */}
    {/* } */}
            </div>
        </>
    )
}

export default AdminCompmonent;