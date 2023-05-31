import React from 'react';
import MenuItem from '../../pages/shared/menuitem/MenuItem';
import Cover from '../../pages/shared/cover/Cover';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className='mt-20'>
      {title && <Cover img={img} title={title} />}
      <div className='grid md:grid-cols-2 gap-10 my-20'>
        {
          items.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
    </div>
  );
};

export default MenuCategory;