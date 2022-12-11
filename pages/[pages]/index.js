import Image from "next/image";
import React from "react";
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import HeaderDestination from "../../components/headers/HeaderDestination";
import HeaderParts from "../../components/headers/HeaderParts";
import NavBar from "../../components/NavBar";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Testimonails from "../../components/Testimonails";
import Head from "next/head";

function Pages({singelpage}) {
    console.log('====================================');
    console.log(singelpage);
    console.log('====================================');
  return (
    <div>
       <Head>
        <title>{singelpage.meta_title}</title>
        <meta
          name="description"
          content={singelpage.meta_description}
        />
      </Head>
      <NavBar />
      <HeaderParts typeList={singelpage.title} />
       <div className="container mx-auto">
       <div className=" flex flex-col gap-4 pt-8  ">
      <div dangerouslySetInnerHTML={{__html:singelpage.description}} />
      </div>
       </div>
       <Testimonails/>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default Pages;
export async function getStaticPaths() {
    const listBlog = await fetchApi(`${baseUrl}/pages`);
    return {
      paths: listBlog.data.map((item) => ({
        params: { pages: item.slug.toString() },
      })),
      fallback: false,
    };
  }
  export  async  function getStaticProps({params}){
    const singelpage = await fetchApi(`${baseUrl}/pages/${params.pages}`);
    return{
      props:{
        singelpage:singelpage.data
      },
      revalidate: 10,
    }
   }