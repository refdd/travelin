import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeaderParts from "../../components/headers/HeaderParts";
import NavBar from "../../components/NavBar";
import Select from "react-select";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import CardTorList from "../../components/cards/CardTorList";
import Explore from "../../components/Explore";
import Footer from "../../components/Footer";
import FormInquire from "../../components/helper/FormInquire";
import FandQ from "../../components/FandQ";
import BottomInquire from "../../components/helper/BottomInquire";
import { useStateContext } from "../../contexts/ContextProvider";
import { baseUrl, fetchApi } from "../../utils/ferchApi";
import Head from "next/head";
import Loding from "../../components/helper/Loding"
import TableListTour from "../../components/cards/TableListTour";
import bgtour from "../../public/assets/images/slider-Egyptian-Museum.webp"
import StructuredData from "../../components/dataStructured/StructuredData";
const array = ["egypt-tour-packages", "river-nile-cruises"];

const options1 = [
  { value: "price", label: "price" },
  { value: "days ", label: "days" },
];


function PackageList({typesall , tours } ) {
  const { setdesplauGrid, desplaygrid } = useStateContext();
  const [valueState, setValueState] = useState("");
  const [selectedTyps, setselectedTyps] = useState(null);
  const [listTour, setlistTour] = useState(null);
  const router = useRouter();
  const { types } = router.query;
 
  const structuredData =  tours.map(item => {
     return  {
      "@context": "http://schema.org",
      "@type": "Table",
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
  useEffect(() => {
  if (!typesall) return ;

    let alltour = typesall.find((tour) => tour.slug == types);
    let listTour = tours.filter((tour) => tour.type_id == alltour.id);
    setlistTour(listTour)
    setselectedTyps(alltour);
  }, [types ]);

  const handler = (event) => {
    const value = event.value;
    setValueState(value);
  };
  if (!types) return <Loding/> ;
  if (!selectedTyps) return <Loding/> ;

  return (
    <div className="">
      <Head>
      
        <meta
          name="description"
          content={selectedTyps.meta_description}
        />
        <StructuredData data={structuredData} />

        <title>{selectedTyps.meta_title} </title>
      </Head>
      <BottomInquire />
      <NavBar />
      <HeaderParts typeList={selectedTyps.title}  bgtour={selectedTyps.id == 1 && bgtour}/>
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
          {/* left side */}
          <div className="flex flex-col md:flex-row gap-3  justify-center items-center md:justify-between ">
            <p className=" text-center md:text-left md:pl-2  text-xl text-[#777] font-Poppins capitalize">
              showing {tours.length} tours
            </p>
            <div className="flex gap-3 w-[60%] md:w-auto justify-center items-center">
              <span
                className={
                  desplaygrid
                    ? " hidden md:block cursor-pointer text-[#777] "
                    : " hidden md:block  cursor-pointer text-white bg-[#ffc107] rounded-sm  "
                }
                onClick={() => setdesplauGrid(false)}
              >
                <BsList size={30} />{" "}
              </span>
              <span
                className={
                  desplaygrid
                    ? " hidden md:block  cursor-pointer text-white bg-[#ffc107] rounded-sm p-1 "
                    : " hidden md:block  cursor-pointer text-[#777]"
                }
                onClick={() => setdesplauGrid(true)}
              >
                <BsFillGrid3X3GapFill size={30} />{" "}
              </span>
              <div className="w-[250px]">
                <Select
                  placeholder={<div> Sort...</div>}
                  defaultValue={options1[0].value}
                  options={options1}
                  onChange={handler}
                />
              </div>
            </div>
          </div>
          {/* tour list */}
          <CardTorList valueState={valueState} packages={listTour} />
        </div>
        <div className="  w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          <FormInquire />
        </div>
      </div>
         <TableListTour listTour={listTour} />
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default PackageList;
export async function getStaticPaths() {
  return {
    paths: array.map((item) => ({
      params: { types: item.toString() },
    })),
    fallback: false,
  };
}
export async function getStaticProps() {
  const typesall = await fetchApi(`${baseUrl}/types`);
  const tours = await fetchApi(`${baseUrl}/tours`);
  return {
    props: {
      typesall: typesall.data,
      tours: tours.data,
    },
    revalidate: 10,
  };
}
