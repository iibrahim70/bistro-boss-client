import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar/>
      <div className='w-[90%] mx-auto'>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Main;