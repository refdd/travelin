// import React from 'react'

// function Test() {
//   return (
//     <div>done</div>
//   )
// }

// export default Test
import Image from "next/image";
import React, { useState } from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import HeaderDestination from "../components/headers/HeaderDestination";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import imagecontactUs from "../public/assets/images/travel.png";
import { useForm, Controller } from "react-hook-form";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";

function Test() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const [data, setData] = useState("");
      console.log(data);
  return (
    <div>
      <NavBar />
      <HeaderParts typeList={"Thank you"} />
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#17233e] font-Poppins text-3xl capitalize text-center font-bold">
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
