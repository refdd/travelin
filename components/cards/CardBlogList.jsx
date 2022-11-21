import React from 'react'
import {useStateContext} from "../../contexts/ContextProvider"
import CardlistBlog from './CardlistBlog'
function CardBlogList({packages , valueState}) {
const {desplaygrid} = useStateContext()
  return (
    <div className={desplaygrid ? " flex flex-wrap gap-2 justify-center items-start"  :
    "flex  flex-col justify-center items-center gap-3 w-full  "
    }>
        <CardlistBlog valueState={valueState}  packages={packages}/>
     
    </div>
  )
}

export default CardBlogList