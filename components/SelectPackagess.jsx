import React , {useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import HeaderSection from './helper/HeaderSection';
import MultiPackage from './MultiPackage';


function SelectPackagess({sypTypes ,titel,partOne , partTwo , decs }) {
  const { setDisplayType } = useStateContext() 
    const [activeId, setActiveId] = useState(null);
    const handleClick = (id , type)=> ()=> {
        const activeElement = sypTypes.find((item , id)=> id === id )
    
        activeElement && setActiveId(id)
         setDisplayType(type)
       
      }
  return (
    <div className=' w-full bg-[#e6eef5] '>
        {/* header seaction */}
        <HeaderSection
        titel={titel}
        partOne={partOne}
        partTwo={partTwo}
        decs={decs}
        />
       
        {/* tags Section */}
        <div className=' w-full h-[auto] '>
            <ul className='flex flex-wrap justify-center items-center gap-2 my-4 '>
            {sypTypes && sypTypes.map((type , id ) => (
              <li 
              className={ id === activeId  ?  "p-3 border rounded-xl flex justify-center w-[40%]  md:flex-1 bg-[#029e9d]" :" p-3 border rounded-xl flex justify-center w-[40%] md:flex-1" } 
              key={id}
              onClick={handleClick(id , type, )}
              >
                <button className={id === activeId  ? "text-[#fff]" : ""} > {type}</button>
              </li>
          ))}
            </ul>
         
        </div>
        
         

    </div>
  )
}

export default SelectPackagess