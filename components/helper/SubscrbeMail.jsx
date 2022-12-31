import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm, Controller } from "react-hook-form";

function SubscrbeMail() {
  const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        axios
          .post(
            "https://api.nilecruisez.com/api/mails",
           data,
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
<form
  onSubmit={handleSubmit(onSubmit)}
>
<div className="flex w-full flex-col md:flex-row ">
       <input 
        {...register("email", { required: true })}
       className=" w-full h-12 py-3 px-4 mb-1 md:mb-0 text-[#777] rounded-xl md:rounded-tr-none  md:rounded-br-none " placeholder="email Address" type="text" name="email"  />
       
       <div className="  group flex justify-center items-center  md:justify-start ">
              <button
                style={{ background: "#029e9d" }}
                className=" wrapper w-full ring-2 shadow-md ring-[#ffffff1a] ring-inset group-hover:text-white  px-5 py-3 rounded-xl  md:rounded-tl-none  md:rounded-bl-none z-10 text-white overflow-hidden  "
              >
                <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                subscrbe
              </button>
            </div>
        </div>
        {errors.email && (
                  <span className="text-sm md:text-lg md:font-medium text-red-700 ">
                    This field is required
                  </span>
                )}
</form>
  )
}

export default SubscrbeMail