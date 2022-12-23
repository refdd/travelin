import Image from 'next/image'
import React from 'react'
import { BsClock, BsEye } from 'react-icons/bs'
import { FaComment, FaUser } from 'react-icons/fa'
function HeaderSingelBlog({singelSlug}) {
  return (
    <div className='container mx-auto pt-7'>
   <div className='flex flex-col gap-4   md:gap-7 '>
        {/*content  */}
        <div className='flex flex-col gap-3 md:flex-1'>
          <div className='flex gap-7'>
            {/* <button className=' bg-[#029e9d] py-2 px-3 text-white rounded-lg font-bold font-Poppins'>#Technology</button>
             <span className='flex gap-1 text-[#777] text-xl font-mono items-center'> <BsEye/> 2500 </span> */}
          </div>
            <h1 className='text-center text-[#17233e] font-Poppins font-bold text-2xl capitalize md:text-left md:text-4xl md:leading-[1.5] lg:text-[55px] leading-none  md:px-3 lg:px-8 '>{singelSlug.title}</h1>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start text-[#777] text-lg  font-Poppins capitalize' >
               <span className='flex items-center gap-2'> <BsClock/> Posted On :{singelSlug.updated_at}</span>
               <span className='flex items-center gap-1'> <FaUser/> {singelSlug.author.name} <FaComment/>50</span>
            </div>
        </div>
      
        <div className=" w-full  h-48 md:h-96 relative bg-white rounded-t-lg">
                <Image
                 loader={() =>{
                  return `${singelSlug.image}`;
                }
               }
                src={singelSlug.image}
                  alt={singelSlug.meta_title}
                 layout={"fill"}
                  loading={"eager"}
                  className={"rounded-lg  "}
                />
                </div>
   </div>
    </div>
  )
}

export default HeaderSingelBlog