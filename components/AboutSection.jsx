import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import HeaderSection from "./helper/HeaderSection";
import aboutImage from "../public/assets/images/travel.png"
import Image from "next/image";
import CounterSection from "./helper/CounterSection";
function AboutSection() {
  return (
    <div className="pt-10 container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        {/* content */}
        <div className="flex flex-col gap-3 md:w-2/4 ">
          <HeaderSection
            titel="Get To Know Us"
            partOne="Explore All Tour Of"
            partTwo="The World With Us."
          />
          <div className="flex flex-col justify-center items-center gap-4 border-y py-3">
            <p className="text-[#777] text-lg leading-7  font-serif capitalize text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[#777] text-lg font-serif capitalize text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          <div className='w-full h-full '>
              <ul className='flex flex-wrap gap-2 justify-center items-center mt-5'> 
                <li className='flex gap-1 items-center text-[#777]'> 
                  <CiLocationOn color='#029e9d'/>
                  Tour Guide 
                </li>
                <li className='flex gap-1 items-center text-[#777] '>
                 <AiOutlineDollarCircle color='#029e9d' />
                 Budget prices
                </li>
                <li className='flex gap-1 items-center  text-[#777] '>
                  <BsFolderCheck color='#029e9d'/>
                  Reliable Tour Package
                </li>
              </ul>
            </div>
        </div>
        {/* image */}
        <div className="py-7 cursor-pointer md:w-2/4">
          <Image
          src={aboutImage}
          width={500}
          height={500}
          layout={"intrinsic"}
          />
         
         </div>
         
      </div>
      <CounterSection/>
    </div>
  );
}

export default AboutSection;
