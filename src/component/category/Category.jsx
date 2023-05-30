import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import sliderOne from '../../assets/home/slide1.jpg';
import sliderTwo from '../../assets/home/slide2.jpg';
import sliderThree from '../../assets/home/slide3.jpg';
import sliderFour from '../../assets/home/slide4.jpg';
import sliderFive from '../../assets/home/slide5.jpg';
import SectionTitle from '../../pages/shared/sectiontitle/SectionTitle';


const Category = () => {
  return (
    <section>
      <SectionTitle subHeading='From 11.00am to 10.00pm' heading='Order Online' />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='mySwiper mb-20'>

        <SwiperSlide className=''>
          <img src={sliderOne} alt="" />
          <h4 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="" />
          <h4 className='text-4xl uppercase text-center text-white -mt-16'>Pizzas</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderThree} alt="" />
          <h4 className='text-4xl uppercase text-center text-white -mt-16'>Soups</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderFour} alt="" />
          <h4 className='text-4xl uppercase text-center text-white -mt-16'>Desserts</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderFive} alt="" />
          <h4 className='text-4xl uppercase text-center text-white -mt-16'>Burgers</h4>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Category;