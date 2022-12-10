import React, { isValidElement } from 'react'
import Faq from "react-faq-component";
const data = {
 
    rows: [
      {
        title: <h2 className="text-[#17233e] text-lg  py-3 font-Poppins capitalize">Day 1 - Barcelona - Zaragoza - Madrid </h2> ,
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
  <p className='text-[#777] text-lg font-Poppins capitalize  leading-7'> {item.description}</p>
      <p className='text-[#777] text-lg font-Poppins capitalize  leading-7'>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts 
          of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
 </div>
 {item.days.map(day => (
 <div key={day.id} className='pt-5'>
 <Faq data={{ ... data , styles  , 
  rows : [ { title : <h2 className="text-[#17233e] text-lg  py-3 font-Poppins capitalize"> {day.title}</h2> ,
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