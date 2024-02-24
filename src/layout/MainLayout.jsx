import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
        <Header/>
          <Outlet/>
        <Footer/>
    </div>
  );
};

export default MainLayout;