import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import loge from "../public/assets/images/logo-new.svg"
import {AiOutlineMenu , AiFillCloseCircle} from "react-icons/ai"
function NavBar() {
    const [menueBar , setmenuBar]= useState(false)
    
    let MenueIcon = AiOutlineMenu
    // chack the meunbar 
    if(menueBar){
        MenueIcon = AiFillCloseCircle
    }
    return (  
        <div className="w-full  h-[79px] md:h-24 p-2 lg:p-5 bg-[#f8f9fa] border-b-2  ">
        <div className="">
          <div className=" flex h-full w-full   ">
            {/* logo  */}
            <Link href="/">
            <div className=" w-11/12 flex justify-between items-center md:w-1/5 cursor-pointer  ">
              <div className="">
                <Image
                  src={loge}
                  alt="loge travel website"
                  width={200}
                  height={50}
                />
              </div>
            </div>
          
            </Link>
           
            {/* links  */}
            <div className=" w-3/5 flex   justify-center items-center">
              <ul className=" hidden md:flex gap-4 font-Poppins   ">
                <li className="text-lg uppercase text-[#777] transition  hover:text-[#029e9d] ">
                  <Link href="/">
                    <a>Home </a>
                  </Link>
                </li>
                <li className="text-lg uppercase text-[#777] transition  hover:text-[#029e9d] ">
                <Link href={`/Egypt/egypt-tour-packages`}>
                    <a>Traval Packages </a>
                  </Link>
                </li>
                <li className=" text-lg uppercase  text-[#777] transition  hover:text-[#029e9d] ">
                <Link href={`/Egypt/river-nile-cruises`}>
                    <a>Egypt Cruises </a>
                  </Link>
                </li>
                <li className=" text-lg uppercase text-[#777] transition  hover:text-[#029e9d] ">
                <Link href={`/egypt-travel-blog`}>
                    <a>Blog  </a>
                  </Link>
                </li>
        
              </ul>
            </div>
            {/* button booking  */}
            {/* <div className=" hidden md:flex md:w-1/5  justify-center items-center">
              <div className=" flex">
                <Link href="/InquireNow">
                  <a className="bg-[#029e9d]  text-center text-white text-lg rounded-2xl md:p-4 md:text-xl transition hover:bg-[#fdc703]">
                  Inquire now
                  </a>
                </Link>
              </div>
            </div> */}
            <div className="  group hidden md:flex ">
        <Link href={`/InquireNow`}>
        <button className=" wrapper   w-40  group-hover:text-white bg-[#029e9d] px-4 py-1 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                 Inquire now
                  </button>
        </Link>
              
            </div>
            {/* menue bar  */}
           <div className='flex justify-center transition duration-700 ease-out  items-center md:hidden cursor-pointer  ' onClick={() => setmenuBar(!menueBar)}>
           <MenueIcon size={30}/>
           </div>
          </div>
        </div>
        <div className= { menueBar ? `fixed right-0 top-[78px] transition duration-700 ease-out translate-x-0 z-50` : `fixed right-0 top-[78px] transition  duration-700 ease-out translate-x-72 z-50`} >
            <div className='bg-[#f8f9fa] w-72   h-auto  rounded-lg z-50 flex justify-end transition-all    '>
                <ul className='flex flex-col  w-full p-4  '>
                    <li className='border-b-2  text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] '>
                        <Link href="/" >
                            <a className=''> Home </a>
                        </Link>
                    </li  >
                    <li className='border-b-2  text-left w-full p-2 uppercase transition-all hover:bg-[#cccccc] '>
                        <Link href={`/Egypt/egypt-tour-packages`} >
                            <a> Traval Packages </a>
                        </Link>
                    </li>
                    <li className='border-b-2 text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] ' >
                        <Link href={`/Egypt/river-nile-cruises`}>
                            <a> egypt Cruises  </a>
                        </Link>
                    </li>
                    <li className='border-b-2  text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] ' >
                        <Link href={`/egypt-travel-blog`} >
                            <a> Blog  </a>
                        </Link>
                    </li>
                </ul>
            </div> 
        </div>
      </div>
      )
}

export default NavBar