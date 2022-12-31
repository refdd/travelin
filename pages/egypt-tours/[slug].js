import React from "react";
import HeaderDestination from "../../components/headers/HeaderDestination";
import HeaderParts from "../../components/headers/HeaderParts";
import Carousel from "../../components/headers/sliderImage/Carousel";
import TabsTours from "../../components/headers/TabsTours";
import BottomInquire from "../../components/helper/BottomInquire";
import FormInquire from "../../components/helper/FormInquire";
import NavBar from "../../components/NavBar";
import Comments from "../../components/tapsComponents/Comments";
import Highlifht from "../../components/tapsComponents/Highlifht";
import Iternary from "../../components/tapsComponents/Iternary";
import Prices from "../../components/tapsComponents/Prices";
import Reviews from "../../components/tapsComponents/Reviews";
import AddRevews from "../../components/tapsComponents/AddRevews.jsx";
import { useStateContext } from "../../contexts/ContextProvider";
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Testimonails from "../../components/Testimonails";
import StickyBox from "react-sticky-box";
import Head from "next/head";
function SingelTour({singletour}) {
  const {isClicked} =useStateContext()
  const priceAndDiscount = (price , descount )=>{
    const TotalPrice = price - price * descount / 100 
    const total = TotalPrice.toFixed()
    return total
  }
  return (
    <div>
      <Head>
        <meta
          name="description"
          content={singletour.meta_description}
        />
        <title>{singletour.meta_title} </title>
      </Head>
      <BottomInquire />
      <NavBar />
      <p className=' font-Poppins capitalize text-lg text-center md:text-left text-[#029e9d]   md:my-3 md:ml-2'><span className='' >Home</span> | {singletour.title } </p>
      
      <div className=" grid grid-cols-1 md:grid-cols-6 md:gap-3  ">
        {/* left content side */}
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
         <div className=" flex flex-col gap-3 md:flex-row md:justify-between">
         <HeaderDestination
            titel={singletour.title}
            location={`Visited Cities : ${singletour.destinations} `}
            reviews={"(1,186 Reviews)"}
          />
          <div className=" flex justify-center md:justify-end items-center rounded-xl  cursor-pointer hover:opacity-90">
          <p  className=" block capitalize md:hidden   text-xl  text-center  md:text-right text-[#029e9d] font-Poppins font-medium  " >start from <span className="text-gray-500"> $ { priceAndDiscount(  singletour.start_price  , singletour.discount  )   } </span> </p>
          </div>
         </div>
          <Carousel gallery={singletour.gallery} />
          <StickyBox offsetTop={-30} offsetBottom={100} style={{ zIndex: 1000, position: "relative" , background:"#fff" }}  >
          <TabsTours/>
         
          </StickyBox>
          <div className="container mx-auto pt-10" >
       {/* tabs components */}
       {/* {isClicked.AddReviwes && <AddRevews/> } */}
       {/* {isClicked.Comments && <Comments/> } */}
       {isClicked.Highlight && <Highlifht highlightData={singletour} /> }
       {isClicked.Iternary && <Iternary iternaryData={singletour.itineraries} /> }
       {isClicked.Prices && <Prices notsPrise={singletour.tour_notes} template_prices = {singletour.template_prices} /> }
       {/* {isClicked.Reviews && <Reviews/> } */}
          
          </div>
          <Reviews/> 
      <Testimonails />

          {/* <Comments/> */}
          {/* <AddRevews/>  */}
        
        </div>
        {/* right form iqurire */}
        <div className="  w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          <FormInquire singletour = {singletour}/>
        </div>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default SingelTour;
// export async function getStaticPaths() {
//   const listBlog = await fetchApi(`${baseUrl}/tours`);
//   return {
//     paths: listBlog.data.map((item) => ({
//       params: { slug: item.slug.toString() },
//     })),
//     fallback: false,
//   };
// }
// export  async  function getStaticProps({params}){
//   const singletour = await fetchApi(`${baseUrl}/tours/${params.slug}`);
//   return{
//     props:{
//       singletour:singletour.data
//     },
//     revalidate: 10,
//   }
//  }
 export async function getServerSideProps({params}) {
  const singletour = await fetchApi(`${baseUrl}/tours/${params.slug}`);

  return {
    props: {
      singletour:singletour.data
    }, // will be passed to the page component as props
  }
}