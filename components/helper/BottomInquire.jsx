import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function BottomInquire() {
  const [showBottom , setshowBottom] = useState(true)
  const [stopScroll , setStopScroll] = useState(true)
  const divfixrd = useRef();
  useEffect(() => {
      const handleShadow = () => {
        if (!divfixrd.current) return;
        const { top, bottom } = divfixrd.current.getBoundingClientRect();  
        if (top <= 496) {
          setshowBottom(true);
        } else {
          setshowBottom(false);
        }
      };
      // const handlebottomfiexd = () => {
      //   if (!divfixrd.current) return;
      //   const { top, bottom } = divfixrd.current.getBoundingClientRect();
      // };
  
      window.addEventListener("scroll", handleShadow);
      // window.addEventListener("scroll", handlebottomfiexd);
    }, []);
  const handleShowBottom = () =>{
    setshowBottom(false)
  }
  
  return (
    <div ref={divfixrd} className={ showBottom ? 'md:hidden fixed bottom-0 container mx-auto z-50  ': " hidden" }>
      <Link href={"#InquireFrom"}>
      <div
      onClick={handleShowBottom}
      className='twark flex justify-center items-center py-2 bg-[#029e9d] rounded-lg   '>
            <button className='text-2xl text-white font-Poppins '>
                inquire now
            </button>
        </div>
      </Link>
        
    </div>
  )
}

export default BottomInquire