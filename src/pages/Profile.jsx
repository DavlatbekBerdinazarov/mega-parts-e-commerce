import React, { useEffect, useState } from 'react'
import { iconCreditCard } from '@/assets/images/z-index'
import { Button } from '@/components/ui/button'
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function calculatescreenColWidth(screenWidth) {

  let screenColWidth;
  if (screenWidth >= 768) {
      screenColWidth = false;
  } else {
      screenColWidth = true;
  }
  return screenColWidth;
}

export default function Profile() {
  let location = useLocation();
  console.log(location.pathname);


  const [screenWidth, setScreenWidth] = useState(window.innerWidth) 

  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const screenColWidth = calculatescreenColWidth(screenWidth);

  return (
    <div className='h-[100vh] md:h-[400px] flex flex-col justify-center px-2'>
      {screenColWidth && <header className='flex justify-between items-center pt-8 fixed top-0 w-full'>
        <Link to="/homepage">
          <FaAngleLeft/>
        </Link>
        <h3 className='font-bold text-center'>Profile</h3>
        <div>{""}</div>
      </header>}
      <div className='px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center '>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2'>
          <img src={iconCreditCard} alt="credit card" />
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4'>You don’t have account :)</h2>
            <p className='text-[#868686]'>It’s seems like you have not login in to your account. You may easily create account</p>
          </div>
        </div>
        <Button variant="outline" className="text-[#0A74FF] border-[2px] w-[225px] border-[#0A74FF]">Create account</Button>
      </div>
    </div>
  )
}
