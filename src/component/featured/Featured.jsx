import React from 'react';
import SectionTitle from '../../pages/shared/sectiontitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css'; 

const Featured = () => {
  return (
    <div className='featured-image bg-fixed text-white pt-10'>
      <SectionTitle subHeading='Check it out' heading='Featured Item' />
      <div className='md:flex justify-center items-center pt-10 pb-20 px-20 gap-x-10'>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2029</p>
          <p className='uppercase'>where can i get some?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quaerat optio quae, dignissimos voluptatem velit maxime pariatur aut enim ipsum illum modi. Veniam nemo eaque alias, quibusdam odio velit tempora autem eum eveniet dignissimos? Mollitia autem corrupti aut eum maiores assumenda temporibus quia doloremque, dolor est, repudiandae animi, in repellat. </p>
          <button className='btn btn-outline border-0 border-b-4'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;