import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
import Loding from "./Loding";
function BoxSearch() {
  const { setopenSearch, dataSearch } = useStateContext();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  {
    "Cairo", 1;
  }
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nilecruisez.com/api/tours?search=${dataSearch.place}&type_id=${dataSearch.type}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <Loding />;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000052] z-[1000]">
      <div className=" w-[90%] h-[80%] overflow-y-auto mx-auto bg-slate-200 p-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <div
          className="absolute top-[11px] right-[18px] transform flex justify-end  cursor-pointer "
          onClick={() => setopenSearch(false)}
        >
          <AiFillCloseCircle size={30} color="#029e9d" />
        </div>
        <h1 className="text-gray-900 text-lg text-center font-Poppins font-semibold capitalize">
          your results
        </h1>
        {/* recults container */}
        <div className="flex flex-col gap-3 pt-4">
          {/* results */} 
          
           { data.data.length == 0 ?  <p className="text-center text-xl font-Poppins capitalize font-bold">  no tour her please search  again   </p>     : data.data.map((item) => {
            
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-xl shadow-lg px-3 py-2 border "
              >
                <Link href={`/egypt-tours/${item.slug}`}>
                <p className="text-lg text-[#029e9d] cursor-pointer font-Poppins capitalize whitespace-pre-wrap ">
                 {item.title}
                </p>
                </Link>
                <div className="flex gap-6 items-center md:justify-between">
                  <p className="text-[#777] text-left text-sm font-Poppins capitalize">
                  {item.description.replace(/<[^>]*>?/gm, '').substring(0 , 100 )}
                  </p>
                  <p className="text-yellow-500  text-right text-lg  font-bold font-Poppins capitalize">
                   $ {item.start_price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BoxSearch;
