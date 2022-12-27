import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

function BottomInquire() {
  const [showBottom , setshowBottom] = useState(true)
  const {formDirction} = useStateContext()
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
useEffect(() =>{
  if (!divfixrd.current) return;
  if (!formDirction) return;
      const { top, bottom } = divfixrd.current.getBoundingClientRect();  
      if (bottom < formDirction) {
        setshowBottom(true)
       }
  if (bottom > formDirction){
    setshowBottom(false)

  }

}, [  ])

  console.log(showBottom);
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