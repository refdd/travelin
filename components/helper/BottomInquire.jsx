import Link from 'next/link'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'

function BottomInquire() {
  const [showBottom , setshowBottom] = useState(true)
  const [stopScroll , setStopScroll] = useState(true)
  const divfixrd = useRef();
const { fromDirction} = useStateContext()
    useEffect(()=>{
      if (!divfixrd.current) return;
      if (!fromDirction) return;
            const { top, bottom } = divfixrd.current.getBoundingClientRect();
            if( fromDirction.fromTop <= top){
              setshowBottom(false)
            }else{
              setshowBottom(true)
            }
    },[fromDirction])
   return (
    <div ref={divfixrd} className={ showBottom ? 'md:hidden fixed bottom-0 container mx-auto z-50  ': " hidden" }>
      <div
      onClick={()=>{
        const element = document.getElementById('InquireFrom');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setshowBottom(false)
      }}
      className='twark flex justify-center items-center py-2 bg-[#029e9d] rounded-lg   '>
            <button className='text-2xl text-white font-Poppins '>
                inquire now
            </button>
        </div>
        
    </div>
  )
}

export default BottomInquire