import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeaderParts from "../components/headers/HeaderParts";
import NavBar from "../components/NavBar";
import { blogsData } from "../data/dammyData";
import Select from "react-select";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import CardTorList from "../components/cards/CardTorList";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import FormInquire from "../components/helper/FormInquire";
import FandQ from "../components/FandQ";
import BottomInquire from "../components/helper/BottomInquire";
import { useStateContext } from "../contexts/ContextProvider";
import CardBlogList from "../components/cards/CardBlogList";
import { baseUrl, fetchApi } from "../utils/ferchApi";

const options1 = [
  { value: "price", label: "price" },
  { value: "days ", label: "days" },
  
];
function BlogList({listBlog}) {
  const { setdesplauGrid, desplaygrid } = useStateContext();
  const [valueState, setValueState] = useState("");
  const [tourList, setTourList] = useState(null);
  const [typeList, setTypeList] = useState(null);
  const router = useRouter();
  const { types } = router.query;
  useEffect(() => {
   
  
    
  }, [types]);

  const handler = (event) => {
    const value = event.value;
    setValueState(value);
  };
  return (
    <div className="">
      <BottomInquire />
      <NavBar />
      <HeaderParts typeList="Egypt Travel Blog" />
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-3  ">
        <div className="flex flex-col gap-3 col-start-1 col-end-6   w-full md:col-span-4">
          {/* left side */}
          <div className="flex flex-col md:flex-row gap-3  justify-center items-center md:justify-between ">
            <p className=" text-center md:text-left md:pl-2  text-xl text-[#777] font-Poppins capitalize">
              showing 1-5 of 80 results
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
          <CardBlogList valueState={valueState} packages={listBlog} />
        </div>
        <div className="  w-full col-start-1 col-end-6  md:col-start-5 md:col-end-7   ">
          <FormInquire />
        </div>
      </div>
      <Explore />
      <FandQ />
      <Footer />
    </div>
  );
}

export default BlogList;


export  async  function getStaticProps(){
  const listBlog = await fetchApi(`${baseUrl}/posts`);
 
  return{
    props:{
      listBlog:listBlog.data,
    },
    revalidate: 10,
  }
 }
