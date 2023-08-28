'use client'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Header'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="bg-[#000000de]">
    <Navbar />
    <style jsx>{`
      .heading {
        color: white;
        font-size: 2.5rem; /* Use rem units for font sizes */
        font-weight: 700;
        line-height: 3rem; /* Use rem units for line heights */
        letter-spacing: -0.06em;
        text-align: center;
      }
      .paragraph {
        color: white;
        font-size: 1rem; /* Use rem units for font sizes */
        font-weight: 400;
        line-height: 1.5rem; /* Use rem units for line heights */
        letter-spacing: 0;
        text-align: center;
      }
      .heading2{
        font-size: 36px;
        font-weight: 700;
        line-height: 43px;
        letter-spacing: -1.0800000429153442px;
        text-align: left;
      }
      .paragraph2{
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
      }
    `}</style>
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className="heading">Nightclub live Tracking</h1>
      <p className="paragraph my-4">
        Get guests out of the line and into your club with <br />
        Linecheck, the intelligent Linecheck app.
      </p>
      <p className="paragraph">
        Create a free Linecheck and have club goers start signing <br />
        in directly from their mobile devices in under 3 minutes.
      </p>
      <div className="text-[#4100FA] my-4 flex items-center gap-4">
        <div className="h-8 w-8 relative">
          <Image src="/play.png" fill alt="play" />
        </div>
        See it in action
      </div>
      <Button className="w-[120px] h-[50px]">Try it free</Button>
      <p className="text-gray-300 my-4">No credit card required</p>
    </div>
    <div className="w-full h-[60vh] relative">
      <Image src="/Hero_Image.png.png" layout="fill" objectFit="cover" alt="hero" />
    </div>
    <div className="flex flex-col items-center mt-8">
      <p className="paragraph">
        With Waitwhile, businesses have saved 100 million
      </p>
      <p className="paragraph">
        customers more than 10,000 years of waiting in line...
      </p>
      <p className="paragraph my-4">...and counting</p>
      <h1 className="heading text-center">Say hello to a Linecheck <br /> without the wait</h1>
    </div>
    <section className="flex flex-col md:flex-col lg:flex-row 2xl:w-[70%] xl:w-[80%] lg:w-[80%] md:w-[80%] mx-auto my-0">
  <div className="w-full lg:w-1/2 p-8">
    <img src="/waitlist.svg.png" alt="Section Image" className="w-full h-auto" />
  </div>
  <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center">
    <h2 className="text-3xl text-white font-semibold mb-4 2xl:text-[65px] xl:text-[35px] xl:leading-[40px] lg:text-[34px] md:text-[30px] md:leading-[35px] text-[20px] leading-[25px] 2xl:leading-[70px]">Let people join your club’s guest list from anywhere</h2>
    <p className="text-white mb-4  2xl:text-[25px] xl:leading-[25px] xl:text-[18px] lg:leading-[20px] md:leading-[20px] 2xl:leading-[30px] lg:text-[15px]  md:text-[15px] text-[12px] leading-[20px]">
    Bring your clubbing experience into the future by letting guests join a virtual Linecheck from their smart device instead of standing in a physical line in front of your space.
    </p>
    <Button className="bg-black text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">Read More</Button>
  </div>
</section>
    <section className="flex flex-col md:flex-col lg:flex-row 2xl:w-[70%] xl:w-[80%] lg:w-[80%] md:w-[80%] mx-auto my-0">
  
  <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center">
    <h2 className="text-3xl text-white font-semibold mb-4 2xl:text-[65px] xl:text-[35px] xl:leading-[40px] lg:text-[34px] md:text-[30px] md:leading-[35px] text-[20px] leading-[25px] 2xl:leading-[70px]">Make waiting to get in
part of the fun</h2>
    <p className="text-white mb-4  2xl:text-[25px] xl:leading-[25px] xl:text-[18px] lg:leading-[20px] md:leading-[20px] 2xl:leading-[30px] lg:text-[15px]  md:text-[15px] text-[12px] leading-[20px]">
    Partner with a local bar, coffee shop or
restaurant or just let guests do what they like
while they wait from anywhere. They’ll get a text
message when it’s their turn to come in.
    </p>
    <Button className="bg-black text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">Read More</Button>
  </div>
  <div className="w-full lg:w-1/2 p-8">
    <img src="/Happy friends drinking beer and wine in pub 1.png" alt="Section Image" className="w-full h-auto" />
  </div>
</section>
    <section className="flex flex-col md:flex-col lg:flex-row 2xl:w-[70%] xl:w-[80%] lg:w-[80%] md:w-[80%] mx-auto my-0">
  <div className="w-full lg:w-1/2 p-8">
    <img src="/2942529 1.png" alt="Section Image" className="w-full h-auto" />
  </div>
  <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center">
    <h2 className="text-3xl text-white font-semibold mb-4 2xl:text-[65px] xl:text-[35px] xl:leading-[40px] lg:text-[34px] md:text-[30px] md:leading-[35px] text-[20px] leading-[25px] 2xl:leading-[70px]">Make waiting to get in part of the fun</h2>
    <p className="text-white mb-4  2xl:text-[25px] xl:leading-[25px] xl:text-[18px] lg:leading-[20px] md:leading-[20px] 2xl:leading-[30px] lg:text-[15px]  md:text-[15px] text-[12px] leading-[20px]">
    Partner with a local bar, coffee shop or
restaurant or just let guests do what they like
while they wait from anywhere. They’ll get a text
message when it’s their turn to come in.
    </p>
    <Button className="bg-black text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">Read More</Button>
  </div>
</section>
<section className="flex flex-col md:flex-col lg:flex-row 2xl:w-[70%] xl:w-[80%] lg:w-[80%] md:w-[80%] mx-auto my-0">
  
  <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center">
    <h2 className="text-3xl text-white font-semibold mb-4 2xl:text-[65px] xl:text-[35px] xl:leading-[40px] lg:text-[34px] md:text-[30px] md:leading-[35px] text-[20px] leading-[25px] 2xl:leading-[70px]">Make waiting to get in part of the fun</h2>
    <p className="text-white mb-4  2xl:text-[25px] xl:leading-[25px] xl:text-[18px] lg:leading-[20px] md:leading-[20px] 2xl:leading-[30px] lg:text-[15px]  md:text-[15px] text-[12px] leading-[20px]">
    Partner with a local bar, coffee shop or
restaurant or just let guests do what they like
while they wait from anywhere. They’ll get a text
message when it’s their turn to come in.
    </p>
    <Button className="bg-black text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">Read More</Button>
  </div>
  <div className="w-full lg:w-1/2 p-8">
    <img src="/113z_2208_w017_n001_18b_p12_18 1.png" alt="Section Image" className="w-full h-auto" />
  </div>
</section>
<Footer/>
  </main>
  
  )
}
