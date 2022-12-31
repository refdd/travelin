import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import {useStateContext} from "../../contexts/ContextProvider"

function CardList({packages , valueState}) {
  const [gackageBeforeSort, setPackageBeforeSort ] = useState(null)
const {desplaygrid , setdesplauGrid} = useStateContext()
useEffect(()=>{
  if(!valueState){
    setPackageBeforeSort(packages)
   }
},[packages])
useEffect(()=>{
if(valueState == "price"){

  let pacdageSortBy = packages.sort((a , b) => a.price - b.price )
  setPackageBeforeSort(pacdageSortBy)
}

} , [  valueState  ])
const priceAndDiscount = (price , descount )=>{
  const TotalPrice = price - price * descount / 100 
  const total = TotalPrice.toFixed()
  return total
}
  return (
    <>
    {
      gackageBeforeSort && gackageBeforeSort.map((item) =>(
        <div key={item.id} className={desplaygrid ? "flex flex-col gap-2 w-[90%]  md:w-[45%]   bg-slate-100 p-5 rounded-xl mt-5 "
          :"flex flex-col md:flex-row gap-2  md:gap-4 justify-center md:justify-start items-center w-[92%] mx-auto md:w-[100%]   md:mx-4 bg-slate-100 p-5 rounded-xl mt-5  md:ml-9"
      }>
    {/* image */}
    <div className={desplaygrid ?"relative rounded-xl overflow-hidden w-full ":
      "relative rounded-xl overflow-hidden md:w-[30%] md:h-44  "
  }>
      <Image
       loader={() =>{
        return `${item.image}`;
      }
     }
       src={item.image }
       alt={item.meta_title} 
       width={400}
       height={300}
       layout={"intrinsic"}
       loading="lazy"
       objectFit="fill"
       className=" transition duration-200 ease-out  md:hover:scale-105  "
      />
      {/* layout */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000024]"></div>
    </div>
    {/* content */}
    <div className={desplaygrid ?" flex flex-col gap-2 justify-center   items-center  " :
      " flex flex-col md:flex-row gap-2 justify-center md:justify-start  items-center md:flex-1 "
  }>
      {/* right side */}
     <div className={desplaygrid ? "flex flex-col gap-2 justify-center items-center ":
        "flex flex-col gap-2 justify-center items-center md:justify md:items-start md:flex-1 " 
    }>
      <Link href={`/egypt-tours/${item.slug}`}>
      <h2 className="text-center md:text-left text-2xl capitalize font-Poppins cursor-pointer "> {item.title}</h2>
      </Link>
    <div className=" flex gap-3 flex-col md:flex-row items-center">
    <p className="text-[16px] text-center md:text-left text-[#777] font-Poppins "> {item.duration} Days {item.type} </p>
     <h4 className="text-[16px] text-center md:text-left text-[#777] font-Poppins capitalize "> cities : {item.destinations}</h4>
    </div>
        <p className="text-[#029e9d] text-center md:text-left text-[16px] font-Poppins "> {item.overview}</p>
     </div>
     {/* left side */}
    <div className={desplaygrid ? "flex flex-col gap-2 justify-center items-center md:flex-row md:flex-wrap ":
        "flex flex-col gap-2 justify-center items-center  md:justify-end md:items-end"
  }>
    <div className={desplaygrid ? "flex gap-2 w-full justify-center items-center md:justify-end md:w-[40%] " : "flex gap-1 w-full justify-center items-center md:justify-end "}>
        <AiFillStar size={16} color="#ffc107"/>
        <AiFillStar size={16} color="#ffc107"/>
        <AiFillStar size={16} color="#ffc107"/>
        <AiFillStar size={16} color="#ffc107"/>
        <AiFillStar size={16} color="#ffc107"/>
        </div>
        <p className="text-right text-lg text-[#777] font-Poppins " >({item.start_price - 10 }) review</p>
        <div className={desplaygrid ? "flex gap-3  md:flex-row" : "flex gap-3  md:flex-col"}>
        <span className="text-[#777] font-Poppins text-lg md:text-right  "> Start from</span>
        <h4 className="text-right font-mono font-bold text-[24px] "> $ {priceAndDiscount( item.start_price ,item.discount  )  }</h4>
        </div>
        <p className="text-right text-sm font-Poppins capitalize  text-[#029e9d]">Per Person</p>
        <Link href={`/egypt-tours/${item.slug}`}>
        <button className=" wrapper w-full md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  see more
                  </button>
        </Link>
    </div>
    </div>
   </div>
      ))
    }
   
    </>
  );
}

export default CardList;
