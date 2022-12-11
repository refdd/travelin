import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Link from "next/link";
import CardPackageTypes from "../components/CardPackageTypes";
function PackageTyps({ Allpackage }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (direction == "right") {
        rowRef.current.style.paddingLeft = 0;
      }
      if (direction == "left") {
        rowRef.current.style.paddingLeft = `${25}px`;
      }
    }
  };

  return (
    <div className="h-full space-y-0.5 md:space-y-2 bg-[#e6eef5]  ">
      <div className="group  relative md:ml-2 ">
        <BsFillArrowLeftCircleFill
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
           cursor-pointer  transition hover:scale-125  ${
             !isMoved && " hidden"
           }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex  items-center gap-5 overflow-x-scroll scrollbar-hide sspace-x-2.5 pl-1"
        >
          <CardPackageTypes packagetype={Allpackage}  />
        </div>
        <BsFillArrowRightCircleFill
          className=" absolute top-0 bottom-0   right-2 z-40 m-auto h-9 w-9
            cursor-pointer  transition hover:scale-125 "
          onClick={() => handleClick("right")}
        />
      </div>
      <div className="  group w-full pt-10  md:pt-16 flex justify-center items-center  ">
        <Link href={`/Egypt/${""}`}>
          <button className=" wrapper w-[50%] md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
            <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PackageTyps;
