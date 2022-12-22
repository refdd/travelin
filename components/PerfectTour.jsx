import React from 'react'
import {FiEdit  } from 'react-icons/fi'
import {GiPayMoney} from 'react-icons/gi'
import { MdOutlineSupportAgent  } from 'react-icons/md'
import {TbHandClick  } from 'react-icons/tb'
import HeaderSection from './helper/HeaderSection'
function PerfectTour() { 
  return (
    <div style={{backgroundImage: `url(/_next/static/media/shape4.ef03d001.png)`}}
     className=" relative  bg-no-repeat bg-cover bg-center  flex flex-col bg-[#e6eef5]   w-full   md:pt-20  pt-10 ">
          {/* header seaction */}
          <HeaderSection
          titel="4 Steps Of The Perfect Tour"
          partOne="find"
          partTwo="Travel Perfection"
          decs=""
          />
        
          {/* card  */}
        <div className='flex flex-col md:flex-row justify-center mt-7 items-center px-6   gap-6 '>
        
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <TbHandClick className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h3 className='text-2xl text-[#17233e] font-Poppins font-bold z-10 duration-1000 group-hover:text-white  '>Choose Your Trip</h3> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Choose, customize or just tell us about your perfect trip</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <MdOutlineSupportAgent className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h3 className='text-2xl text-[#17233e] font-Poppins font-bold z-10 duration-1000 group-hover:text-white  '>Get Matched</h3> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Our local travel specialist will build your perfect itinerary.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <FiEdit className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h3 className='text-2xl text-[#17233e] font-Poppins font-bold z-10 duration-1000 group-hover:text-white  '>Edit & Personalize</h3> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Get your itinerary customized to fit all your needs & preferences.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
           {/*  */}
           <div className=' group  wrapper text-white flex flex-col w-[90%] md:w-1/4 gap-5 hover:text-white  justify-center items-center p-7 overflow-hidden rounded-xl border '>
           <div className='z-10'>
           <GiPayMoney className='  duration-1000 group-hover:text-white text-[#029e9d]' size={70} />
           </div>
           <h3 className='text-2xl text-[#17233e] font-Poppins font-bold z-10 duration-1000 group-hover:text-white  '>Book And Pay</h3> 
           <p className='text-center text-[#777] z-10 duration-1000 group-hover:text-white '>Pay and book when you’re happy with the itinerary.</p>
           <div className='w-full PrefectCard bg-[#029e9d]  absolute bottom-0 left-0  ' ></div>
           </div>
    
        </div>

        
  </div>
  )
}

export default PerfectTour