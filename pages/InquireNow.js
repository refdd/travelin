import React, { useEffect, useState } from "react";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Head from "next/head";
import inQurey from "../public/assets/images/inQurey.webp"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { countary} from "../data/dammyData";
import axios from "axios";


function InquireNow() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [aduitsNumber, setAduitsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(null);
  const [value, setValue] = useState();
  const hanbleIncrement = (type) => {
    if (type == "aduits") {
      setAduitsNumber((curent) => curent + 1);
    }
    if (type == "children") {
      setChildrenNumber((curent) => curent + 1);
    }
  };
  const hanbleDesIncriment = (type) => {
    if (aduitsNumber >= 1 && type == "aduits") {
      setAduitsNumber((curent) => curent - 1);
    }

    if (childrenNumber >= 1 && type == "children") {
      setChildrenNumber((curent) => curent - 1);
    }
  };
  useEffect(() => {
    const pathname = window.location.pathname;
    setCurrentUrl(pathname);
  }, []);
  const [data, setData] = useState("");
  const onSubmit = (data) => {
    axios
      .post(
        "https://api.nilecruisez.com/api/inquiries",
        { ...data, adult: aduitsNumber, kid: childrenNumber, url: `https://www.nilecruisez.com${currentUrl}`, phone:value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
      router.push("/Thank_you");
  };
  return (
    <div>
      <Head>
        <meta
          name="description"
          content={
            "Are you planning to visit Egypt? We offer all that you need in Egypt, covering all cities and attractions, we will take care of all your needs. Inquire now!"
          }
        />
        <title>
          {
            " Egypt Trip Planning | Plan a Vacation to Egypt | Egypt Trip Planner"
          }{" "}
        </title>
      </Head>
      <NavBar />
      <HeaderParts bgtour={inQurey} typeList="Inquire Now" />
      <div className="container w-[95%] md:w-[70%] mx-auto pt-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#17233e] font-Poppins text-3xl capitalize text-center font-bold">
            Egypt Trip Planner
          </h1>
          <p className="text-[#777] text-lg font-Poppins capitalize text-center">
            Jot down your answers In the form below, describe your need and
            personal data, and one of our travel experts will plan your personal
            Egypt trip and get back to you In under 24 hours.
          </p>
        </div>
        {/* form inquire  */}
        <form
         onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 pt-9 ">
            {/* name and email */}
            <div className=" flex flex-col gap-4 md:flex-row  ">
              {/* input neme  */}
              <div className=" md:flex-1">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  focus:outline-none"
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* input Email */}
              <div className="md:flex-1">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  focus:outline-none"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* start date and end date */}
            <div className="flex gap-4 md:flex-row ">
              {/* input start date  */}
              <div className=" flex-1 ">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  start date
                </label>
                <input
                  type="date"
                  className=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="start"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  {...register("start_date", {
                    required: true,
                  })}
                />
                {errors.start_date && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* input end date  */}
              <div className=" flex-1 ">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  end date
                </label>

                <input
                  type="date"
                  className=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="Arrival"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  {...register("end_date", { required: true })}
                />
                {errors.end_date && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* nationailty and code  */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              {/* Selected Countery */}
              <div className=" md:w-2/4">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  Nationailty
                </label>

                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="nationality"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      placeholder={<div>Nationailty*</div>}
                      defaultValue={countary[0].label}
                      options={countary}
                      value={countary.find((c) => c.label === value)}
                      onChange={(val) => onChange(val.label)}
                    />
                  )}
                />
                {errors.nationality && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* Selected code  */}
              <div className="md:w-2/4">
                <label className="block mb-2 text-2xl font-medium text-[#777] capitalize ">
                  code Number
                </label>
                <div className="w-[100%]">
                    <PhoneInput
                   inputStyle={{
                    width:"100%"
                   }}
                   containerStyle={{
                    width:"100%"
                   }}
                   masks={{fr: '(...) ..-..-..', at: '(....) ...-....'}}
                      value={value}
                      country={'us'}
                      onChange={(phone, country) => {
                        const reducedPhone = phone.replace(
                          country.dialCode,'',);
                          setValue(country.dialCode + '-' + reducedPhone,);
                          }}
                    />
                  </div>
                {/* <Controller
                  control={control}
                  rules={{ required: true }}
                  name="code"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      placeholder={<div>Phone Country Code</div>}
                      defaultValue={options[0].value}
                      inputRef={ref}
                      classNamePrefix="addl-class"
                      options={options}
                      value={options.find((c) => c.value === value)}
                      onChange={(val) => onChange(val.value)}
                    />
                  )}
                />
                {errors.code && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )} */}
              </div>
                  {/* input what app number  */}
            {/* <div className="md:w-2/6">
              <label className="block mb-2 text-xl font-medium text-[#777] capitalize ">
              WhatsApp Number
              </label>

              <input
                type="number"
                className="
        form-control w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding 
         border border-solid border-gray-300  rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleEmail0"
                placeholder="whate app number * "
                {...register("whatsapp", { required: true })}
              />
              {errors.whatsapp && (
                <span className="text-sm  md:text-lg md:font-medium text-red-700">
                  This field is required
                </span>
              )}
            </div> */}
            </div>
        
            {/* counter */}
            <div className="flex  gap-4 flex-row">
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-xl text-[#777] mb-2 md:text-2xl font-medium w-24 md:w-auto ">
                  Adults(+12 years)
                </p>
                <div className="flex justify-center items-center border bg-white rounded-lg py-3 ">
                  <div
                    onClick={() => hanbleIncrement("aduits")}
                    className="w-3/6 bg-white cursor-pointer  flex justify-center items-center"
                  >
                    <AiOutlinePlus size={24} color="#777" />
                  </div>
                  <p className="w-3/6 text-center border-x  bg-white text-2xl text-[#777] ">
                    {aduitsNumber}
                  </p>
                  <div
                    onClick={() => hanbleDesIncriment("aduits")}
                    className="w-3/6 bg-white cursor-pointer  flex justify-center items-center  "
                  >
                    <AiOutlineMinus size={24} color="#777" />
                  </div>
                </div>
              </div>
              <div className=" flex-1 flex flex-col gap-2 ">
                <p className="text-xl text-[#777] mb-2 md:text-2xl font-medium">
                  children(-12 years)
                </p>
                <div className="flex justify-center items-center border bg-white rounded-lg py-3">
                  <div
                    onClick={() => hanbleIncrement("children")}
                    className="w-3/6 bg-white  cursor-pointer   flex justify-center items-center "
                  >
                    <AiOutlinePlus size={24} color="#777" />
                  </div>
                  <p className="w-3/6 text-center border-x  bg-white text-2xl text-[#777]  ">
                    {childrenNumber}
                  </p>
                  <div
                    onClick={() => hanbleDesIncriment("children")}
                    className="w-3/6 bg-white cursor-pointer  flex justify-center items-center  "
                  >
                    <AiOutlineMinus size={24} color="#777" />
                  </div>
                </div>
              </div>
            </div>

            {/* textarea massage */}
            <div className="flex flex-col ">
              <label className="block mb-2 text-2xl font-medium text-[#777] capitalize w-60 md:w-auto  ">
                your massage
              </label>

              <textarea
                id="message"
                {...register("comment", { required: true })}
                rows="4"
                className=" p-2.5 w-full text-sm text-[#777] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none "
                placeholder="Budget per person 
                 / Accommodation level (4* or 5* or Luxury) / 
                Children's ages if you have children /
                locations you want to visit or any specific needs"
              ></textarea>
               {errors.comment && (
                  <span className="text-sm  md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
            </div>
            {/* buttom supmit */}
            <div className="flex justify-center items-center ">
              <button className="w-[90%] bg-[#029e9d] text-white font-Poppins text-2xl rounded-lg py-2">
                Inquire now!
              </button>
            </div>
          </div>
        </form>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default InquireNow;
