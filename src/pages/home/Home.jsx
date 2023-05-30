import React from 'react';
import Banner from '../../component/banner/Banner';
import Category from '../../component/category/Category';
import PopularMenu from '../../component/popularmenu/PopularMenu';
import Featured from '../../component/featured/Featured';
import Testimonials from '../../component/testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <PopularMenu/>
      <Featured/>
      <Testimonials/>
    </>
  );
};

export default Home;