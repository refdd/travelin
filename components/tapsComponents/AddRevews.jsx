import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function AddRevews() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="container mx-auto pt-10">
      <h4 className="text-2xl text-[#17233e] font-Poppins capitalize font-bold py-4 ">
        Write A Review
      </h4>
      <form onSubmit={handleSubmit((data) => setData(data))}>
        <div className="flex flex-col gap-4 md:flex-wrap md:flex-row">
          <div className=" md:w-[47%]">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 focus:outline-none"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
            {errors.Name && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="md:w-[47%]">
            <input
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 focus:outline-none"
              placeholder="email"
              {...register("Email", { required: true })}
            />
            {errors.Email && (
              <span className="text-xl text-red-700">
                This field is required
              </span>
            )}
          </div>
          {/* text area */}
          <div className=" md:w-full">
            <textarea
              {...register("comment", { required: true })}
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
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRevews;
