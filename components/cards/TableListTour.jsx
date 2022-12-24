import Link from 'next/link'
import React from 'react'

function TableListTour({listTour}) {
  return (
  <div className='container mx-auto pt-9 ' >  
   
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left ">
        <thead className="text-xs text-white  uppercase bg-[#029e9d]  ">
            <tr>
                <th scope="col" className="py-3 px-3 border-l border-gray-700  text-sm font-Poppins font-bold md:text-center md:text-lg    ">
                    name tour
                </th>
                <th scope="col" className="py-3 px-3 border-l border-gray-700  text-sm font-Poppins font-bold md:text-center md:text-lg   ">
                    dauration
                </th>
                <th scope="col" className="py-3 px-3 border-l border-gray-700  text-sm font-Poppins font-bold md:text-center md:text-lg  ">
                    price form 
                </th>
                <th scope="col" className="py-3 px-3 border-l border-gray-700   text-sm font-Poppins font-bold md:text-center md:text-lg   ">
                    view tour
                </th>
            </tr>
        </thead>
        <tbody>
            {listTour && listTour.map(item => (
                    <tr  key={item.id}  className="bg-white  border border-gray-700  ">
                    <Link href={`/egypt-tours/${item.slug}`}>
                    <th scope="row" className="py-4 px-2  cursor-pointer text-[#029e9d] text-sm font-Poppins font-bold md:text-center md:text-lg ">
                         {item.title}
                     </th>
                    </Link>
                     <td className="py-4  text-[#777] border-l px-1 border-gray-700 text-sm font-Poppins font-bold md:text-center md:text-lg ">
                     {item.duration} Days
                     </td>
                     <td className="py-4 text-[#777] border-l px-1 border-gray-700 text-sm font-Poppins font-bold md:text-center md:text-lg  ">
                        $ {item.start_price}
                     </td>
                     <Link href={`/egypt-tours/${item.slug}`}>
                     <td className="py-4 text-[#029e9d] cursor-pointer  border-l px-1 border-gray-700 text-sm font-Poppins font-bold text-center ">
                        view tour
                     </td>
                     </Link>
                 </tr>
            ))}
            
      
        </tbody>
    </table>
</div>

  </div>
  )
}

export default TableListTour