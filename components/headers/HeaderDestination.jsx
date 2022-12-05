import React from 'react'
import { BsStarFill  } from 'react-icons/bs'
import { BiLocationPlus } from 'react-icons/bi'
function HeaderDestination({titel , location ,  reviews}) {
  return (
    <div className='pt-14 '>
        <div className='flex container gap-1 mx-auto flex-col justify-center items-center md:justify-start md:items-start md:gap-3 '>
           <h1  className='text-3xl capitalize font-bold font-Poppins text-[#17233e] text-center md:text-4xl md:text-left'>{titel}</h1>
           <div className='flex  flex-col justify-center items-center md:flex-row md:w-full gap-2 md:justify-start '>
            <p className='text-[#777] text-lg font-Poppins capitalize flex justify-center items-center gap-1  '> <span></span> {location} </p>
          
             
               <p className='text-[#777] text-lg font- capitalize text-center  '>{reviews}</p>
        
            </div>        
        </div>
    </div>
  )
}

export default HeaderDestination