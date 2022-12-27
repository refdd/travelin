import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRouter } from 'next/router'
import {countary , CodeCountery } from "../../data/dammyData"
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";


const code = CodeCountery.map(item => {
return  { value: item.dial_code , label: ` ${item.code } _ ${item.dial_code }`}
})
function FormInquire({singletour}) {
  const [showform, setShowform] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);
  const [stopScroll, setStopScroll] = useState(-6095);
  const divfixrd = useRef();
  const {setFormDirction} = useStateContext()
  const router = useRouter()
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
  useEffect(() => {
  const pathname= window.location.pathname;
    const handleShadow = () => {
      if (!divfixrd.current) return;
      const { top, bottom } = divfixrd.current.getBoundingClientRect();
      setFormDirction(top)
      if (top <= 0) {
        setShowform(true);
      } else {
        setShowform(false);
      }
    };
   

    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);
useEffect(()=>{
  const pathname= window.location.pathname;
  setCurrentUrl(pathname)
},[])
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const [data, setData] = useState("");
  const onSubmit = data => {
   
    axios.post(
         'https://api.nilecruisez.com/api/inquiries',
         { ...data, adult: aduitsNumber, kid: childrenNumber , url:currentUrl },
         { headers: {
           'Content-Type': 'application/json',
           }}
      )
     .then(response => {console.log(response.data)})
     .catch(error => {console.log(error.data)});
 };


 if(data){
  router.push('/Test')
 }
//  onSubmit={handleSubmit((data) =>
//   setData({ ...data, aduies: aduitsNumber, cikdren: childrenNumber })
  
// )}

  return (
    <form
      id="InquireFrom"
      className="relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div ref={divfixrd}>
        <div className={showform ? ` md:fixed top-0` : " md:absolute md:top-20"}>
          <div className="w-full relative">
            <div className="mx-auto w-[90%] flex flex-col gap-3  rounded-xl overflow-hidden pb-4 border  ">
              {/* header */}
              <div className="w-full bg-[#029e9d] flex justify-center items-center py-5">
                <div className="text-2xl capitalize font-Poppins text-white ">
                  {singletour ? <p  className="capitalize  text-2xl  text-center  md:text-right text-white font-Poppins font-medium  " > from <span className= " font-bold   text-white"> $ {singletour.start_price  - singletour.start_price * singletour.discount / 100   } </span> </p> : "inquire Now"}
                      
                </div>
              </div>
              {/* input mail and name  */}
              <div className="w-[90%] mx-auto justify-center items-center flex flex-col md:flex-row gap-3 ">
                <input
                  type="email"
                  className="
        form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
         border border-solid border-gray-300  rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  {...register("email", { required: true })}
                  id="exampleEmail0"
                  placeholder="Email * "
                />
     {errors.email && <span className="text-lg font-medium text-red-700">This field is required</span>}

                <input
                  type="text"
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Name *"
                  {...register("name", { required: true })}
                />
                    {errors.name && <span className="text-lg font-medium text-red-700">This field is required</span>}

              </div>
              {/* input date */}
              <div className="w-full felx justify-center items-center gap-3">
                <div className="flex  justify-center items-center gap-5 w-[90%] mx-auto ">
                  <div className=" w-[50%]  flex flex-col gap-1 ">
                    <input
                      type="text"
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      placeholder="start"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      {...register("start_date", {
                        required: true,
                      })}
                    />
                                       {errors.start_date && <span className="  md:text-lg font-medium text-red-700">This field is required</span>}

                  </div>
                  <div className=" w-[50%]  flex flex-col gap-1 ">
                    <input
                      type="text"
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      placeholder="Arrival"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      {...register("end_date", { required: true })}
                    />
                           {errors.end_date && <span className="  md:text-lg font-medium text-red-700">This field is required</span>}

                  </div>
                </div>
              </div>
              {/* countery */}
              <div className="w-[90%] mx-auto">
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="nationality"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      placeholder={<div>Nationailty *</div>}
                      defaultValue={countary[0].label}
                      inputRef={ref}
                      classNamePrefix="addl-class"
                      options={countary}
                      value={countary.find((c) => c.label === value)}
                      onChange={(val) => onChange(val.label)}
                    />
                  )}
                />
                           {errors.nationality && <span className="  md:text-lg font-medium text-red-700">This field is required</span>}
 
              </div>
              {/* code and whats app  */}
              <div className="flex w-full justify-center items-center  ">
                <div className="flex justify-between w-[90%] mx-auto ">
                  <div className="w-[50%]">
                    <Controller
                      control={control}
                      rules={{ required: true }}
                      name="code"
                      render={({ field: { onChange, value, ref, } }) => (
                        <Select
                          placeholder={<div>code*</div>}
                          defaultValue={code[0].value}
                          inputRef={ref}
                          classNamePrefix="addl-class"
                          options={code}
                          value={code.find((c) => c.value === value)}
                          onChange={(val) => onChange(val.value)}
                        />
                      )}
                    />
                           {errors.code && <span className="  md:text-lg font-medium text-red-700">This field is required</span>}

                  </div>
                  <div className="w-[40%]">
                    <input
                      type="number"
                      className="
        form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
         border border-solid border-gray-300  rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                      id="exampleEmail0"
                      placeholder="whate app number * "
                      {...register("phone", { required: true })}
                    />
                       {errors.phone && <span className=" text-sm  md:text-lg font-medium text-red-700">This field is required</span>}

                  </div>
                </div>
              </div>
              {/* counter  */}
              <div className="flex  w-[90%] mx-auto gap-7 justify-center  ">
                <div className="w-[45%] flex flex-col gap-2">
                  <p className="text-sm text-[#777]">Adults(+12)</p>
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
                <div className="w-[45%] flex flex-col gap-2 ">
                  <p className="text-sm text-[#777]"> children(+12)</p>
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
              {/* textarea */}
              <div className="flex flex-col justify-center items-center">
                <textarea
                  id="message"
                  {...register("comment", { required: true })}
                  rows="4"
                  className=" p-2.5 w-[90%] text-sm text-[#777] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Your message..."
                ></textarea>
              </div>
              {/* botton supmit */}
              <div className="flex justify-center items-center ">
                <button className="w-[90%] bg-[#029e9d] text-white font-Poppins text-2xl rounded-lg py-2">
                  Inquire now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormInquire;
