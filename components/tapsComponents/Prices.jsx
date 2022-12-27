import Image from "next/image";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import NotsPriceSection from "./NotsPriceSection";
function Prices({notsPrise , template_prices}) {

 

  return (
    <div className="container mx-auto pt-5 ">
      {template_prices.map(item => (
 <div  key={item.id} className="flex flex-col gap-3 shadow-md p-3 rounded-lg mt-4">
  <h3 className="text-center text-xl text-gray-900 font-Poppins capitalize my-3 font-semibold md:text-left"> {item.title}</h3>
 {/* hotels  */}

 <div className=" flex flex-col md:flex-row md:flex-wrap  gap-3  ">
   <div className=" text-[#029e9d]  border-b md:border-b-0 md:border-r md:p-3">
     <FaHotel size={70} />
     <h2 className="text-[#17233e] text-2xl font-Poppins capitalize font-bold my-2">
       hotels
     </h2>
   </div>
   {item.hotels.map(hotel => (
 <div key={hotel.id} className="flex flex-col gap-3 md:w-[25%]  md:border-r md:pr-3">
 <div className="rounded-md overflow-hidden object-contain">
   <Image
    loader={() =>{
      return `${hotel.image}`;
    }
   }
   
     src={hotel.image }
     alt="Hotels"
     width={500}
     height={300}
     loading="lazy"
     layout="intrinsic"
   />
 </div>
 <p className="text-lg text-[#17233e] font-Poppins capitalize my-2">
  {hotel.title}
 </p>
 <div className="flex gap-2">
  {
    
  }
    {Array(hotel.stars).fill(<AiFillStar  size={24} color="#ffbc00" /> ).map(item =>{
      return item
    }) }

  {/* <BiStar  size={24} color="#ffbc00" />  */}
 </div>
</div>
))}
  
 
 </div>
 {/* prise */}
 <div className="flex flex-col gap-3  ">
   <div className=" text-[#029e9d]  border-b">
     <BiDollarCircle size={70} />
     <h2 className="text-[#17233e] text-2xl font-Poppins capitalize font-bold my-2">
       prices
     </h2>
   </div>

   <div className=" flex flex-col gap-5 md:flex-row md:py-4 md:gap-7 ">
    {item.price_types.map(prise =>(
  <div key={prise.id} className="flex flex-col  gap-2 md:flex-1  ">
  <h4 className="text-[#17233e] text-xl font-bold font-Poppins capitalize ">{prise.title}</h4>
  <p  className={ prise.triple ? "text-[#777] font-Poppins capitalize text-lg" :" hidden text-[#777] font-Poppins capitalize text-lg"}>
    <span  className="font-mono text-[#029e9d]" >
       $ {prise.triple}</span> Per Person in Triple Room
  </p>
  <p  className={ prise.double ? "text-[#777] font-Poppins capitalize text-lg" :" hidden text-[#777] font-Poppins capitalize text-lg"}>
    <span  className="font-mono text-[#029e9d]">$ {prise.double}</span> Per Person in Double Room
  </p>
  <p  className={ prise.single ? "text-[#777] font-Poppins capitalize text-lg" :" hidden text-[#777] font-Poppins capitalize text-lg"}>
    <span className="font-mono text-[#029e9d]">$ {prise.single}</span> One Person Traveling Alone
  </p>
</div>
    ) )  }
   
   </div>
 </div>
</div>
      ))}
     
      <NotsPriceSection notsPrise={notsPrise}/>
    </div>
  );
}

export default Prices;
