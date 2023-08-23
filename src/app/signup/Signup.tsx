'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'


const Signup = () => {
    const [loginUser, setLoginUser] = useState({
      firstname:'',lastname:'', email:'', password:'',mobile:"", confirmPassword:"" 
    });
  
    const [error, setError] = useState<any>({});

    const handlerChange = (e:any) =>{
      const {value,name} = e.target
      setLoginUser({...loginUser,[name]:value})
    }
  
   
    const onSubmit = () => {
      // Create an user account.
      fetch("/api/signUp", {
        body: JSON.stringify(loginUser),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            setError({ message: res.error });
            return null;
          }
          alert('ok signulp')
          // Redirect to `/signin` if ok.
          // router.push("/signin");
        });
    };
  
  return (
    <div className=" mx-auto my-8 max-w-[1500px]  min-h-screen relative flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-4 text-start text-[40px] font-medium font-poppin uppercase text-white">sign up</h2>
        <div className="text-start  text-white text-[18px] font-medium font-poppin uppercase text-greentext">
        Already Member? 
      <span className='text-[#4100FA]'>Sign in</span></div>
      </div>
      <form className="mt-8 space-y-6" >
       <div className="flex gap-4 items-center">
       <div className=''>
          <label htmlFor="firstname" className="block text-sm font-medium text-white">
          First Name
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
          
            className="mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-2xl"
            value={loginUser.firstname}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-white">
          Last Name
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
        
            className="mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-2xl"
            value={loginUser.lastname}
            onChange={handlerChange}
          />
        </div>
       </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
             Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
            value={loginUser.email}
            onChange={handlerChange}
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-white">
               Password
            </label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
            value={loginUser.password}
            onChange={handlerChange}
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="mobile" className="block text-sm font-medium text-white">
            Mobile Number
            </label>
          </div>
          <input
            id="mobile"
            name="mobile"
            type="text"
            className="mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
            value={loginUser.mobile}
            onChange={handlerChange}
          />
        </div>
        <div className='flex flex-col sm:flex-row gap-2'>
          {/* <Link href="/form" className={` flex items-center justify-center gap-2  sm:w-auto font-poppin bg-btnOrange px-12 text-btntext tracking-normal leading-snug text-btnsize font-large  rounded-sm`}>  */}
            <Button className="shadow-[0px_1px_24px_0px_#1F51FF99] !rounded-md" onClick={onSubmit}>Sign Up</Button>
          {/* </Link> */}
          
          {/* <Link href="https://localhost/beetlepro.com/admin/login/google"> */}
          <button  className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto'>
            <Image src={'/google-icon 1.svg'} width={20} height={20} alt=''/>
            Sign up with Google
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  </div>
  )
}


export default Signup