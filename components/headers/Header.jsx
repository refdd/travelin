import React from "react";
function Header() {
  return (
    <div className="relative overflow-hidden ">
      <div className=" relative w-full h-auto ">
        <div>
          {/* video and lay out  */}
          <div>
            <div className="w-full h-full ">
             {/* <video className=" w-full h-full object-cover" src={require("../../public/assets/video/tour.mp4")} autoPlay loop muted/> */}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[##0000005e]  " > </div>
          </div>

          {/* content  */}
          <div className="absolute top-0 flex flex-col  justify-center items-center w-full h-full text-slate-100 "> 
           <h1 className="text-white text-center text-xl w-[285px] md:text-6xl md:w-full mt-[-75px] md:font-bold font-Poppins md:mt-[-277px]  ">Joyful Nile Cruise Trips </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
