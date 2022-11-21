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

function SingelTour() {
  const {isClicked} =useStateContext()
  return (
    <div>
      <BottomInquire />
      <NavBar />
      <HeaderParts typeList={"single tour"} />
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
          <HeaderDestination
            titel={"Egpyt tours"}
            location="Greater London, United Kingdom"
            reviews={"(1,186 Reviews)"}
          />
          <Carousel/>
          <TabsTours/>
          <div className="container mx-auto pt-10" >
       {/* tabs components */}
       {/* {isClicked.AddReviwes && <AddRevews/> } */}
       {/* {isClicked.Comments && <Comments/> } */}
       {isClicked.Highlight && <Highlifht/> }
       {isClicked.Iternary && <Iternary/> }
       {isClicked.Prices && <Prices/> }
       {/* {isClicked.Reviews && <Reviews/> } */}
          
          </div>
          <Reviews/> 
          <Comments/>
          <AddRevews/> 
        
        </div>
        {/* right form iqurire */}
        <div className="  w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          <FormInquire />
        </div>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default SingelTour;
