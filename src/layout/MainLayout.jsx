
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='bg-[#F8F9FA]'>
        <Header/>
          <div className='lg:px-12 px-2'>
            <Outlet/>
          </div>
        <Footer/>
    </div>
  );
};

export default MainLayout;