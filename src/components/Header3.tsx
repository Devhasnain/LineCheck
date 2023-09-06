'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Header3 = ({applyFilters,inputSearch}:any) => {
     
  return (
    <nav className="bg-white w-[80%] mx-auto  my-0  p-4 flex items-center justify-between">
        <style jsx>{`
            .paragraph {
          
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                color:white;
                letter-spacing: -0.011em;
                text-align: left;
            }
            paragraph:hover{
               
            }
          `}</style>
      <div className="relative h-[80px] w-[80px] mr-4">
      <Link href="/" className=" font-inter">
        <Image src="/image 18 (1).png" fill alt="Logo"  />
      </Link>
      </div>
      <div className="flex justify-center items-center ">
            <div className="flex gap-2 relative items-center rounded-md p-2 w-[500px] h-[45px] bg-[#E8EBEB]">
        <Image src={'/search.png'}  className='rounded-lg ' width={18} height={15} alt=''/>
                <input type="text" value={inputSearch}
        onChange={(e) =>applyFilters(e.target.value)} className='outline-none bg-[#E8EBEB] w-full h-full px-2' placeholder='Search Popeyes Louisiana Kitchen' />
            </div>
        </div>
      <div className="space-x-4  flex items-center">
        <Link href="/aboutus" className=" font-inter">About us</Link>
        <Link href="/contactus" className=" font-inter">Contact us </Link>
      </div>
    </nav>
  );
};

export default Header3;