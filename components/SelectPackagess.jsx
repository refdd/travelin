import React , {useState} from 'react'
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import HeaderSection from './helper/HeaderSection';
import MultiPackage from './MultiPackage';
import PackageTyps from './PackageTyps';


function SelectPackagess({sypTypes ,id,partOne , partTwo , decs , alltour }) {
  const { setDisplayType } = useStateContext() 
    const [activeId, setActiveId] = useState(null);
    const [catagorys, setCatagorys] = useState(null);
    const [toursall, settoursall] = useState([]);
    useEffect(()=>{
   const gitCatagorys = sypTypes.filter( item  =>item.type_id ==  id   )
   setCatagorys(gitCatagorys)
    } , [id])
    const handleClick = (id , type  , tours )=> ()=> {
      const activeElement = sypTypes.find((item , id)=> id === id )
      activeElement && setActiveId(id)
      settoursall( tours)
    }
    useEffect(() =>{ 
const gittour = sypTypes.map(item => item.tours)
 const arOfTour = gittour[0]

settoursall(arOfTour)
  },[])

  return (
    <div className=' relative w-full bg-[#e6eef5] '>
        {/* header seaction */}
        <HeaderSection
        partOne={partOne}
        partTwo={partTwo}
        decs={decs}
        />
        {/* tags Section */}
        <div className=' w-full h-[auto] '>
            <ul className='flex flex-wrap justify-center items-center gap-2 my-4 '>
            {catagorys && catagorys.map(({title , id, type_id , tours}) => (
              <li 
              className={ id === activeId  ?  "p-3 border rounded-xl flex justify-center w-[40%]  md:flex-1 bg-[#029e9d]" :" p-3 border rounded-xl flex justify-center w-[40%] md:flex-1" } 
              key={id}
              onClick={ handleClick(id , type_id , tours )}
              >
                <button className={id === activeId  ? "text-[#fff]" : ""} > {title}</button>
              </li>
          ))}
            </ul>
        </div>
            <PackageTyps  Allpackage={toursall}    />
      <div className="w-[40%] mx-auto bg-yellow-300 h-1  absolute bottom-[-35px] left-[30%]"></div>

    </div>
  )
}

export default SelectPackagess