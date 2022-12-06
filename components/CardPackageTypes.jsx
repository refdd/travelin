import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCalendar3, BsStarFill } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
function CardPackageTypes({packages}) {
  const { displayType  } = useStateContext() 
  const [ChooseType,setChooseType ] = useState(null)
  useEffect(() =>{
    
    const displayPackage = packages.filter(
      (item) => item.category_id == displayType
    );
    
    setChooseType(displayPackage)
  },[displayType])
  if(!packages){
  return <p> slkjfklsjdl</p>
  }
  return (
    <>
    {ChooseType && ChooseType.map((item , index )=>{
      return(
        <div key={item.id} className="wrapper h-full min-w-[350px] cursor-pointer  " >
           <Link href={`/tour/${item.slug}`}>
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
                width={400}
                height={300}
                layout={"intrinsic"}
                loading="lazy"
                className=" transition duration-200 ease-out  md:hover:scale-105"
              />
            </div>
            {/* layout */}
            <div className=" absolute top-0 left-0 bg-[#000000] opacity-[0.4] w-full h-full"></div>
            {/* days  */}
            <div className="absolute bottom-[-28px] right-3 flex justify-end">
              <div className=" flex justify-center gap-2 items-center bg-[#029e9d] p-3 px-9 rounded-xl">
                <BsCalendar3 size={20} color="#fff" />
                <span className="text-white font-sans font-medium text-center">
                  {item?.duration} Days
                </span>
              </div>
            </div>
          </div>
          {/* content  */}
          <div className="flex flex-col gap-3 border-b mx-4 mt-5">
          
           
            <h2 className="font-Poppins  text-[#212529] text-xl font-bold cursor-pointer ">
            {item.title}
            </h2>
            
            <div className="flex space-x-2 items-center  ">
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <BsStarFill color="#ffc107" />
              <span className="text-[#777]">(23)</span>
            </div>
            <p className="text-[#777] text-left leading-6 mb-3 ">
            {item.overview.substring(0 , 120 )} ...
            </p>
          </div>
          {/* price  */}
          <div className=" flex w-full mb-3 px-4">
            <p className="font-bold font-mono text-lg text-[#029e9d]">
             $ {item.start_price}
              <span className="font-thin text-sm text-[#777]">
                {" "}
                | Per Person{" "}
              </span>{" "}
            </p>
          </div>
          {/* border botton  */}
          <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d]"></div>
        </div>
        </Link>
      </div>
      )
    })}
    
    </>
  );
}

export default CardPackageTypes;
