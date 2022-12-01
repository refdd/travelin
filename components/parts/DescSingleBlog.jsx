import React from "react";
import Image from "next/image";
import imageblog from "../../public/assets/images/bg4.jpg";
import { AiFillCloseCircle, AiFillPlayCircle } from "react-icons/ai";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaQuoteLeft, FaTwitter } from "react-icons/fa";
import image1 from "../../public/assets/images/trending5.jpg";
import image2 from "../../public/assets/images/hotels.jpg";
function DescSingleBlog() {
  const [showvideo, setShowvideo] = useState(false);

  return (
    <div className="container mx-auto pt-4">
        {/* decs and vido */}
      <div className="flex flex-col gap-4">
        <p className="text-[#777] text-lg font-Poppins capitalizes text-center  md:w-[80%] md:mx-auto  ">
          The property, complete with a 30-seat screening room, a 100-seat
          amphitheater and a swimming pond with sandy beach and outdoor shower,
          was asking about $40 million. Lorem ipsum dolor sit amet, consectetur
          adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit
          amet, conse dolor sit amet, consectetu ctetur adipis Viales. Lorem
          ipsum dolor sit amet, cons sit amet, consectetur adi ectetur adipis
          Vi.
        </p>
        <div className="relative flex justify-center items-center">
          <Image
            src={imageblog}
            width={500}
            height={500}
            loading="lazy"
            layout="intrinsic"
            className="rounded-lg"
          />
          <div className=" absolute top-[50%] left-[50%]  flex flex-col items-center justify-center h-2/5 md:w-2/4 transform -translate-x-1/2 -translate-y-1/2">
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
                src="https://www.youtube.com/embed/nOzJrJTyZ8Y"
              ></iframe>
            </div>
          </div>
        ) : (
          ""
        )}
        <p className="text-[#777] text-lg font-Poppins capitalizes text-center  md:w-[80%] md:mx-auto  md:text-left ">
          The property, complete with a 30-seat screening room, a 100-seat
          amphitheater and a swimming pond with sandy beach and outdoor shower,
          was asking about $40 million. Lorem ipsum dolor sit amet, consectetur
          adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit
          amet, conse dolor sit amet, consectetu ctetur adipis Viales. Lorem
          ipsum dolor sit amet, cons sit amet, consectetur adi ectetur adipis
          Vi.
        </p>
        <div className="flex flex-col gap-2 bg-[#029e9d] py-5 rounded-lg md:w-[80%] md:mx-auto  ">
          <div className="flex justify-center items-center ">
            <div className="p-6 rounded-full bg-white">
              <FaQuoteLeft color="#029e9d" className="" />{" "}
            </div>{" "}
          </div>
          <p className="text-[24px] text-white font-Poppins text-center  px-3">
            “To take a trivial example, which ever undertakes laborious physical
            work exercise, except obtain some advantage blinded”{" "}
          </p>
          <span className="text-xl text-white font-Poppins capitalize text-center">
            By Michael Delwell
          </span>
        </div>
      </div>
      {/* desc and image */}
      <div className="flex flex-col gap-3 pt-5 items-center md:flex-row md:items-start md:justify-center md:flex-wrap">
        <div className=" md:w-[40%]">
          <Image
            src={image1}
            width={500}
            height={500}
            layout={"intrinsic"}
            loading={"lazy"}
            className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 "
          />
        </div>

        <div className="md:w-[40%]">
          <Image
            src={image2}
            width={500}
            height={500}
            layout={"intrinsic"}
            loading={"lazy"}
            className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          />
        </div>
        <div>
          <p className="text-[#777] text-lg font-Poppins capitalizes text-center md:w-[80%] md:mx-auto ">
            as opposed to using 'Content here, content here', making it look
            like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy.
          </p>
        </div>
      </div>
      {/* social */}
      <div className="pt-6 ">
        <div className="px-4 py-6 bg-slate-200 rounded-lg flex flex-col gap-3 items-center md:flex-row md:gap-1 ">
        <p className="text-[#777] text-lg text-center font-Poppins flex-1 "><span className="font-bold">Posted In:</span> Fashion, Beauty, Vacation, Travel, News</p>
          <div className="flex gap-3 items-center justify-center ">
         <span className="p-4 rounded-lg bg-[#3b5998] hover:bg-[#3b5998]/90 hover:shadow-lg transition-all"> <FaFacebook size={24} color="white"/> </span>
         <span className="p-4 rounded-lg bg-[#4285F4] hover:bg-[#4285F4]/90 hover:shadow-lg transition-all"> <FaGoogle size={24} color="white"/> </span>
         <span className="p-4 rounded-lg bg-[#1da1f2] hover:bg-[#1da1f2]/90 hover:shadow-lg transition-all"> <FaTwitter size={24} color="white"/> </span>
         <span className="p-4 rounded-lg bg-[#007785] hover:bg-[#007785]/90 hover:shadow-lg transition-all"> <FaLinkedin size={24} color="white"/> </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescSingleBlog;
