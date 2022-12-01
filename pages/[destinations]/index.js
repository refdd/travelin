import Image from "next/image";
import React, { useEffect } from "react";
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
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Loding from "../../components/helper/Loding";
 const array = ["cairo" , "prise"]
function Destination({destinations}) {

 
  if(!destinations){
    return <Loding/>
    }
  return (
    <div>
      <NavBar />
      <HeaderParts typeList={destinations.title} />
      {/* content grid  */}
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
          <HeaderDestination titel={destinations.title}  />
          <div className="container mx-auto md:w-full ">
           
            <Carousel gallery ={destinations.gallery}/>
          </div>
          <div className="container mx-auto flex flex-col  gap-1">
            <h4 className="my-5 text-3xl font-Poppins font-bold text-[#17233e] ">
              Description
            </h4>
            <p className="text-[#777] font-Poppins text-lg ">
          {destinations.description.replace(/<[^>]*>?/gm, '')}
            </p>
            <p className="text-[#777] font-Poppins text-lg ">
            ابعت كمان 
            </p>
          </div>
          {/* price */}
          <div className="container mx-auto  pt-12">
            <div className=" flex flex-col gap-4  mb-4 ">
              {/* left side  */}
              <div className=" bg-[#e6eef5]  rounded-lg md:rounded-t-lg p-4 ">
                <div className="flex flex-col pl-4">
                  <h6 className="text-2xl text-[#17233e] font-Poppins capitalize  my-3">
                     Includes
                  </h6>
                  <ul className="felx flex-col gap-5 text-[#777]">
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Air Fares
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> 3 Nights Hotel Accomodation
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Tour Guide
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <BsCheckLg /> Entrance Fees
                    </li>
                  </ul>
                </div>
              </div>
              {/* right side */}
              <div className=" bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
                <div className="flex flex-col pl-4">
                  <h6 className="text-2xl text-[#17233e] font-Poppins capitalize  my-3">
                   Excluded
                  </h6>
                  <ul className="felx flex-col gap-5 text-[#777]">
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Air Fares
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> 3 Nights Hotel
                      Accomodation
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Tour Guide
                    </li>
                    <li className="flex gap-2 my-3 items-center ">
                      {" "}
                      <GrFormClose size={24} color="#777" /> Entrance Fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right form iqurire */}
        <div className="  w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          <FormInquire />
        </div>
      </div>
      {/* package */}
      {ToursOfTyps &&
        ToursOfTyps.map((item, id) => (
          <section key={id} className=" md:pt-16  bg-[#e6eef5]  ">
            <SelectPackagess
              sypTypes={item.supType}
              titel={item.titleHeader}
              partOne={item.partOne}
              partTwo={item.partTwo}
              decs={item.descHeader}
            />
            <PackageTyps type={item.type} packages={item.listTours} />
          </section>
        ))}
      <Explore />
      <FandQ />

      <Footer />
    </div>
  );
}

export default Destination;

export async function getStaticPaths() {
  return { 
    paths: array.map(item =>({
      params :{destinations : item.toString()}
    })),
    fallback: false
  }
}

export  async  function getStaticProps(){
  const destinations = await fetchApi(`${baseUrl}/destinations/1`);
  return{
    props:{
      destinations:destinations.data,
    },
    revalidate: 10,
  }
 }