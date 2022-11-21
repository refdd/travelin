import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import { blogsData } from "../data/dammyData";
import Select from "react-select";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import CardTorList from "../components/cards/CardTorList";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import FormInquire from "../components/helper/FormInquire";
import FandQ from "../components/FandQ";
import BottomInquire from "../components/helper/BottomInquire";
import { useStateContext } from "../contexts/ContextProvider";
import CardBlogList from "../components/cards/CardBlogList";
import AboutSection from "../components/AboutSection";
import PerfectTour from "../components/PerfectTour";
import Testimonails from "../components/Testimonails";

const options1 = [
  { value: "price", label: "price" },
  { value: "days ", label: "days" },
  
];
function AboutUs() {
  const { setdesplauGrid, desplaygrid } = useStateContext();
  const [valueState, setValueState] = useState("");
  const [tourList, setTourList] = useState(null);
  const [typeList, setTypeList] = useState(null);
  const router = useRouter();
  const { types } = router.query;
  useEffect(() => {
   
  
    
  }, [types]);

  const handler = (event) => {
    const value = event.value;
    setValueState(value);
  };
  
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
