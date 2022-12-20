import React from "react";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaQuoteLeft, FaTwitter } from "react-icons/fa";
function DescSingleBlog({singelSlug}) {
  const [showvideo, setShowvideo] = useState(false);

  return (
    <div className="container mx-auto pt-4">
        {/* decs and vido */}
      <div className="flex flex-col gap-4">
       
          <div  className="text-[#777] text-xl"  dangerouslySetInnerHTML={{__html:singelSlug.description}} />

        
        <div className="flex flex-col gap-2 bg-[#029e9d] py-5 rounded-lg md:w-[80%] md:mx-auto  ">
          <div className="flex justify-center items-center ">
            <div className="p-6 rounded-full bg-white">
              <FaQuoteLeft color="#029e9d" className="" />{" "}
            </div>{" "}
          </div>
          <p className="text-[24px] text-white font-Poppins text-center  px-3">
            “{singelSlug.author.bio}
          </p>
          <span className="text-xl text-white font-Poppins capitalize text-center">
            By {singelSlug.author.name}
          </span>
        </div>
      </div>
      {/* desc and image */}
      {/* <div className="flex flex-col gap-3 pt-5 items-center md:flex-row md:items-start md:justify-center md:flex-wrap">
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
      </div> */}
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
