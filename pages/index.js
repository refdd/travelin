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
import { fetchApi, baseUrl } from "../utils/ferchApi";
import {
  useStateContext,
  useStateContextApi,
} from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import Head from "next/head";
import BoxSearch from "../components/helper/BoxSearch";

export default function Home({
  FandQAPI,
  partners,
  types,
  categories,
  tours,
  plogList,
}) {
  const {openSearch } = useStateContext()
  return (
    <div>
      <Head>
        <title>Meta title: Nile Cruises | Nile Cruises 2023 | Travel to Egypt</title>
        <meta
          name="description"
          content={"Meta description: Travel to Egypt, Explore the ancient Egyptian civilization through the best travel offers and nile cruises 2023. Book Today!"}
        />
      </Head>
      <NavBar />
      <Header />
      <BookingSearch />
     { openSearch &&   <BoxSearch/>}
      {types &&
        types.map((item) => (
          <section key={item.id} className=" md:pt-16  bg-[#e6eef5]  ">
            <SelectPackagess
              sypTypes={ item.categories}
              id={item.id}
              partOne={item.partOne}
              partTwo={item.title}
              decs={item.description}
              alltour= {tours}
            />
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
        <MultiPackage blogsList={plogList} Blogs={true} />
      </section>

      <Explore partners={partners} />
      <FandQ dataFandQ={FandQAPI} />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const FandQAPI = await fetchApi(`${baseUrl}/faqs`);
  const partners = await fetchApi(`${baseUrl}/partners`);
  const types = await fetchApi(`${baseUrl}/types`);
  const categories = await fetchApi(`${baseUrl}/categories`);
  const tours = await fetchApi(`${baseUrl}/tours`);
  const plogList = await fetchApi(`${baseUrl}/posts`);
  return {
    props: {
      FandQAPI: FandQAPI.data,
      partners: partners.data,
      types: types.data,
      categories: categories.data,
      tours: tours.data,
      plogList: plogList.data,
    },
    revalidate: 10,
  };
}
