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
import { useStateContextApi } from '../contexts/ContextProvider'
import { useEffect } from "react";

export default function Home({ FandQAPI , partners}) {
  const { sectionFAQ ,setSectionFAQ} = useStateContextApi()
  // useEffect(()=>{
  //   setSectionFAQ(FandQAPI)
  // },[FandQAPI])

  return (
    <div> 
      <NavBar />
      <Header />
      <BookingSearch />
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

 
      <section className="  pt-11  md:pt-16  bg-[#e6eef5]  ">
        <MultiPackage offerSection={true} />
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
        <MultiPackage Blogs={true} />
      </section>

      <Explore partners={partners} />
      <FandQ  dataFandQ={FandQAPI}/>

      <Footer />
    </div>
  );
}

// export  async  function getStaticProps(){
//   const FandQAPI = await fetchApi(`${baseUrl}/faqs`);
//   const partners = await fetchApi(`${baseUrl}/partners`);
//   return{
//     props:{
//       FandQAPI:FandQAPI.data,
//       partners:partners.data,
//     },
//     revalidate: 10,
//   }
//  }