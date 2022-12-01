import Image from 'next/image'
import React from 'react'
import partnersImage from "../public/assets/images/iata-new.png"
import HeaderSection from './helper/HeaderSection'
function Partners({partners}) {
  if(!partners){
    return
  }
  const myLoader=({src})=>{
    return `https://api.nilecruisez.com/${item.icon}`;
  }
  return (
   <div className='py-6 container mx-auto'>
    <HeaderSection titel="Our Partners" partOne="Our Awesome" partTwo="Partners" />
     <div className=' flex w-full gap-2  md:justify-around justify-center items-center  '>
      {partners && partners.map(item => {
           return (
            <Image 
            key={item.id}
           className='object-contain mr-[15px]'
           loader={() =>{
              return `https://api.nilecruisez.com/${item.icon}`;
            }
           }
           src={`https://api.nilecruisez.com/${item.icon}`}
           width={100}
           height={100}
           layout={"intrinsic"}
           loading="lazy"
           />
           )
           
      })}
         
       
          
    </div>
   </div>
  )
}

export default Partners