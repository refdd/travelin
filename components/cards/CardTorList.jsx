import React from 'react'
import CardList from './CardList'
import {useStateContext} from "../../contexts/ContextProvider"
function CardTorList({packages , valueState}) {
const {desplaygrid} = useStateContext()
  return (
    <div className={ " flex flex-wrap gap-2 justify-center items-start"
    }>
        <CardList  packages={packages}/>
     
    </div>
  )
}

export default CardTorList