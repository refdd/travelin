import React from 'react'

function HeaderSection({titel , partOne , partTwo , decs}) {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
            <h4 className='text-xl font-medium font-Poppins capitalize text-[#fdc703]'> {titel}   </h4>
            <h2 className='text-3xl font-bold font-Poppins capitalize text-center'> {partOne} <span className='text-[#029e9d]'> {partTwo}</span> </h2>
            <div className='text-center text-[#777]'> 
            <div dangerouslySetInnerHTML={{__html:decs}} />
            </div>
        </div>
  )
}

export default HeaderSection