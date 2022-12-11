import React, { useState } from "react";
import { useEffect } from "react";
import Faq from "react-faq-component";
import HeaderSection from "./helper/HeaderSection";





const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true
};
function FandQ({dataFandQ}) {
  const [gitTitel , setTitle] = useState("");
  if(!dataFandQ){
    return  
  }
   const gtiDta= dataFandQ.map(item => {
  return   {
    title: <h2 className="text-[#17233e] whitespace-pre-wrap  font-Poppins  py-3 capitalize"> {item.question}</h2>,
    content:  <p className="text-[#777] text-lg font-Poppins capitalize "> {item.answer} </p>
  }
   })
  const data = {
 
    rows: [
      ...gtiDta
    ],
    styles : {
      // bgColor: 'white',
      rowTitleColor: "#17233e",
      titleTextSize: '48px',
      // rowContentColor: 'grey',
      // arrowColor: "red",
    }
  };
  return (
    <div className="h-auto " >
      <HeaderSection
      titel="FAQ"
      partOne="Frequently Asked "
      partTwo="Questions"
      decs="Below are some of the frequently asked questions and their answers, hopefully, you will find what questions you are looking for."
    />
      <div className="container mx-auto px-6 py-6">
        <Faq data={data}  config={config} />
      </div>
    </div>
  );
}

export default FandQ;
