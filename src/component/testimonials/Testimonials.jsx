import React, { useEffect, useState } from 'react';
import SectionTitle from '../../pages/shared/sectiontitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'; 

const Testimonials = () => {
  const [reviews, setReviews] = useState([]); 
  
  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className='my-20'>
      <SectionTitle subHeading='What Our Client Say' heading='Testimonials' />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => 
            <SwiperSlide key={review._id}>
              <div className='my-20 mx-24 flex flex-col items-center'>
                <Rating style={{maxWidth: 180}} value={review.rating} readOnly />
                <p className='py-5'>{review.details}</p>
                <h4 className='text-2xl text-yellow-500'>{review.name}</h4>
              </div>
            </SwiperSlide>
          ) 
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;