import React from 'react'

function Reviews() {
  return (
    <div className=' container mx-auto pt-11'>
      <h4 className='text-2xl text-[#17233e] font-serif capitalize font-bold my-4 '>Average Reviews</h4>
    <div className='flex flex-col gap-5 md:flex-row '>
        {/* content */}
        <div className='flex flex-col justify-center items-center gap-3 p-4 rounded-lg text-white bg-[#17233e] md:w-[40%]'>
            <span className='text-2xl font-mono font-extrabold '> 2.2/5</span>
            <p className='text-2xl font-serif font-extrabold text-center ' >"Feel So Much Worst Than Thinking"</p>
            <p className='text-xl font-serif  text-center ' >From 40 Reviews</p>
        </div>
        {/* progres */}
        <div className='felx flex-col gap-4  md:flex-1'> 
           <div className='flex flex-col '>
              <h4 className='text-xl text-[#777] font-serif capitalize '>Cleanliness</h4>
              <div className='relative  bg-slate-300 p-2 rounded-lg overflow-hidden'>
                 <span className='bg-[#029e9d] h-full w-[40%] absolute top-0 left-0 '></span>
              </div>
           </div>
           <div className='flex flex-col '>
              <h4 className='text-xl text-[#777] font-serif capitalize '>Facilities</h4>
              <div className='relative  bg-slate-300 p-2 rounded-lg overflow-hidden'>
                 <span className='bg-[#029e9d] h-full w-[70%] absolute top-0 left-0 '></span>
              </div>
           </div>
           <div className='flex flex-col '>
              <h4 className='text-xl text-[#777] font-serif capitalize '>Value for money</h4>
              <div className='relative  bg-slate-300 p-2 rounded-lg overflow-hidden'>
                 <span className='bg-[#029e9d] h-full w-[30%] absolute top-0 left-0 '></span>
              </div>
           </div>
           <div className='flex flex-col '>
              <h4 className='text-xl text-[#777] font-serif capitalize '>Service</h4>
              <div className='relative  bg-slate-300 p-2 rounded-lg overflow-hidden'>
                 <span className='bg-[#029e9d] h-full w-[90%] absolute top-0 left-0 '></span>
              </div>
           </div>
           <div className='flex flex-col '>
              <h4 className='text-xl text-[#777] font-serif capitalize '>Location</h4>
              <div className='relative  bg-slate-300 p-2 rounded-lg overflow-hidden'>
                 <span className='bg-[#029e9d] h-full w-[50%] absolute top-0 left-0 '></span>
              </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Reviews