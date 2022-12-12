import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useStateContext } from '../../contexts/ContextProvider'

function BoxSearch() {
  const {setopenSearch} = useStateContext()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.nilecruisez.com/api/tours?search=Cairo&type_id=1')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  // console.log('====================================');
  console.log(data);
  // console.log('====================================');
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000052]'>
         <div className=' w-[90%] mx-auto bg-slate-200 p-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-xl'>
          <div className='absolute top-[11px] right-[18px] transform flex justify-end  cursor-pointer '
              onClick={() => setopenSearch(false)}
          > <AiFillCloseCircle size={30} color="#029e9d"/>  </div>
              <h1 className='text-gray-900 text-lg text-center font-Poppins font-semibold capitalize' > your results</h1>
            {/* recults container */}
            <div className='flex flex-col gap-3 pt-4' > 
                {/* results */}
                <div className='flex flex-col rounded-xl shadow-lg px-3 py-2 border '>
                <p className='text-lg text-[#029e9d] cursor-pointer font-Poppins capitalize whitespace-pre-wrap '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero?</p>
                <div className='flex gap-6 items-center'>
                  <p className='text-[#777] text-left text-sm font-Poppins capitalize'>
                    Lorem ipsum dolor sit amet consectetur 

                  </p>
                  <p className='text-[#777] text-right text-sm font-Poppins capitalize' > package tour </p>
                </div>

              </div>
                {/* results */}
                <div className='flex flex-col rounded-xl shadow-lg px-3 py-2 border '>
                <p className='text-lg text-[#029e9d] cursor-pointer font-Poppins capitalize whitespace-pre-wrap '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero?</p>
                <div className='flex gap-6 items-center'>
                  <p className='text-[#777] text-left text-sm font-Poppins capitalize'>
                    Lorem ipsum dolor sit amet consectetur 

                  </p>
                  <p className='text-[#777] text-right text-sm font-Poppins capitalize' > package tour </p>
                </div>

              </div>
                {/* results */}
                <div className='flex flex-col rounded-xl shadow-lg px-3 py-2 border '>
                <p className='text-lg text-[#029e9d] cursor-pointer font-Poppins capitalize whitespace-pre-wrap '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero?</p>
                <div className='flex gap-6 items-center'>
                  <p className='text-[#777] text-left text-sm font-Poppins capitalize'>
                    Lorem ipsum dolor sit amet consectetur 

                  </p>
                  <p className='text-[#777] text-right text-sm font-Poppins capitalize' > package tour </p>
                </div>

              </div>
                {/* results */}
                <div className='flex flex-col rounded-xl shadow-lg px-3 py-2 border '>
                <p className='text-lg text-[#029e9d] cursor-pointer font-Poppins capitalize whitespace-pre-wrap '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero?</p>
                <div className='flex gap-6 items-center'>
                  <p className='text-[#777] text-left text-sm font-Poppins capitalize'>
                    Lorem ipsum dolor sit amet consectetur 

                  </p>
                  <p className='text-[#777] text-right text-sm font-Poppins capitalize' > package tour </p>
                </div>

              </div>
            </div>
         </div>
    </div>
  )
}

export default BoxSearch