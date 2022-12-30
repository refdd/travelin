import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

function BottomInquire() {
  const [showBottom , setshowBottom] = useState()
  const {stopBottom} = useStateContext()
  const divfixrd = useRef();
  // useEffect(() => {
  //     const handleShadow = () => {
  //       if (!divfixrd.current) return;
  //       const { top, bottom } = divfixrd.current.getBoundingClientRect();  
  //       if (top <= 496) {
  //         setshowBottom(true);
  //       } else {
  //         setshowBottom(false);
  //       }
  //     };
  //     // const handlebottomfiexd = () => {
  //     //   if (!divfixrd.current) return;
  //     //   const { top, bottom } = divfixrd.current.getBoundingClientRect();
  //     // };
  
  //     window.addEventListener("scroll", handleShadow);
  //     // window.addEventListener("scroll", handlebottomfiexd);
  //   }, []);

  const handleShowBottom = () =>{
    var FormInquire = document.getElementById("InquireFrom");
    setshowBottom(false)
    FormInquire.scrollIntoView({behavior: 'smooth'}, true);
  }
  useEffect(()=>{
    if(!stopBottom) return
    if (!divfixrd.current) return;
          const { top , bottom } = divfixrd.current.getBoundingClientRect();  
          // console.log(bottom + 200 , stopBottom);
          if(bottom == 0 ){
            if(stopBottom < bottom + 600){
              setshowBottom(false)
             }else{
          setshowBottom(true)
              
             }
          }else{
            if(stopBottom < bottom){
              setshowBottom(false)
             }else{
          setshowBottom(true)
              
             }
          }
      
    },[stopBottom])

  return (
    <div ref={divfixrd} onClick={handleShowBottom} className={ showBottom ? 'md:hidden fixed bottom-0 container mx-auto z-50  ': " hidden" }>
      <div
      
      className='twark flex justify-center items-center py-2 bg-[#029e9d] rounded-lg   '>
            <button className='text-2xl text-white font-Poppins '>
                inquire now
            </button>
        </div>
    </div>
  )
}

export default BottomInquire