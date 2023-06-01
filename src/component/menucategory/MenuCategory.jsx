import React from 'react';
import MenuItem from '../../pages/shared/menuitem/MenuItem';
import Cover from '../../pages/shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className='my-20'>
      {title && <Cover img={img} title={title} />}
      <div className='grid md:grid-cols-2 gap-10 my-20'>
        {
          items.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <Link to={`/order/${title}`}>
        <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;