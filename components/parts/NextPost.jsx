import Image from "next/image";
import React from "react";

function NextPost({ allposts }) {
  return (
    <div className="container mx-auto pt-7 ">
           <div className="flex gap-1">
        <button
          className={ "flex-1 border rounded-lg text-xl font-Poppins font-bold bg-[#029e9d]  text-white   py-3" }
        >
         Read Next Post
        </button>
      </div>
   <div className="flex flex-col md:flex-row gap-2">
   {allposts.slice(0, 2).map((item) => (
        <div
          key={item.id}
          className="flex gap-3 justify-center items-center border-b mt-5 flex-1 pb-3"
        >
         
          <div className=" w-[40%] mx-auto  h-48 md:h-[200px] relative bg-white rounded-t-lg">
            <Image
              loader={() => {
                return `${item.image}`;
              }}
              src={item.image}
              alt={item.meta_title}
              layout={"fill"}
              loading={"lazy"}
              className={"rounded-lg  "}
            />
          </div>
          <div className="flex flex-col gap-1 w-[50%]">
            <h4 className="text-[16px] text-[#17233e] font-Poppins font-bold ">
              {item.title}
            </h4>
            <span className="text-[#777] font-mono text-[14px]">
              {item.meta_description.replace(/<[^>]*>?/gm, '').substring(0 , 70 )}
            </span>
          </div>
        </div>
      ))}
   </div>
    </div>
  );
}

export default NextPost;
