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
import SelectPackagess from "../../components/SelectPackagess";
import PackageTyps from "../../components/PackageTyps";
import Carousel from "../../components/headers/sliderImage/Carousel";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Head from "next/head";

function Destination({tours , Egypt}) {

  console.log('====================================');
  console.log(Egypt);
  console.log('====================================');
  return (
    <div>
       <Head>
        <title>{Egypt.meta_title}</title>
        <meta
          name="description"
          content={Egypt.meta_description}
        />
      </Head>
      <NavBar />
      <HeaderParts typeList={"Egypt tours"} />
      {/* content grid  */}
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
          <HeaderDestination titel={"Egpyt tours"}  />
          <div className="container mx-auto md:w-full ">
           
            <Carousel gallery={Egypt.gallery}/>
          </div>
          <div className="container mx-auto flex flex-col  gap-1">
            <h4 className="my-5 text-3xl font-Poppins font-bold text-[#17233e] ">
              Description
            </h4>
          
           <div  className="text-[#777] text-xl"  dangerouslySetInnerHTML={{__html:Egypt.description}} />
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
                  <div  className="text-[#777] text-xl"  dangerouslySetInnerHTML={{__html:Egypt.included}} />
                </div>
              </div>
              {/* right side */}
              <div className=" bg-[#e6eef5] rounded-lg md:rounded-t-lg p-4 ">
                <div className="flex flex-col pl-4">
                  <h6 className="text-2xl text-[#17233e] font-Poppins capitalize  my-3">
                   Excluded
                  </h6>
                  <div  className="text-[#777] text-xl"  dangerouslySetInnerHTML={{__html:Egypt.excluded}} />
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
      <PackageTyps  Allpackage={tours}    />
      
      <Explore />
      <FandQ />

      <Footer />
    </div>
  );
}

export default Destination;
export async function getStaticProps() {
  const tours = await fetchApi(`${baseUrl}/tours`);
  const Egypt = await fetchApi(`${baseUrl}/destinations/1`)

  return {
    props: {
      tours: tours.data,
      Egypt: Egypt.data,
    },
    revalidate: 10,
  };
}