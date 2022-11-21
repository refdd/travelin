import React from "react";
import Image from "next/image";
import instgramImage from "../../public/assets/images/ins-2.jpg";
import {BsInstagram} from "react-icons/bs"
function Test() {
  return (
    <div className=" relative container max-w-[1400px]  ">
      <ul className="flex overflow-x-scroll snap-mandatory scrollbar-hide ">
        <li className=" card gap-3 rounded-2xl overflow-hidden ">
          <div className="w-full bg-contain ">
            <Image
              src={instgramImage}
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
              src={instgramImage}
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
              src={instgramImage}
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
              src={instgramImage}
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
              src={instgramImage}
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
              src={instgramImage}
              width={100}
              height={100}
              layout={"intrinsic"}
              loading="lazy"
            />
          </div>
        </li>
      </ul>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
      <div className=" flex justify-center items-center w-full h-full absolute top-0 left-0 cursor-pointer">
        <div className=" flex  bg-white px-9 py-4 rounded-xl w-auto ring-2  ">
        <span> <BsInstagram size={24} color='#1a1a1a'/> </span>
          <h2 className="text-[#1a1a1a]">follow on instagram</h2>
         
        </div>
      </div>
      </a>
    </div>
  );
}

export default Test;
