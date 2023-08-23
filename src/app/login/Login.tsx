"use client"; // This is a client component 👈🏽
import React, { ChangeEvent, FormEvent, useState,useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<any>({});
  const [loginUser, setLoginUser] = useState({
    email:'',
    password:''
  });

  const handlerChange = (e:any) =>{
    const {value,name} = e.target
    setLoginUser({...loginUser,[name]:value})
  }

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onSubmit = async () => {
    const { email, password } = loginUser;

    try {
      const { ok, error, url }:any = await signIn("credentials", {
        redirect: Boolean(false),
        email,
        password,
        callbackUrl: callbackUrl || "/",
      });

      if (!ok && error === "CredentialsSignin")
        setError({ message: "Bad email or password !" });

      if (ok && url) router.push(url);
    } catch (error:any) {
      setError({ message: error.message });
    }
  };

  return (
    <div className=" mx-auto my-8 max-w-[1500px]  min-h-screen relative flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-4 text-start text-[40px] font-medium font-poppin uppercase text-white">Login</h2>
          <div className="text-start  text-white text-[18px] font-medium font-poppin uppercase text-greentext">New Here? <span className='text-[#4100FA]'>Create an Account</span></div>
        </div>
        <form className="mt-8 space-y-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
               Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 py-3 px-4 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
              value={loginUser.email}
              onChange={handlerChange}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                 Password
              </label>
                <label   htmlFor="forgot" className="cursor-pointer block text-sm font-medium text-[#4100FA]">
                  Forgot Password?
                </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 py-3 px-4 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
              value={loginUser.password}
              onChange={handlerChange}
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-2'>
            {/* <Link href="/form" className={` flex items-center justify-center gap-2  sm:w-auto font-poppin bg-btnOrange px-12 text-btntext tracking-normal leading-snug text-btnsize font-large  rounded-sm`}>  */}
              <Button className="shadow-[0px_1px_24px_0px_#1F51FF99] !rounded-md" onClick={onSubmit}>Signin</Button>
            {/* </Link> */}
            
            {/* <Link href="https://localhost/beetlepro.com/admin/login/google"> */}
            <button  className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto'>
              <Image src={'/google-icon 1.svg'} width={20} height={20} alt=''/>
              Sign in With Google
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


