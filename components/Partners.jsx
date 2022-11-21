import Image from 'next/image'
import React from 'react'
import partnersImage from "../public/assets/images/iata-new.png"
import HeaderSection from './helper/HeaderSection'
function Partners() {
  return (
   <div className='py-6 container mx-auto'>
    <HeaderSection titel="Our Partners" partOne="Our Awesome" partTwo="Partners" />
     <div className=' flex w-full gap-2  md:justify-around justify-center items-center  '>
          <Image
          className='object-contain	 mr-[15px]'
          src={partnersImage}
          width={100}
          height={100}
          layout={"intrinsic"}
          loading="lazy"
          />
          <Image
          className='object-contain	 mr-[15px]'
          src={partnersImage}
          width={100}
          height={100}
          layout={"intrinsic"}
          loading="lazy"

          />
          <Image
          className='object-contain	 mr-[15px]'
          src={partnersImage}
          width={100}
          height={100}
          layout={"intrinsic"}
          loading="lazy"

          />
          <Image
          className='object-contain	 mr-[15px]'
          src={partnersImage}
          width={100}
          height={100}
          layout={"intrinsic"}
          loading="lazy"

          />
    </div>
   </div>
  )
}

export default Partners