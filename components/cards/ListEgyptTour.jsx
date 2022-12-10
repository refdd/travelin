import React from 'react'
import {useStateContext} from "../../contexts/ContextProvider"
import CardEgyptToure from './CardEgyptToure'
function ListEgyptTour({packages , valueState}) {
const {desplaygrid} = useStateContext()
  return (
    <div className={" flex flex-wrap gap-2 justify-center items-start"}>
        <CardEgyptToure valueState={valueState}  packages={packages}/>
     
    </div>
  )
}

export default ListEgyptTour