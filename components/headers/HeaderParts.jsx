import Link from 'next/link'
import React from 'react'
import  bg from "../../public/assets/images/bglistcrou.webp"
import  bgBottom from "../../public/assets/images/shape8.png"
function HeaderParts({typeList ,  bgtour  }) {
  return (
    <div
    style={{ backgroundImage: `url(${ bgtour? bgtour.src :  bg.src})` }}
     className='relative h-screen w-full bg-no-repeat bg-fixed bg-cover bg-top -z-10'>
        {/* content  */}
        <div className='h-full w-full flex flex-col justify-center items-center z-30'>
            <h2 className='uppercase text-3xl md:text-5xl text-white font-bold font-Poppins text-center '>{typeList} </h2>
            <p className='text-white font-Poppins capitalize text-xl text-center'>
              <Link href={"/"}>
              <button className='  cursor-pointer text-[#029e9d]  ' >Home</button>
              </Link>
               | {typeList} </p>
        </div>
        {/* layout */}
        <div className='absolute top-0 left-0 bottom-0 w-full h-full bg-[#0000002e] -z-10 '></div>
        {/* bottom image */}
        <div 
         style={{ backgroundImage: `url(${bgBottom.src})` }}
         
         className=" absolute bottom-0  w-full h-24 bg-contain bg-top  mt-[-28px] bg-repeat-x z-10 rotate-[180deg]">

        </div>
    </div>
  )
}

export default HeaderParts