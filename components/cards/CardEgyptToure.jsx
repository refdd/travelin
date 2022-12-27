import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import {useStateContext} from "../../contexts/ContextProvider"

function CardEgyptToure({packages , valueState}) {
const {desplaygrid , setdesplauGrid} = useStateContext()
  return (
    <>
    {
      packages && packages.map((item) =>(
        <div key={item.id} className={ "flex flex-col gap-2 w-[90%]  md:w-[30%]   bg-slate-100 p-5 rounded-xl mt-5 "
      }>
    {/* image */}
    <div className={"relative rounded-xl overflow-hidden w-full "}>
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
    <div className={" flex flex-col gap-2 justify-center   items-center  " }>
      {/* right side */}
     <div className={"flex flex-col gap-2 justify-center items-center " }>
      <Link href={`/egypt-tours/${item.slug}`}>
        <a >
      <h2 className="text-center md:text-left text-2xl capitalize font-Poppins cursor-pointer "> {item.title}</h2>

        </a>
      </Link>
    <div className=" flex gap-3 flex-col md:flex-row items-center">
    <p className="text-[16px] text-center md:text-left text-[#777] font-Poppins "> {item.duration} Days {item.type} </p>
     <h4 className="text-[16px] text-center md:text-left text-[#777] font-Poppins capitalize "> cities : {item.destinations}</h4>
    </div>
        <p className="text-[#029e9d] text-center md:text-left text-[16px] font-Poppins "> {item.overview}</p>
     </div>
     {/* left side */}
    <div className={ "flex flex-col gap-2 justify-center items-center md:flex-row md:flex-wrap "
  }>
    <div className={ "flex gap-2 w-full justify-center items-center md:justify-end md:w-[40%] " }>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        <AiFillStar size={24} color="#ffc107"/>
        </div>
        <p className="text-right text-lg text-[#777] font-Poppins " >200 review</p>
        <div className={ "flex gap-3  md:flex-row" }>
        <span className="text-[#777] font-Poppins text-lg md:text-right  "> Start from</span>
        <h4 className="text-right font-mono font-bold text-xl"> $ {item. start_price}</h4>
        </div>
        <p className="text-right text-sm font-Poppins capitalize  text-[#029e9d]">Per Person</p>
        <Link href={`/egypt-tours/${item.slug}`}>
      <a>
      <button className=" wrapper w-full md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  see more
                  </button>
      </a>
        </Link>
    </div>
    </div>
   </div>
      ))
    }
   
    </>
  );
}

export default CardEgyptToure;
