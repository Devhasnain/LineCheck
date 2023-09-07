import { CounterContext } from '@/ThemeContext';
import React, { useState } from 'react'
import Image from 'next/image'
import BarChart from '@/components/BarChart';
import { baseRoute } from '@/utils/route';
import AdminCompmonent from './AdminComponent';

const AdminCom = () => {
    
      const [toggle,setToggle] = useState(false)
    const CreateBar = ()=>{
        const [getImage,setImage] = useState<any>(null)
      const [values, setValues] = useState<any>({
        title:"",
        description:"",
        rating:"",
        latitude:"40.0",
        longitude:"40.0",
        offers:"",
        email:"",
        is_active:false
      });
    console.log(getImage)
    
        const handleSubmit = (e:any)=>{
            e.preventDefault()
        
            var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var formdata = new FormData();
    formdata.append("title",values.title);
    formdata.append("description",values.description);
    formdata.append("image",getImage );
    formdata.append("rating", values.rating);
    formdata.append("latitude", values.latitude);
    formdata.append("longitude", values.longitude);
    formdata.append("offers", values.offers);
    formdata.append("waitTime", "00:00");
    formdata.append("volume", "0");
    formdata.append("lineQueue", "0");
    formdata.append("is_active", values.is_active ? '1' : '0');
    formdata.append("email", "samssdssdfes@example.com");
    console.log(getImage)
    
    var requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`http://127.0.0.1:8000/api/bars`, requestOptions)
      .then(response => response.json())
      .then((result:any) => {
        setValues({
            title:"",
            description:"",
            rating:"",
            latitude:"40.0",
            longitude:"40.0",
            offers:"",
            email:"",
            is_active:false
          })
          setImage(null)
        alert(result.message)
        console.log(result)})
      .catch(error => console.log('error', error));
        
      }
    const handlerChange = (e:any)=>{
        const {name,value,checked,type,files} = e.target
        if (type === 'file') {
            // Store the selected image file
            // setValues((prevData:any) => ({
            //     ...prevData,
            //     [name]: files[0], // Only allow a single image to be selected
            // }));
            setImage(files[0])
        }{
            setValues({
                ...values,[name]: type === 'checkbox' ? checked : value
            })
        }
        console.log(values,'image')
    }
    
    console.log(values.image,'img')
        return(
            <form onSubmit={handleSubmit} className="ml-8 max-w-md bg-white p-4 shadow-md rounded-lg">
                <h1 className="block text-gray-700 text-2xl font-bold mb-2">
                    Bar Create
                </h1>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input
                value={values.title}
                onChange={handlerChange}
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea
                value={values.description}
                onChange={handlerChange}
                id="description"
                name="description"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
              <input
                onChange={handlerChange}
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
              <input
                value={values.rating}
                onChange={handlerChange}
                type="text"
                id="rating"
                name="rating"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="latitude" className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
              <input
                value={values.latitude}
                onChange={handlerChange}
                type="text"
                id="latitude"
                name="latitude"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="longitude" className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
              <input
                value={values.longitude}
                onChange={handlerChange}
                type="text"
                id="longitude"
                name="longitude"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div> */}
            <div className=''>
              <label htmlFor="is_active" className="lock text-gray-700 text-sm font-bold mb-2">
                Active
              </label>
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={values.is_active}
                onChange={handlerChange}
                className="mr-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="offers" className="block text-gray-700 text-sm font-bold mb-2">Offers</label>
              <input
                value={values.offers}
                onChange={handlerChange}
                type="text"
                id="offers"
                name="offers"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                value={values.email}
                onChange={handlerChange}
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
          
        )
      }
  return (
    <div>
         <div className='flex w-full  bg-black'>
            <div className="bg-[#212429] w-[17%] h-screen">
                <div className="flex justify-center">
                    <Image src={'/logo.png'} width={120} height={120} alt='' />
                </div>
                <nav>
                    <ul className='flex flex-col gap-2 mt-8'>
                        <li onClick={()=>setToggle(false)} className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/home.png'} width={25} height={25} alt='' />
                            Home</li>
                        <li onClick={()=>setToggle(true)} className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/Vector (3).png'} width={25} height={25} alt='' />
                            Bars</li>
                        <li className='px-4 py-2 cursor-pointer text-white flex items-center gap-1'>
                            <Image src={'/Vector (4).png'} width={25} height={25} alt='' />
                            Settings</li>
                    </ul>
                </nav>
            </div>
            <div className="w-[83%]">
                <div className="flex w-full h-12 justify-end items-center gap-2 px-8">
                    <span className='h-8 flex justify-center items-center w-8 rounded-full bg-gray-500 text-3xl text-white'>A</span>
                    <h1 className='text-white'>Admin1_resto</h1>
                    <Image src={'/icons (2).png'} width={20} height={20} alt='' />
                    <Image src={'/icons (1).png'} width={20} height={20} alt='' />
                </div>
                {!toggle?(
                <AdminCompmonent/>
                ):(
                    <CreateBar/>
                )}
            </div>
        </div>
    </div>
  )
}

export default AdminCom