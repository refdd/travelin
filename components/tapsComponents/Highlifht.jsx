import React from 'react'
import {MdOutlineWatchLater} from "react-icons/md"
import {HiUserGroup} from "react-icons/hi"
import {AiFillCalendar , AiOutlineUser , AiFillFileText} from "react-icons/ai"
import {BiMapAlt} from "react-icons/bi"
import { BsCheckLg } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
function Highlifht() {
  return (
    <div className='container mx-auto pt-4' >
       <div className='flex flex-col gap-2 '>
        <h1 className='text-3xl text-[#17233e] font-semibold  font-Poppins capitalize  my-3 md:text-4xl '>Description</h1>
        <p className='text-[#777] text-lg font-Poppins capitalize  leading-7'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known
            , is dummy text used in laying out print, graphic or web designs.</p>
            <p className='text-[#777] text-lg font-Poppins capitalize  leading-7'>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts 
                of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
       </div>
        {/*  */}
        <div className='pt-4'>
            <ul className='flex flex-wrap  border  divide-x divide-y '>
                  <li className='flex gap-1 justify-center items-center text-[#777] flex-1  md:w-[30%]  p-5'>
                     <MdOutlineWatchLater size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins   '>5Days</h6>
                  </li>
                  <li className='flex gap-1 justify-center items-center text-[#777]  flex-1  md:flex-auto md:w-[30%] p-5'>
                     <HiUserGroup size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins  '> Max People : 26</h6>
                  </li>
                  <li className='flex gap-1 justify-center items-center text-[#777] flex-1  md:flex-auto md:w-[30%] p-5'>
                     <AiFillCalendar size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins  '>Jan 18 - Dec 21</h6>
                  </li>
                  <li className='flex gap-1 justify-center items-center text-[#777] flex-1  md:flex-auto md:w-[30%]  p-5'>
                     <AiOutlineUser size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins  '>Min Age : 10+</h6>
                  </li>
                  <li className='flex gap-1 justify-center items-center text-[#777] flex-1  md:flex-auto md:w-[30%] p-5'>
                     <BiMapAlt size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins  '>Pickup : Airport</h6>
                  </li>
                  <li className='flex gap-1 justify-center items-center text-[#777] flex-1  md:flex-auto md:w-[30%] p-5'>
                     <AiFillFileText size={40}/>
                     <h6 className='text-sm md:text-lg font-Poppins  '>Langauge - English, Thai</h6>
                  </li>
            </ul>

        </div>
        <div className="container mx-auto  pt-12">
            <div className=" flex flex-col gap-4 md:flex-row  ">
              {/* left side  */}
              <div className=" bg-[#e6eef5]  rounded-lg md:rounded-t-lg p-4 ">
                <div className="flex flex-col pl-4">
                  <h6 className="text-2xl text-[#17233e] font-Poppins capitalize  my-3">
                    Price Includes
                  </h6>
                  <ul className="felx flex-col gap-5 text-[#777]">
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Air Fares
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> 3 Nights Hotel Accomodation
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Tour Guide
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Entrance Fees
                    </li>
                  </ul>
                </div>
              </div>
              {/* right side */}
              <div className=" bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
                <div className="flex flex-col pl-4">
                  <h6 className="text-2xl text-[#17233e] font-Poppins capitalize  my-3">
                    Departure & Return Location
                  </h6>
                  <ul className="felx flex-col gap-5 text-[#777]">
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Air Fares
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> 3 Nights Hotel
                      Accomodation
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Tour Guide
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Entrance Fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Highlifht