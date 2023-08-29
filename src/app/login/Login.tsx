"use client"; // This is a client component 👈🏽
import React, { ChangeEvent, FormEvent, useState,useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<any>('');
  const [loginUser, setLoginUser] = useState<any>({
    email:'',
    password:''
  });

  const handlerChange = (e:any) =>{
    const {value,name} = e.target
    setLoginUser({...loginUser,[name]:value})
  }

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  // const onSubmit = async () => {
  //   const { email, password }:any = loginUser;
  //   // const res = await signIn("credentials", {
  //   //   email,
  //   //   password,
  //   //   redirect: false,
  //   // });

  //   // if (res.error) {
  //   //   setError("Invalid Credentials");
  //   //   return;
  //   // }
  //   try {
  //     const { ok, error, url }:any = await signIn("credentials", {
  //       redirect: Boolean(false),
  //       email,
  //       password,
  //       callbackUrl: callbackUrl || "/",
  //     });

  //     if (!ok && error === "CredentialsSignin")
  //       setError({ message: "Bad email or password !" });

  //     if (ok && url) router.push(url);
  //   } catch (error:any) {
  //     setError({ message: error.message });
  //   }
  
  // };
  const onSubmit = async (e:any) => {
    e.preventDefault();
const { email,
  password,} = loginUser
    try {
      const res:any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res,'reshamza')
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-auto my-8 max-w-[1500px]  min-h-screen relative flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-4 text-start text-[40px] font-medium font-poppin uppercase text-white">Login</h2>
          <div className="text-start  text-white text-[18px] font-medium font-poppin uppercase text-greentext">New Here? 
      <Link href="/signup" className=" font-inter">
          <span className='text-[#4100FA] ml-4 '>Create an Account</span>
</Link>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit} >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
               Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 py-3 text-white px-4 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
              value={loginUser.email}
              onChange={handlerChange}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                 Password
              </label>
                <label   htmlFor="forgot" className="text-white cursor-pointer block text-sm font-medium text-[#4100FA]">
                  Forgot Password?
                </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="text-white mt-1 py-3 px-4 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
              value={loginUser.password}
              onChange={handlerChange}
            />
          </div>
         {error&& <span className='pt-2 text-red-600'>{error}</span>}
          <div className='flex flex-col sm:flex-row gap-2'>
            {/* <Link href="/form" className={` flex items-center justify-center gap-2  sm:w-auto font-poppin bg-btnOrange px-12 text-btntext tracking-normal leading-snug text-btnsize font-large  rounded-sm`}>  */}
              <Button className="shadow-[0px_1px_24px_0px_#1F51FF99] !rounded-md" type="submit" >Signin</Button>
            {/* </Link> */}
            
            {/* <Link href="https://localhost/beetlepro.com/admin/login/google"> */}
            <button  className='flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto'>
              <Image src={'/google-icon 1.png'} width={20} height={20} alt=''/>
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


