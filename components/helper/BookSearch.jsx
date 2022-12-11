import React ,{useId, useState} from "react";
import { useForm , Controller } from "react-hook-form"
import Select from 'react-select'
import { useStateContext } from "../../contexts/ContextProvider";

function BookSearch() {
  const {setopenSearch} = useStateContext()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
    const [data , setData] = useState("") ;
    const options = [
      { value: 'Cruise', label: 'Nile Cruise' },
      { value: 'Travel ', label: 'Travel Package' },
     
    ]
     
  
  return (
    <form onSubmit={handleSubmit((data)  => {
      setData( JSON.stringify(data))
        setopenSearch(true)
    }) }
     className="flex flex-col gap-4 w-full h-full md:gap-6  ">
      <div>
        
        <input
        {...register("place", { required: true })}
          type="text"
          id="first_name"
          className=" font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Type your Search Quary"
        />
     {errors.place && <span className="text-lg font-medium text-red-700">This field is required</span>}

      </div>
      {/* Travael type  */}

      <div>

        <Controller
        control={control}
        name="type"  
        render={({ field: { onChange, value, ref }}) => (
          <Select
          placeholder={<div>Tour type</div>}
          inputRef={ref}
          classNamePrefix="addl-class"
          options={options}
          value={options.find(c => c.value === value)}
          onChange={val => onChange(val.value)}
          />
      )}
      
        />
     {errors.type && <span className="text-lg font-medium text-red-700">This field is required</span>}

      </div>
      {/* tour Duration  */}
   
      <div>
      <button type="submit" className=" w-full text-white bg-[#029e9d] hover:bg-gradient-to-r transition duration-700 hover:from-[#fdc703] hover:to-[#fdc703] hover:bg-right focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5">Search</button>

      </div>
    </form>
  );
}

export default BookSearch;
