import React, { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

function TabsTours() {
  const { handleClick, setIsClicked, isClicked } = useStateContext();
  useEffect(()=>{
    setIsClicked({Highlight:true})
    },[])
  return (
    <div className="pt-11 container mx-auto">
      <ul className=" flex flex-wrap justify-center items-center gap-1s md:gap-4 shadow-lg py-6 rounded-lg ">
        <li  className={
            isClicked.Highlight
              ? " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  bg-[#029e9d]  rounded-xl flex-1 text-white"
              : " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  rounded-xl flex-1 text-[#777]"
          }>
          <button
            onClick={() => handleClick("Highlight")}
            className="text-xl font-Poppins text-center capitalize "
          >
            Highlight
          </button>
        </li>
        <li
          className={
            isClicked.Iternary
              ? " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  bg-[#029e9d]  rounded-xl flex-1 text-white"
              : " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  rounded-xl flex-1 text-[#777]"
          }
        >
          <button
            onClick={() => handleClick("Iternary")}
            className="text-xl font-Poppins  text-center capitalize "
          >
            Iternary
          </button>
        </li>
        <li
          className={
            isClicked.Prices
              ? " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  bg-[#029e9d]  rounded-xl flex-1 text-white"
              : " px-1 md:px-5 py-1 flex justify-center items-center  md:py-4  rounded-xl flex-1 text-[#777]"
          }
        >
          <button
            onClick={() => handleClick("Prices")}
            className="text-xl font-Poppins  text-center capitalize "
          >
            prices
          </button>
        </li>
       
      </ul>
    </div>
  );
}

export default TabsTours;
