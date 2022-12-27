
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCalendar3, BsStarFill } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import { PackageS } from "../data/dammyData";
function OfferPackageCard({tours}) {

  const { displayType  } = useStateContext() 
  const [ChooseType,setChooseType ] = useState(null)
  const [offer,setOffer ] = useState(null)
  useEffect(() =>{
    //  if(!descount) return
    const displayPackage = tours.filter((itme) => itme.discount !== 0 );
 
     const offerdiscount = (discounnt , price) =>{
       return  parseInt(price)  * discounnt +  parseInt(price)     
     }

    setChooseType(displayPackage)
    setOffer(offerdiscount)
  },[displayType])
  return (
    <>
    {ChooseType && ChooseType.map((item , index )=>{
      return(
        <div key={index} className="wrapper h-full min-w-[350px] cursor-pointer  ">
        <div className="relative flex flex-col gap-3  bg-[#fff] justify-center items-center rounded-xl overflow-hidden  ">
          {/* image and days  */}
          <div className=" relative w-full first-letter:first-line:flex flex-col justify-center items-center  ">
            <div className="relative  h-[300px]  cursor-pointer overflow-hidden">
              <Image
               loader={() =>{
                return `${item.image}`;
              }
             }
                src={item?.image}
                alt="Picture of the author"
                width={500}
                height={500}
                layout={"intrinsic"}
                loading="lazy"
                className=" transition duration-200 ease-out  md:hover:scale-105"
              />
            </div>
            {/* layout */}
            <div className=" absolute top-0 left-0 bg-[#000000] opacity-[0.4] w-full h-full ">
               
            </div>
            {/* layout offer */}
            <div className="  absolute top-[41px] rotate-[135deg] left-[-142px] w-full h-[54px] bg-[#ffc107] z-50  flex justify-center items-center  ">
            <span className=" test rotate-[180deg] text-2xl font-bold font-mono text-white">
                    {item.discount  }%
                </span>
            </div>
            {/* days  */}
            <div className="absolute bottom-[-28px] right-3 flex justify-end">
              <div className=" flex justify-center gap-2 items-center bg-[#029e9d] p-3  px-9 rounded-xl">
                <BsCalendar3 size={20} color="#fff" />
                <span className="  text-white font-sans font-medium text-center">
                  {item?.duration} Days
                </span>
              </div>
            </div>
          </div>
          {/* content  */}
          <div className="flex flex-col gap-3 border-b mx-4 mt-5">
          <Link href={`/egypt-tours/${item.slug}`}>
          <a>
            
          <h2 className="font-Poppins my-2 text-[#212529] text-2xl font-bold">
            {item.title}
            </h2>
          </a>
            </Link>
            <div className="flex space-x-2 items-center  ">
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <span className="text-[#777]">(23)</span>
            </div>
            <p className="text-[#777] text-left leading-6 mb-3 ">
            {item.overview}
            </p>
          </div>
          {/* price  */}
          <div className=" flex w-full gap-[191px]  mb-3 px-4 ">
          
               <p className=" relative font-bold font-mono text-lg text-[#777] text-center w-10">
              {item.start_price}  
                <span className=" absolute w-full h-[3px] bg-red-500 top-[50%]  left-0   " ></span>
               </p>
                 <p className="font-bold font-mono text-lg text-[#029e9d]">
             ${    item.start_price  - item.start_price * item.discount / 100   }
              <span className="font-thin text-sm text-[#777]">
                {" "}
                | Per Person{" "}
              </span>{" "}
            </p>
          </div>
          {/* border botton  */}
          <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d]">
          </div>
        </div>
      </div>
      )
    })}
    
    </>
  );
}

export default OfferPackageCard;
