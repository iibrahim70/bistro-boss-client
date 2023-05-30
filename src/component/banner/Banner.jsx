import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselOne from '../../assets/home/01.jpg';
import carouselTwo from '../../assets/home/02.jpg';
import carouselThree from '../../assets/home/03.png';
import carouselFour from '../../assets/home/04.jpg';
import carouselFive from '../../assets/home/05.png';
import carouselSix from '../../assets/home/06.png';

const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={carouselOne} />
        </div>
        <div>
          <img src={carouselTwo} />
        </div>
        <div>
          <img src={carouselThree} />
        </div>
        <div>
          <img src={carouselFour} />
        </div>
        <div>
          <img src={carouselFive} />
        </div>
        <div>
          <img src={carouselSix} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;