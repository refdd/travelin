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
import CardList from "../../components/cards/CardList";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import CardTorList from "../../components/cards/CardTorList";
import Head from "next/head";

function Destination({tours}) {
  return (
    <div>
      <Head>
      <meta
          name="description"
          content={"Best Egypt Tours 2023 : Choose among wide range of Tours to Egypt & Visit Egypt like never before. Best Prices. Book Now!"}
        />
        <title>Egypt Tours | Best Egypt Tours | Egypt Tours 2023</title>
      </Head>
      <NavBar />
      <HeaderParts typeList={"Egypt Tours"} />
      {/* content grid  */}
      
     {/* tour list */}
     <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-3xl text-[#029e9d] font-Poppins capitalize text-center font-bold">  Best Egypt Tours </h1>
       <p className=" text-lg text-[#777] font-Poppins font-medium capitalize text-center md:px-4">
       Best Egypt Tours 2023 : Choose among wide range of Tours to Egypt & Visit Egypt like never before. Best Prices. Book Now!
       </p>
     </div>
     <div className="flex flex-col md:flex-row gap-3  justify-center items-center md:justify-center  my-7 ">
            <p className=" text-center md:text-left md:pl-2  text-xl text-[#777] font-Poppins capitalize">
              showing ({tours.length}) tour
            </p>
           
          </div>
     <CardTorList valueState={"valueState"} packages={tours} />
      <Explore />
      <FandQ />

      <Footer />
    </div>
  );
}

export default Destination;
export async function getStaticProps() {
  const tours = await fetchApi(`${baseUrl}/tours`);
  return {
    props: {
      tours: tours.data,
    },
    revalidate: 10,
  };
}