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
import Head from "next/head";

function CountactUs() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const [data, setData] = useState("");
  return (
    <div>
        <Head>
        <meta
          name="description"
          content={"Contact us now. All you have to do is fill the below form and tell us what your dream   "}
        />
        <title>Contact us | nilecruisez.com </title>
      </Head>
      <NavBar />
      <HeaderParts typeList={"contact us"} />
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[#17233e] font-Poppins text-3xl capitalize text-center font-bold">
          INFORMATION ABOUT US
        </h1>
        <p className="text-[#777] text-lg font-Poppins capitalize text-center">
        Around Egypt Tours Is A Young Innovative Travel Company Yet Matured And Experienced. Founded In 2005, Around Egypt Tours Has Made A Considerable Impact On The Egyptian Tourism Sector By Promoting Egypt As One Of The Fascinating Destinations In The World.
        </p>
      </div>
      {/* contact info  */}
      <div className="container mx-auto pt-7">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col  gap-4 justify-center items-center border p-3 rounded-lg md:flex-1 ">
            <CiLocationOn size={100} color="#029e9d" />
            <h2 className="text-xl font-Poppins text-[#17233e] capitalize font-semibold">
              {" "}
              Office Location
            </h2>
            <p className="text-center text-[#777] font-Poppins capitalize leading-7">
            39 Zohair Sabry St., Branched from, El Tayaran St, Nasr City, Cairo Governorate 11765
            </p>
          </div>
          <div className="flex flex-col  gap-4 justify-center items-center border p-3 rounded-lg md:flex-1">
            <BiPhone size={100} color="#029e9d" />
            <h2 className="text-xl font-Poppins text-[#17233e] capitalize font-semibold">
              Phone Number
            </h2>
            <div>
              <p className="text-center text-[#777] font-mono capitalize leading-7">
                {" "}
                +20127 770 8751{" "}
              </p>
            
            </div>
          </div>
          <div className="flex flex-col  gap-4 justify-center items-center border p-3 rounded-lg md:flex-1">
            <BiEnvelope size={100} color="#029e9d" />
            <h2 className="text-xl font-Poppins text-[#17233e] capitalize font-semibold">
              {" "}
              Email Address
            </h2>
            <div>
              <p className="text-center text-[#777] font-mono capitalize leading-7">
                {" "}
                sales@aroundegypttours.com 
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* form and img  */}
      <div className="container mx-auto pt-7 ">
        <div className="flex flex-col gap-3 md:flex-row ">
          {/* image */}
          <div>
            <Image
              src={imagecontactUs}
              width={500}
              height={500}
              layout="intrinsic"
              alt="contact us"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          {/* form */}
          <form className="md:flex-1"
          onSubmit={handleSubmit((data) => setData(data))}
          >
            <div className="flex flex-col gap-4  md:flex-row md:flex-wrap ">
              <div className=" md:w-[45%]">
               
                <input
                  type="text"
              {...register("first_name", { required: true })}
                 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 focus:outline-none "
                  placeholder="First Name"
                />
                  {errors.first_name && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
              </div>
              <div className=" md:w-[45%]">
               
                <input
                  type="text"
              {...register("last_name", { required: true })}
                 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 focus:outline-none "
                  placeholder="last Name"
                  
                />
                 {errors.last_name && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
              </div>
              <div className=" md:w-[45%]">
               
                <input
                  type="email"
              {...register("email", { required: true })}
                 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  focus:outline-none"
                  placeholder="Email"
                  
                />
                 {errors.email && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
              </div>
              <div className=" md:w-[45%]">
               
                <input
                  type="number"
              {...register("phone", { required: true })}
                 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 focus:outline-none "
                  placeholder="Phone"
                  
                />
                {errors.phone && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
              </div>
              <div className=" md:w-[92%]">
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Your message..."
            ></textarea>
          </div>
           {/* buttom */}
           <div className="  group w-[74%] pt-6 flex justify-start items-center  ">
            <button className=" wrapper  md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
              <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
              Send Message
            </button>
          </div>
            </div>
          </form>
        </div>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default CountactUs;
