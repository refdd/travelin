import React from 'react'

function HeaderSection({titel , partOne , partTwo , decs}) {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
            <h4 className='text-xl font-medium font-serif capitalize text-[#fdc703]'> {titel}   </h4>
            <h2 className='text-3xl font-bold font-serif capitalize text-center'> {partOne} <span className='text-[#029e9d]'> {partTwo}</span> </h2>
            <p className='text-center text-[#777]'> {decs}</p>
        </div>
  )
}

export default HeaderSection