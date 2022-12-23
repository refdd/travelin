import React from "react";
import dynamic from 'next/dynamic';
import Explore from "../../components/Explore";
import FandQ from "../../components/FandQ";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Head from "next/head";
import ListEgyptTour from "../../components/cards/ListEgyptTour";
import TableListTour from "../../components/cards/TableListTour";
import StructuredData from "../../components/dataStructured/StructuredData";
const HeaderParts = dynamic(() => {
  return import('../../components/headers/HeaderParts').then((result) => result.default);
});

function Destination({tours}) {
  const structuredData =  tours.map(item => {
    return  {
     fields: [
       {
         name: "NAME TOUR",
         type: "string",
         description: item.title
       },
       {
         name: "DAURATION",
         type: "string",
         description: `${item.duration} Days`
       },
       {
         name: "PRICE FORM",
         type: "integer",
         description: ` $ ${item.start_price} `,
       }
     ]
    }
 } ) 
  return (
    <div>
      <Head>
      <meta
          name="description"
          content={"Best Egypt Tours 2023 : Choose among wide range of Tours to Egypt & Visit Egypt like never before. Best Prices. Book Now!"}
        />
        <StructuredData data={structuredData} />
        <title>Egypt Tours | Best Egypt Tours | Egypt Tours 2023</title>
      </Head>
      <NavBar />
      <HeaderParts typeList={"Egypt Tours"} />
      {/* content grid  */}
      
     {/* tour list */}
     <div className="flex flex-col gap-3 items-center justify-center">
          <h3 className="text-3xl text-[#029e9d] font-Poppins capitalize text-center font-bold">  Best Egypt Tours </h3>
       <p className=" text-lg text-[#777] font-Poppins font-medium capitalize text-center md:px-4">
       Best Egypt Tours 2023 : Choose among wide range of Tours to Egypt & Visit Egypt like never before. Best Prices. Book Now!
       </p>
     </div>
     <div className="flex flex-col md:flex-row gap-3  justify-center items-center md:justify-center  my-7 ">
            <p className=" text-center md:text-left md:pl-2  text-xl text-[#777] font-Poppins capitalize">
              showing ({tours.length}) tour
            </p>
           
          </div>
     <ListEgyptTour valueState={"valueState"} packages={tours} />
     <TableListTour listTour={tours} />

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