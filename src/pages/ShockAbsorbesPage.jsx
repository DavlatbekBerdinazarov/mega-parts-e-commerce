import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ShockAbsorbesPage() {
  return (
    <div>
      <div>
        <header className='lg:container text-[#8B96A5] flex flex-wrap gap-3 bg-orange-300 md:py-4 py-2'>
          <Link to="/homepage" className='flex items-center gap-2'>
            Home <FaAngleRight/>
          </Link>
          <Link to="/homepage" className='flex items-center gap-2'>
            Shock Absorbes <FaAngleRight/>
          </Link>
          <Link to="/homepage" className='flex items-center gap-2'>
            Gears <FaAngleRight/>
          </Link>
          <Link to="/homepage" className='flex items-center gap-2'>
            Auto gears <FaAngleRight/>
          </Link>
        </header>

        <div className='grid grid-cols-4 grid-rows-1 gap-4'>
          <figure className='bg-red-700'> 
            fef
          </figure>
          <figure className='bg-blue-400 col-span-3'>
            fef
          </figure>
        </div>
      </div>
    </div>
  )
}
