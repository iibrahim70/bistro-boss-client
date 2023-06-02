import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
  const location = useLocation(); 
  const path = location.pathname;
  const noHeaderFooter = path.includes('signin') || path.includes('signup'); 

  return (
    <>
      {noHeaderFooter || <Navbar/>}
      <div className='w-[90%] mx-auto'>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer/>}
    </>
  );
};

export default Main;