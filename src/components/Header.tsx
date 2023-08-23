'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
     
  return (
    <nav className="w-[80%] mx-auto bg-[#000000de] my-0  p-4 flex items-center justify-between">
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
        <Image src="/logo.png" fill alt="Logo"  />
      </div>
      <div className="space-x-4 paragraph">
      
      

        <Link href="#" className=" font-inter">About us</Link>
        <Link href="#" className=" font-inter">Contact us </Link>
        <Link href="#" className=" font-inter">Log in</Link>
        <Link href="#" >
            <Button>
            Try it free    
            </Button>
            </Link>
      </div>
    </nav>
  );
};

export default Navbar;
