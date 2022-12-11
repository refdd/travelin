import React from "react";
import logoFooter from "../public/assets/images/logo-new (2)-svg (1) (1).png";
import bg from "../public/assets/images/background_patte.webp"
import Image from "next/image";
import Link from "next/link";

function ContectFooter() {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }}
    className=" container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-2 w-full pt-12 bg-no-repeat  ">
      <div className=" flex flex-col justify-center items-start pl-4 gap-4  col-auto	lg:col-span-4 ">
        {/* image */}
        <div className=" flex items-start justify-start h-auto">
          <Image
            src={logoFooter}
            width={300}
            height={100}
            alt="Logo"
            layout="intrinsic"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-white capitalize font-Poppins">
        Around Egypt Tours is a young innovative travel company yet matured and experienced. 
        Founded in 2010, Around Egypt Tours has made a considerable impact on the Egyptian 
        tourism sector by promoting Egypt as one of the fascinating destinations in the world.

        </p>
        
        
        <h6 className="text-xl text-white font-Poppins  ">
          {" "}
          <span className="font-bold font-Poppins "> An active member in:</span>{" "}
          <p className="text-sm">The Egyptian Travel Agent Association “ETAA”</p>
          <p className="text-sm"> The American Society of Travel Agents “ASTA”</p>
         <p className="text-sm">  International Association of Travel and Tourism “IATT”</p>
             <p className="text-sm"> The International Organization for E  - Tourism “ IOET”  </p>
      
                    
          </h6>
        <h6 className="text-xl text-white font-Poppins  ">
          {" "}
          <span className="font-bold font-Poppins "> Email:</span>{" "}
          Sales@nilecruisez.com
        </h6>
        
      </div>
      <div className="  flex flex-col  items-start pl-4 gap-4 col-auto lg:col-start-5 lg:col-end-7">
        <ul className="flex flex-col gap-4">
          <li>
            <h1 className="relative font-Poppins capitalize text-2xl text-white font-bold ">
              Quick Link
              <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
            </h1>
          </li>

        

          <li className="text-xl text-white font-Poppins transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/AboutUs"}>About Us</Link>
          </li>
          <li className="text-xl text-white font-Poppins transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/CountactUs"}>Contact Us</Link>
          </li>
          <li className="text-xl text-white font-Poppins transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
          </li>
          <li className="text-xl text-white font-Poppins transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/responsible-travel"}>Responsible Travel</Link>
          </li>
          <li className="text-xl text-white font-Poppins transition-all ease-in-out   hover:text-[#029e9d]">
            <Link href={"/Egypt"}>Egypt</Link>
          </li>
         


        </ul>
      </div>
      
      <div className=" flex flex-col items-start pl-4 gap-4 md:gap-8 col-auto	  lg:col-start-9 lg:col-end-13 ">
        <div>
          <h1 className="relative font-Poppins capitalize text-2xl text-white font-bold ">
            Newsletter
            <span className=" absolute bottom-[-5px] left-0 h-1 w-[80%] bg-white"></span>
          </h1>
        </div>
        <p className="text-lg font-Poppins text-white ">
        Jin our community of over 20,000 global readers who 
        receives emails filled with news, promotions, and other good stuff
        </p>
        <div className="flex w-full flex-col md:flex-row ">
       <input  className=" w-full h-12 py-3 px-4 mb-1 text-[#777]  rounded-l-2xl" placeholder="email Address" type="text" name="email"  />
       <div className="  group flex justify-center items-center  md:justify-start ">
              <button
                style={{ background: "#029e9d" }}
                className=" wrapper w-full ring-2 shadow-md ring-[#ffffff1a] ring-inset group-hover:text-white  px-5 py-3 rounded-r-2xl z-10 text-white overflow-hidden  "
              >
                <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                subscrbe
              </button>
            </div>
        </div>
      </div>
      {/* <div className=" w-full  bg-white  col-start-9 col-end-13  ">fsdfjdkjflksjfldjslkfjsdlk</div> */}
    </div>
  );
}

export default ContectFooter;
