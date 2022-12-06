import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import BottomToursShow from '../helper/BottomToursShow';
import PopularTours from './PopularTours';
import ResentTours from './ResentTours';
import TagsBlogs from './TagsBlogs';

function RelatedTous({relatedTous}) {
    // const { ToursShow  , setToursShow  } = useStateContext()
    
  //  useEffect(()=>{
  //   setToursShow( {Popular : true} )
  //  },[])
  
  return (
    <div >

        <BottomToursShow/>
        {/* {ToursShow.Popular && <PopularTours/> } */}
        {/* {ToursShow.Recent && <ResentTours/> } */}
        <ResentTours  relatedTous={relatedTous}/> 
        {/* <TagsBlogs/> */}
     </div>
  )
}

export default RelatedTous