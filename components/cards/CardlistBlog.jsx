import Image from "next/image";
import defaultImage from "../../public/assets/images/trending3.jpg";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "../../contexts/ContextProvider";

function CardlistBlog({ packages, valueState }) {
  const [gackageBeforeSort, setPackageBeforeSort] = useState(null);
  const { desplaygrid, setdesplauGrid } = useStateContext();
  useEffect(() => {
    if (!valueState) {
      setPackageBeforeSort(packages);
    }
  }, [packages]);
  useEffect(() => {
    if (valueState == "price") {
      let pacdageSortBy = packages.sort((a, b) => a.price - b.price);
      setPackageBeforeSort(pacdageSortBy);
    }
  }, [valueState]);
  return (
    <>
      {gackageBeforeSort &&
        gackageBeforeSort.map((item) => (
          <div
            key={item.id}
            className={
              desplaygrid
                ? "flex flex-col gap-2 w-[90%]  md:w-[45%]   bg-slate-100 p-5 rounded-xl mt-5 "
                : "flex flex-col md:flex-row gap-2 justify-center md:justify-start items-center w-[70%] mx-auto md:w-[90%] md:mx-auto bg-slate-100 p-5 rounded-xl mt-5 "
            }
          >
            {/* image */}
            <div
              className={
                desplaygrid
                  ? "relative rounded-xl overflow-hidden w-full "
                  : "relative rounded-xl overflow-hidden md:w-[30%] md:h-48  "
              }
            >
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
                objectFit="fill"
                className=" transition duration-200 ease-out  md:hover:scale-105  "
              />
              {/* layout */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000057]"></div>
            </div>
            {/* content */}
            <div
              className={
                desplaygrid
                  ? " flex flex-col gap-2 justify-center  items-center  "
                  : " flex flex-col md:flex-row gap-2 justify-center md:justify-start  items-center md:flex-1 "
              }
            >
              {/* right side */}
              <div
                className={
                  desplaygrid
                    ? "flex flex-col gap-2 justify-center items-center "
                    : "flex flex-col gap-2 justify-center items-center md:justify md:items-start md:flex-1 "
                }
              >
                <Link href={`/blog/${item.slug}`}>
                  <h2 className="text-center md:text-left text-2xl capitalize font-Poppins cursor-pointer ">
                    {" "}
                    {item.title}
                  </h2>
                </Link>
                <p className="text-[#777]  leading-6 mb-3  text-center md:text-left ">
                  {item.description.replace(/<[^>]*>?/gm, '').substring(0 , 120 )}
                </p>
              </div>
              {/* left side */}
              <div
                className={
                  desplaygrid
                    ? "flex  gap-7 justify-center items-center  "
                    : "flex gap-7 md:justify-end md:items-end md:flex-col md:w-[20%] "
                }
              >
                <Link href={`/blog/${item.id}`}>
                  <button
                    className={
                      desplaygrid
                        ? "wrapper   group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden   "
                        : "wrapper w-[40%] md:w-auto group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden   "
                    }>
                    <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                    see more
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CardlistBlog;
