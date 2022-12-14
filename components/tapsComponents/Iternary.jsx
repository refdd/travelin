import React, { isValidElement } from 'react'
import Faq from "react-faq-component";
const data = {
 
    rows: [
      {
        title: <h2 className="text-[#17233e] text-[18px]  font-Poppins  font-bold py-3 capitalize">Day 1 - Barcelona - Zaragoza - Madrid </h2> ,
        content: <p  className="text-[#777] text-lg font-Poppins capitalize ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
        ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
        In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
        Fusce sed commodo purus, at tempus turpis</p>,
      },
    ],
    
  };
  const  styles = {
    // bgColor: 'white',
    rowTitleColor: "#17233e",
    titleTextSize: '48px',
    rowContentPaddingBottom: '20px',
    // rowContentColor: 'grey',
    // arrowColor: "red",
  }
  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
  };
function Iternary({iternaryData}) {
  return (
<>
{iternaryData.map(item=>(
  <div key={item.id} className='container mx-auto pt-3'>
  <div className='flex flex-col gap-2 '>
  <h1 className='text-3xl text-[#17233e] font-semibold  font-Poppins capitalize  my-3 md:text-4xl '>{item.title}</h1>
  {/* <p className='text-[#777] text-lg font-Poppins capitalize  leading-7'> {item.description}</p> */}
  <div dangerouslySetInnerHTML={{__html:item.description}} /> 

      
 </div>
 {item.days.map(day => (
 <div key={day.id} className='pt-5'>
 <Faq data={{ ... data , styles  , 
  rows : [ { title : <h5 className="text-[#17233e] text-[18px]  font-Poppins  font-bold py-3 capitalize"> {day.title}</h5> ,
             content: <div dangerouslySetInnerHTML={{__html:day.description}} />   } ]
   }}  config={config} />
 </div>
 ))}

</div>
 ))}
</>
  
 
  )
}

export default Iternary