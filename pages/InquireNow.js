import React, { useState } from "react";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const options = [
  { value: "Egypt", label: "Egypt" },
  { value: "cairo ", label: "cairo" },
  { value: "prise ", label: "prise" },
  { value: "banha ", label: "banha" },
];
function InquireNow() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [aduitsNumber, setAduitsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
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
  const [startDate, setStartDate] = useState(new Date());

  const [data, setData] = useState("");
 
  return (
    <div>
      <NavBar />
      <HeaderParts typeList="Inquire Now" />
      <div className="container w-[70%] mx-auto pt-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#17233e] font-serif text-3xl capitalize text-center font-bold">
            Plan Your Next Trip!
          </h1>
          <p className="text-[#777] text-lg font-serif capitalize text-center">
            Jot down your answers in the form below, and one of our travel
            experts will get back to you in under 24 hours.
          </p>
        </div>
        {/* form inquire  */}
        <form
          onSubmit={handleSubmit((data) =>
            setData({ ...data, aduies: aduitsNumber, cikdren: childrenNumber })
            
          )}
        >
          <div className="flex flex-col gap-4 pt-9 ">
            {/* name and email */}
        <div className=" flex flex-col gap-4 md:flex-row  ">
                {/* input neme  */}
                <div className=" md:flex-1">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">neme</label>

              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  focus:outline-none"
                placeholder="full neme"
                {...register("Name", { required: true })}
              />
                {errors.Name && <span className="text-sm md:text-lg md:font-medium text-red-700 ">This field is required</span>}

            </div>
            {/* input Email */}
            <div className="md:flex-1">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">Email</label>

              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  focus:outline-none"
                placeholder="Your Email"
                {...register("Email", { required: true })}

              />
                {errors.Email && <span className="text-sm  md:text-lg md:font-medium text-red-700 ">This field is required</span>}

            </div>
        </div>
          {/* start date and end date */}
          <div className="flex flex-col gap-4 md:flex-row ">
              {/* input start date  */}
              <div className=" md:flex-1 ">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">start date</label>
              <input
                type="text"
                className=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder="start"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                {...register("startdate", {
                     required: true ,
                })}
              />
        {errors.startdate && <span className="text-sm  md:text-lg md:font-medium text-red-700 ">This field is required</span>}

            </div>
            {/* input end date  */}
            <div className=" md:flex-1 ">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">end date</label>

              <input
                type="text"
                className=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder="Arrival"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                {...register("endDate", { required: true })}
              />
                    {errors.endDate && <span className="text-sm  md:text-lg md:font-medium text-red-700 ">This field is required</span>}

            </div>
          </div>
           {/* nationailty and code  */}
           <div className="flex flex-col gap-4 md:flex-row ">
             {/* Selected Countery */}
             <div className=" md:flex-1">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">Nationailty</label>

              <Controller
                control={control}
                rules={{ required: true }}
                name="Nationailty"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    placeholder={<div>Nationailty*</div>}
                    defaultValue={options[0].value}
                    options={options}
                    value={options.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                  />
                )}
              />
         {errors.Nationailty && <span className="text-sm  md:text-lg md:font-medium text-red-700 ">This field is required</span>}

            </div>
            {/* Selected code  */}
            <div className="md:flex-1">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">code</label>

              <Controller
                control={control}
                rules={{ required: true }}
                name="code"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    placeholder={<div>code*</div>}
                    defaultValue={options[0].value}
                    inputRef={ref}
                    classNamePrefix="addl-class"
                    options={options}
                    value={options.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                  />
                )}
              />
         {errors.code && <span className="text-sm  md:text-lg md:font-medium text-red-700 ">This field is required</span>}
            </div>
           </div>
            {/* input what app number  */}
            <div className="">
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">whate app number</label>

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
              {errors.whatsapp && <span className="text-sm  md:text-lg md:font-medium text-red-700">This field is required</span>}
            </div>
            {/* counter */}
           <div className="flex flex-col gap-4 md:flex-row">
           <div className="md:flex-1 flex flex-col gap-2">
                  <h1 className="text-sm text-[#777] mb-2 md:text-2xl font-medium ">Adults(+12 years)</h1>
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
                <div className=" md:flex-1 flex flex-col gap-2 ">
                  <h1 className="text-sm text-[#777] mb-2 md:text-2xl font-medium"> children(-12 years)</h1>
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
            <label  className="block mb-2 text-2xl font-medium text-[#777] ">your massage</label>

                <textarea
                  id="message"
                  {...register("desc", { required: true })}
                  rows="4"
                  className=" p-2.5 w-full text-sm text-[#777] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none "
                  placeholder="Your message..."
                ></textarea>
              </div>
              {/* buttom supmit */}
              <div className="flex justify-center items-center ">
                <button className="w-[90%] bg-[#029e9d] text-white font-serif text-2xl rounded-lg py-2">
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
