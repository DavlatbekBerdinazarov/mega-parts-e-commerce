
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className=''>
        <Header/>
          <Outlet className='bg-[#F8F9FA]'/>
        <Footer/>
    </div>
  );
};

export default MainLayout;