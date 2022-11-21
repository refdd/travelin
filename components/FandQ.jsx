import React from "react";
import Faq from "react-faq-component";
import HeaderSection from "./helper/HeaderSection";

const data = {
 
  rows: [
    {
      title: <h2 className="text-[#17233e] text-lg  font-serif  py-3 capitalize">Lorem ipsum dolor sit amet</h2>
      
    
      ,
      content:  <p className="text-[#777] text-lg font-serif capitalize ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
      sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
      Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
      maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
      mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
      purus, at tempus turpis.
    </p>,
    },
    {
      title: <h2 className="text-[#17233e] text-lg  font-serif  py-3 capitalize">Nunc maximus, magna at ultricies elementum</h2> ,
      content:
      <p className="text-[#777] text-lg font-serif capitalize ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
      sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
      Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
      
    </p>,
    },
    {
      title: <h2 className="text-[#17233e] text-lg  font-serif  py-3 capitalize">Nunc maximus, magna at ultricies elementum</h2>,
      content: <p className="text-[#777] text-lg font-serif capitalize ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
    
      purus, at tempus turpis.
    </p>,
    },
    {
      title: <h2 className="text-[#17233e] text-lg  font-serif  py-3 capitalize">Nunc maximus, magna at ultricies elementum</h2>,
      content:  <p className="text-[#777] text-lg font-serif capitalize ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
    
    </p>
    },

  ],
  styles : {
    // bgColor: 'white',
    rowTitleColor: "#17233e",
    titleTextSize: '48px',
    // rowContentColor: 'grey',
    // arrowColor: "red",
  }
};



const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true
};
function FandQ() {
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
