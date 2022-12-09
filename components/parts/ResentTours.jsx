import React from 'react'
import image1 from "../../public/assets/images/trending4.jpg"
import image2 from "../../public/assets/images/trending5.jpg"
import image3 from "../../public/assets/images/hotels.jpg"
import Image from 'next/image'
function ResentTours({relatedTous}) {
  return (
    <div className='container mx-auto pt-7 '>
      {relatedTous.map(item =>(
        <div  key={item.id} className='flex gap-3 justify-center items-center border-b pb-4 mt-3'>
        <div>
        <Image
         loader={() =>{
          return `${item.image}`;
        }
       }
         src={item.image}
         width={150}
         height={120}
         layout={"intrinsic"}
         loading="lazy"
         className='rounded-lg'
         />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-xl text-[#17233e] font-Poppins font-bold '>{item.title}</h4>
          <span className='text-[#777] font-mono text-lg'>{item.destinations}</span>
        </div>
        </div>
      ))}
       
    </div>
  )
}

export default ResentTours