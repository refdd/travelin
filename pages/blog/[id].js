// import React from 'react'

// function SingelBlog() {
//   return (
//     <div>SingelBlog</div>
//   )
// }

// export default SingelBlog
import React from "react";
import HeaderDestination from "../../components/headers/HeaderDestination";
import HeaderParts from "../../components/headers/HeaderParts";
import Carousel from "../../components/headers/sliderImage/Carousel";
import TabsTours from "../../components/headers/TabsTours";
import BottomInquire from "../../components/helper/BottomInquire";
import FormInquire from "../../components/helper/FormInquire";
import NavBar from "../../components/NavBar";
import Comments from "../../components/tapsComponents/Comments";
import Highlifht from "../../components/tapsComponents/Highlifht";
import Iternary from "../../components/tapsComponents/Iternary";
import Prices from "../../components/tapsComponents/Prices";
import Reviews from "../../components/tapsComponents/Reviews";
import AddRevews from "../../components/tapsComponents/AddRevews.jsx";
import { useStateContext } from "../../contexts/ContextProvider";
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import HeaderSingelBlog from "../../components/parts/HeaderSingelBlog";
import DescSingleBlog from "../../components/parts/DescSingleBlog";
import RelatedTous from "../../components/parts/RelatedTous";

function SingelBlog() {
  const {isClicked} =useStateContext()
  return (
    <div>
      <NavBar />
      <HeaderParts typeList={"single tour"} />
       
       <HeaderSingelBlog/>   
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
         
          <DescSingleBlog />
          <Comments/>
          <AddRevews/> 
        
        </div>
        {/* right form iqurire */}
        <div className="w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          
          <RelatedTous />
        </div>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default SingelBlog;
