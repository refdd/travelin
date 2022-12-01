import Image from 'next/image'
import React from 'react'
import image1 from "../../public/assets/images/trending4.jpg"
import image2 from "../../public/assets/images/trending5.jpg"
import image3 from "../../public/assets/images/hotels.jpg"
function PopularTours() {
  return (
    <div className='container mx-auto pt-7 '>
        {/* card */}
        <div className='flex gap-3 justify-center border-b pb-4'>
        <div>
        <Image
         src={image1}
         width={150}
         height={120}
         layout={"intrinsic"}
         loading="lazy"
         className='rounded-lg'
         />
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-xl text-[#17233e] font-Poppins font-bold '>An Incredibly Easy Method That Works For All</h4>
          <span className='text-[#777] font-mono text-lg'>0 Apr 2021</span>
        </div>
        </div>
        {/* card */}
        <div className='flex gap-3 justify-center border-b pb-4'>
        <div>
        <Image
         src={image2}
         width={150}
         height={120}
         layout={"intrinsic"}
         loading="lazy"
         className='rounded-lg'
         />
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-xl text-[#17233e] font-Poppins font-bold '>An Incredibly Easy Method That Works For All</h4>
          <span className='text-[#777] font-mono text-lg'>0 Apr 2021</span>
        </div>
        </div>
        {/* card */}
        <div className='flex gap-3 justify-center border-b pb-4'>
        <div>
        <Image
         src={image3}
         width={150}
         height={120}
         layout={"intrinsic"}
         loading="lazy"
         className='rounded-lg'
         />
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-xl text-[#17233e] font-Poppins font-bold '>An Incredibly Easy Method That Works For All</h4>
          <span className='text-[#777] font-mono text-lg'>0 Apr 2021</span>
        </div>
        </div>
    </div>
  )
}

export default PopularTours