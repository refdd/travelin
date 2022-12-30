import React from 'react'
import CardList from './CardList'
import {useStateContext} from "../../contexts/ContextProvider"
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function CardTorList({packages , valueState}) {
  const divfixrd = useRef();
const {desplaygrid , setStopBottom} = useStateContext()
const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
        if (!divfixrd.current) return;
                const { top, bottom } = divfixrd.current.getBoundingClientRect();  
                setStopBottom(bottom)
     
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <div ref={divfixrd}  className={desplaygrid ? " flex flex-wrap gap-2 justify-center items-start"  :
    "flex  flex-col justify-center items-center gap-3 w-full  "
    }>
        <CardList valueState={valueState}  packages={packages}/>
     
    </div>
  )
}

export default CardTorList