import React, { useState } from "react";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import {FaCheckCircle} from "react-icons/fa"
function Test() {
  return (
    <div>
      <NavBar />
      <HeaderParts typeList={"Thank you"} />
       <div className="flex justify-center items-center py-8"> 
         <FaCheckCircle size={50} color="#029e9d"/>
       </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#17233e] font-Poppins text-3xl md:text-5xl capitalize text-center font-bold">
          Thank you
        </h1>
        <p className="text-[#777] text-lg font-Poppins capitalize text-center">
        We received your Inquiry and will contact you shortly on your email (mohamed@gmail.com). If you didn't receive a replay withing the next 24H please check your spam, Junk.
        </p>
      </div>
      
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default Test;
