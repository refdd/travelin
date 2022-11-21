import Image from 'next/image'
import React from 'react'
import { BsClock, BsEye } from 'react-icons/bs'
import { FaComment, FaUser } from 'react-icons/fa'
import blogimage from "../../public/assets/images/trending4.jpg"
function HeaderSingelBlog() {
  return (
    <div className='container mx-auto pt-7'>
   <div className='flex flex-col gap-4 md:flex-row  md:gap-7 '>
        {/*content  */}
        <div className='flex flex-col gap-3 md:flex-1'>
          <div className='flex gap-7'>
            <button className=' bg-[#029e9d] py-2 px-3 text-white rounded-lg font-bold font-serif'>#Technology</button>
             <span className='flex gap-1 text-[#777] text-xl font-mono items-center'> <BsEye/> 2500 </span>
          </div>
            <h1 className='text-center text-[#17233e] font-serif font-bold text-2xl capitalize md:text-left md:text-4xl md:leading-[1.5] lg:text-[55px] leading-none  md:px-3 lg:px-8 '>Apple Honors Eight Developers With Annual Apple Design Awards.</h1>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start text-[#777] text-lg  font-serif capitalize' >
               <span className='flex items-center gap-2'> <BsClock/> Posted On : 12 May 2021</span>
               <span className='flex items-center gap-1'> <FaUser/> Jack Richard <FaComment/>50</span>
            </div>
        </div>
        {/* image */}
        <div className='md:w-[50%]'>
          <Image
          src={blogimage}
          width={500}
          height={500}
          layout="intrinsic"
          loading='lazy'
          className='rounded-lg '
          />
        </div>
   </div>
    </div>
  )
}

export default HeaderSingelBlog