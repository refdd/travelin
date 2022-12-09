import Image from "next/image";
import React from "react";
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import HeaderDestination from "../../components/headers/HeaderDestination";
import HeaderParts from "../../components/headers/HeaderParts";
import NavBar from "../../components/NavBar";
import { BsCheckLg } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import FormInquire from "../../components/helper/FormInquire";
import { ToursOfTyps } from "../../data/dammyData";
import SelectPackagess from "../../components/SelectPackagess";
import PackageTyps from "../../components/PackageTyps";
import Carousel from "../../components/headers/sliderImage/Carousel";

function Destination() {
  return (
    <div>
      <NavBar />
      <HeaderParts typeList={"Destination"} />
      {/* content grid  */}
      
         
      <Explore />
      <FandQ />

      <Footer />
    </div>
  );
}

export default Destination;
