import Image from "next/image";
import Link from "next/link";
import React, { lazy, useEffect, useState } from "react";
import { BsCalendar3, BsStarFill } from "react-icons/bs";
import { blogsData } from "../data/dammyData";
function BlogCard({blogsList}) {
  const [blags,setBlogs ] = useState(null)
 
  return (
    <>
    {blogsList && blogsList.map((item , index )=>{
      return(
        <div key={index} className="wrapper h-full min-w-[350px]  md:min-w-0 md:w-[30%] cursor-pointer  py-4 ">
        <div className="relative flex flex-col gap-3  bg-[#fff] justify-center items-center rounded-xl overflow-hidden  ">
          {/* image and days  */}
          <div className=" relative w-full first-letter:first-line:flex flex-col justify-center items-center  ">
            <div className="relative  h-[300px]  cursor-pointer overflow-hidden">
              <Image
               loader={() =>{
                return `${item.image}`;
              }
             }
                src={item.image}
                alt="Picture of the author"
                width={500}
                height={500}
                layout={"intrinsic"}
                loading="lazy"
                className=" transition duration-200 ease-out  md:hover:scale-105"
              />
            </div>
            {/* layout */}
            <div className=" absolute top-0 left-0 bg-[#000000] opacity-[0.4] w-full h-full"></div>
           
          </div>
          {/* content  */}
          <div className="flex flex-col gap-3 border-b mx-4 mt-5">
            
            <Link href={`/blog/${item.id}`}>
            
            <h2 className="font-Poppins  text-[#212529] text-2xl font-bold">
            {item.title}
            </h2>
            </Link>

            <p className="text-[#777] text-left leading-6 mb-3 ">
            {item.description.replace(/<[^>]*>?/gm, '').substring(0 , 120 )}
            </p>
          </div>
          {/* price  */}
          <div className=" flex w-full justify-between mb-3 px-4">
            <div className="flex  justify-center items-center gap-2 ">
            <Image
             loader={() =>{
              return `${item?.author.image}`;
            }
           }
                src={item?.author.image}
                alt="Picture of the author"
                width={70}
                height={70}
                layout={"intrinsic"}
                className="rounded-full"
                loading="lazy"
              />
              <span className="text-xl text-[#777] font-Poppins ">{item.author.name}</span>
            </div>
            <Link href={`/blog/${item.slug}`}>
            <div className="  group flex justify-center items-center  ">
              <button className=" wrapper  group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                 <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  read more</button>
            </div>
            </Link>
          </div>
          
          {/* border botton  */}
          <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d]"></div>
        </div>
      </div>
      )
    })}
    
    </>
  );
}

export default BlogCard;
