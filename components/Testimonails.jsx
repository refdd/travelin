import React, { useState } from "react";
import Image from "next/image";
import HeaderSection from "./helper/HeaderSection";
import testimonialImage from "../public/assets/images/travel2.png"
import bg from "../public/assets/images/testimonial.png";
import { AiOutlineRight ,AiOutlineLeft } from "react-icons/ai"
import {FaQuoteRight } from "react-icons/fa"
 import {testimonialsData} from "../data/dammyData"
import Link from "next/link";
function Testimonails() {
  const [selected, setSelected] = useState(0); 
  const [animation, setAnimation] = useState(false); 
  const Tlenght = testimonialsData.length;
 
const handelLeftArrow=()=>{
  selected === 0 ?setSelected(Tlenght -1 ) :setSelected((prev) => prev - 1)
}
const handelRightArrow=()=>{
  selected === Tlenght - 1 ?setSelected(0) :setSelected((prev) => prev + 1)
}
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className="py-16 bg-[#e6eef5]  ">
      <HeaderSection
        titel={"Our Testimonails "}
        partOne={"Good Reviews By"}
        partTwo={"Clients"}
        decs={
          "Around Egypt Tours rated 'excellent' by hundreds of travelers on TripAdvisor."
        }
      />
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 py-10 ">
        {/* testimonailis  */}
        <div className="flex flex-col gap-2 justify-center items-center w-full md:w-2/5 ">
          <div className="flex flex-col  justify-center items-center">
            <Image
              src={testimonialsData[selected].image}
              alt="Picture of the author"
              width={100}
              height={100}
              className={"rounded-full "}
            />
            <h1 className=" text-xl font-bold font-serif text-[#029e9d] mt-4">{testimonialsData[selected].name}</h1>
            <h1 className="text-[#777]">{testimonialsData[selected].status}</h1>
          </div>

          {/* content  */}
          <div className="py-4 mx-2">
            <div className="  ml-7  text-xl font-serif flex  gap-1  text-[#777] capitalize ">
               <FaQuoteRight size={60} className='mt-[-10px]'  color="#029e9d"/> <p  className=" ">{testimonialsData[selected].review}</p>
            </div>
          </div>
      
        {/* bottons */}
        <div className="flex gap-3 justify-center items-center ">
          <button  onClick={handelLeftArrow} className=" p-4 bg-[#029e9d] rounded-full transition-all hover:scale-90"><AiOutlineLeft size={29} color="#fff" /> </button>
          <button onClick={handelRightArrow} className=" p-4 bg-[#029e9d] rounded-full transition-all hover:scale-90"> <AiOutlineRight size={29} color="#fff" /> </button>
        </div>
        </div>
        {/* image section  */}
        <div className="py-7 cursor-pointer">
          <Link href={'https://www.tripadvisor.com/Attraction_Review-g294201-d17463448-Reviews-Around_Egypt_Tours_Egypt_Packages-Cairo_Cairo_Governorate.html'}>
          <a target="_blank">
          <Image
          src={testimonialImage}
          width={500}
          height={500}
          layout={"intrinsic"}
          />
          </a>
          </Link>
         </div>
      </div>
    </div>
  );
}

export default Testimonails;
