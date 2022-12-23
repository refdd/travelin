import React from "react";
import Image from "next/image";
import instgramImage1 from "../../public/assets/images/Nile Cruises  7.webp";
import instgramImage2 from "../../public/assets/images/Nile Cruises 6.webp";
import instgramImage3 from "../../public/assets/images/Nile Cruises 5.webp";
import instgramImage4 from "../../public/assets/images/Nile Cruises 4.webp";
import instgramImage5 from "../../public/assets/images/Nile Cruises 3.webp";
import instgramImage6 from "../../public/assets/images/Nile Cruises 2.webp";
import instgramImage7 from "../../public/assets/images/Nile Cruises 1 .webp";
import instgramImage8 from "../../public/assets/images/Nile Cruises 8.webp";

import {BsInstagram} from "react-icons/bs"
function Test() {
  return (
    <div className=" relative container max-w-[1400px]  ">
      <ul className="flex overflow-x-scroll snap-mandatory scrollbar-hide ">
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage1}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
              alt="Instagram"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage2}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage3}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage4}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage5}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage6}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage7}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage8}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
      </ul>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/aroundegypttours/">
      <div className=" flex justify-center items-center w-full h-full absolute top-0 left-0 cursor-pointer">
        <div className=" flex  gap-2 bg-white px-9 py-4 rounded-xl w-auto ring-2  ">
        <span> <BsInstagram size={24} color='#1a1a1a'/> </span>
          <h2 className="text-[#1a1a1a]">follow on instagram</h2>
         
        </div>
      </div>
      </a>
    </div>
  );
}

export default Test;
