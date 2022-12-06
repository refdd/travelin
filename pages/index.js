import Image from "next/image";
import BookingSearch from "../components/BookingSearch";
import Explore from "../components/Explore";
import FandQ from "../components/FandQ";
import Footer from "../components/Footer";
import Header from "../components/headers/Header";
import HeaderSection from "../components/helper/HeaderSection";
import MultiPackage from "../components/MultiPackage";
import NavBar from "../components/NavBar";
import PerfectTour from "../components/PerfectTour";
import SelectPackagess from "../components/SelectPackagess";
import PackageTyps from "../components/PackageTyps";
import Testimonails from "../components/Testimonails";
import { ToursOfTyps } from "../data/dammyData";
import {fetchApi,baseUrl}from '../utils/ferchApi'
import { useStateContext, useStateContextApi } from '../contexts/ContextProvider'
import { useEffect } from "react";

export default function Home({ FandQAPI , partners , types , categories , tours , plogList}) {
  const { sectionFAQ ,setSectionFAQ} = useStateContextApi()
  const { displayType ,setDisplayType } = useStateContext() 
  useEffect(()=>{
    setSectionFAQ(FandQAPI)
  },[FandQAPI])
//  console.log(plogList )
//  console.log("+++++++++++++" )
//  console.log(types)
  return (
    <div> 
      <NavBar />
      <Header />
      <BookingSearch />
      {types &&
        types.map((item) => (
          <section key={item.id} className=" md:pt-16  bg-[#e6eef5]  ">
            <SelectPackagess
             sypTypes={categories} 
            id={item.id} 
            partOne={item.partOne}
            partTwo={item.title}
            decs={item.description}
            />
            <PackageTyps type={item.type} packages={tours} />
          </section>
        ))}

 
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <MultiPackage offerSection={true} tours={tours} />
      </section>
      <PerfectTour />

      <Testimonails />
      <section className="  pt-8  md:pt-16  bg-[#e6eef5]  ">
        <HeaderSection
          titel={"Our Travel Guide"}
          partOne={"Recent"}
          partTwo={"Articles & Posts"}
          decs={
            "Best Places to visit, Things to do, Food to Eat and all what you need to know before visiting Egypt"
          }
        />
        <MultiPackage blogsList= {plogList} Blogs={true}  />
      </section>

      <Explore partners={partners} />
      <FandQ  dataFandQ={FandQAPI}/>

      <Footer />
    </div>
  );
}

export  async  function getStaticProps(){
  const FandQAPI = await fetchApi(`${baseUrl}/faqs`);
  const partners = await fetchApi(`${baseUrl}/partners`);
  const types = await fetchApi(`${baseUrl}/types`);
  const categories = await fetchApi(`${baseUrl}/categories`);
  const tours = await fetchApi(`${baseUrl}/tours`);
  const plogList = await fetchApi(`${baseUrl}/posts`);
  return{
    props:{
      FandQAPI:FandQAPI.data,
      partners:partners.data,
      types:types.data,
      categories:categories.data,
      tours:tours.data,
      plogList:plogList.data,
    },
    revalidate: 10,
  }
 }