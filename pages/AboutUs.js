import React from "react";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import FandQ from "../components/FandQ";
import BottomInquire from "../components/helper/BottomInquire";
import AboutSection from "../components/AboutSection";
import PerfectTour from "../components/PerfectTour";
import Testimonails from "../components/Testimonails";


function AboutUs() {
  
  return (
    <div className="">
      <BottomInquire />
      <NavBar />
      <HeaderParts typeList="About us " />
       <AboutSection/>
       <PerfectTour/>
       <Testimonails/>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default AboutUs;
