import React, { useEffect, useState } from 'react';
import SectionTitle from '../../pages/shared/sectiontitle/SectionTitle';
import MenuItem from '../../pages/shared/menuitem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]); 

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems); 
      })
  }, [])

  return (
    <section className='mb-10'>
      <SectionTitle subHeading='Popular Item' heading='From Our Menu'/>
  
      <div className='grid md:grid-cols-2 gap-10'>
        {
          menu.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className='text-center my-20'>
        <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;