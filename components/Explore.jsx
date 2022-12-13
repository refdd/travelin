import React from "react";
import bg from "../public/assets/images/bg4.webp";
import { AiFillPlayCircle, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Partners from "./Partners";
import Link from "next/link";
function Explore({partners}) {

  const [showvideo, setShowvideo] = useState(false);
  return (
    <>
      <div className=" relative container mx-auto px-4  py-14  ">
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="h-screen w-full bg-cover	 bg-no-repeat bg-right rounded-2xl  overflow-hidden	  "
        >
          <div className=" flex flex-col justify-between items-center h-full md:flex-row ">
            {/* content  */}
            <div className="flex flex-col gap-4  p-7 bg-[#029e9d] mt-0 h-3/5 md:h-full md:w-2/4 md:py-20  md:gap-6  ">
              <h4 className="text-xl text-[#fff] text-center font-bold  capitalize font-Poppins md:text-2xl md:text-left ">
                Best Selling Program in Egypt
              </h4>
              <h2
                className="text-2xl font-Poppins font-bold capitalize
             text-[#fdc703] text-center md:text-5xl md:leading-[3.5rem] md:font-extrabold  md:text-left "
              >
                Cairo, Nile Cruise and Hurghada
              </h2>

              <p className=" text-[#fff] leading-6 text-center md:text-left">
                Explore the Historical Cairo, Sail the Nile from Luxor to Aswan,
                and relax on the red sea beaches. Travel Where You Want, we are
                ready to help!
              </p>
              <p className=" hidden lg:block text-[#fff] leading-6 text-center md:text-left">
                Explore the top sights of Egypt and do it all in a 12-day trip.
                Start in Cairo and visit the Pyramids of Giza, the Egyptian
                Museum, Khan El Khalili, and more. Fly to Aswan to see more.
                Stay on board a Nile Cruise and explore the majestic attractions
                of Egypt between Aswan and Luxor. End your tour with a relaxing
                time on Hurghada beaches in the Red Sea.
              </p>
              <Link href={"/egypt-tours/egypt-vacation-package"}>
              
              <div className="  group flex justify-center items-center  md:justify-start ">
                <button
                  style={{ background: "#17233e" }}
                  className=" wrapper  group-hover:text-white  px-5 py-3 rounded-2xl z-10 text-white overflow-hidden  "
                >
                  <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  read more
                </button>
              </div>
              </Link>
            </div>

            {/*vido popup   */}

            {showvideo ? (
              <div className="  fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  h-full bg-[#0000007a] p-4 w-full z-[1000000] ">
                <span className="cursor-pointer  absolute top-[30%] right-5 rounded-full p-3 md:right-[84px] md:top-[29%]">
                  <AiFillCloseCircle
                    size={30}
                    color="#fff"
                    onClick={() => setShowvideo(false)}
                  />
                </span>
                <div className=" absolute top-[35%] right-5 p-3 w-full   ">
                  <iframe
                    className=" w-full h-[299px]   ml-5 md:h-[350px]  md:m-auto md:w-[89%] "
                    src=""
                  ></iframe>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* buttom puse  */}

            <div className="  flex flex-col items-center justify-center h-2/5 md:w-2/4">
              <div className="ripple">
                {" "}
                <AiFillPlayCircle
                  size={60}
                  color="#029e9d"
                  onClick={() => setShowvideo(true)}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners partners={partners} />
      
    </>
  );
}

export default Explore;
