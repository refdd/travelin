import React from 'react'
import CardList from './CardList'
import {useStateContext} from "../../contexts/ContextProvider"
function CardTorList({packages , valueState}) {
const {desplaygrid} = useStateContext()
  return (
    <div className={desplaygrid ? " flex flex-wrap gap-2 justify-center items-start"  :
    "flex  flex-col justify-center items-center gap-3 w-full  "
    }>
        <CardList valueState={valueState}  packages={packages}/>
     
    </div>
  )
}

export default CardTorList