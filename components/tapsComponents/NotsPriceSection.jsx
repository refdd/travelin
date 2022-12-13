import React from "react";
import Faq from "react-faq-component";


const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};
const  styles = {
  // bgColor: 'white',
  rowTitleColor: "#17233e",
  titleTextSize: "48px",
  // rowContentColor: 'grey',
  // arrowColor: "red",
}
function NotsPriceSection({notsPrise}) {
  const gtiDta= notsPrise.map(item => {
    return   {
      title: <h2 className="text-[#17233e] text-[10px]  font-Poppins  py-3 capitalize"> {item.title}</h2>,
      content:  <p className="text-[#777] text-lg font-Poppins capitalize "> {item.description} </p>
    }
     })


  const data = {
    rows: [
      ... gtiDta
      
    ],
   
  };
  
  return (
    <div className="container mx-auto px-6 py-6">
      <Faq data={{ ... data , styles }} config={config} />
    </div>
  );
}

export default NotsPriceSection;
