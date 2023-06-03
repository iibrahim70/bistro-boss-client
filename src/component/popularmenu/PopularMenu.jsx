import React from 'react';
import SectionTitle from '../../pages/shared/sectiontitle/SectionTitle';
import useMenu from '../../hooks/UseMenu';
import MenuCategory from '../menucategory/MenuCategory';

const PopularMenu = () => {
  const [menu] = useMenu(); 
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className='mb-10'>
      <SectionTitle subHeading='Popular Item' heading='From Our Menu'/>
      <MenuCategory items={popular} title={'salads'}/>

      <div className='text-center my-20'>
        <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;