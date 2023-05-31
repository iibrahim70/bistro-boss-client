import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg'; 
import dessertImg from '../../assets/menu/dessert-bg.jpeg'; 
import pizzaImg from '../../assets/menu/pizza-bg.jpg'; 
import soupImg from '../../assets/menu/soup-bg.jpg'; 
import saladImg from '../../assets/menu/salad-bg.jpg'; 
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../shared/sectiontitle/SectionTitle';
import MenuCategory from '../../component/menucategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu(); 
  const desserts = menu.filter(item => item.category === 'dessert'); 
  const soups = menu.filter(item => item.category === 'soup'); 
  const salads = menu.filter(item => item.category === 'salad'); 
  const pizzas = menu.filter(item => item.category === 'pizza'); 
  const offered = menu.filter(item => item.category === 'offered'); 

  return (
    <div className='pt-[64px]'>
      <Helmet title='Bistro Boss || Menu'/>

      {/* main cover */}
      <Cover img={menuImg} title='Our Menu'/>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />

      {/* offerd menu items */}
      <MenuCategory items={offered}/>

      {/* dessert menu items */}
      <MenuCategory items={desserts} title='Dessert' img={dessertImg}/>

      {/* pizza menu items */}
      <MenuCategory items={pizzas} title='Pizza' img={pizzaImg}/>

      {/* soups menu items */}
      <MenuCategory items={soups} title='Soup' img={soupImg}/>

      {/* salads menu items */}
      <MenuCategory items={salads} title='Salads' img={saladImg}/>
    </div>
  );
}; 

export default Menu;