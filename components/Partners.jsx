import Image from 'next/image'
import React from 'react'
import HeaderSection from './helper/HeaderSection'
function Partners({partners}) {
  if(!partners){
    return
  }

  return (
   <div className=' relative py-6 container mx-auto bg-[#e6eef5] '>
    <HeaderSection titel="Our Partners" partOne="Our Awesome" partTwo="Partners" />
     <div className=' flex w-full gap-2  md:justify-around justify-center items-center  '>
      {partners && partners.map(item => {
           return (
            <Image 
            key={item.id}
           className='object-contain mr-[15px]'
           loader={() =>{
              return `${item.icon}`;
            }
           }
           src={`${item.icon}`}
           width={100}
           height={100}
           layout={"intrinsic"}
           loading="lazy"
           alt='nilecruiez'
           />
           )
           
      })}
         
       
          
    </div>
    <div className="w-[40%] mx-auto bg-yellow-300 h-1  absolute bottom-[7px] left-[30%]"></div>

   </div>
  )
}

export default Partners