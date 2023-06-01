import React, { useState } from 'react';
import orderImg from '../../assets/shop/order.jpg';
import Cover from '../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/UseMenu';
import OrderTab from '../../component/ordertab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salads', 'pizzas', 'soups', 'desserts', 'drinks']; 
  const {category} = useParams(); 
  const initialIndex = categories.indexOf(category); 

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu(); 
  
  const desserts = menu.filter(item => item.category === 'dessert');
  const soups = menu.filter(item => item.category === 'soup');
  const salads = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks'); 

  return (
    <div className='pt-[64px]'>
      <Helmet title='Bistro Boss || Order  Food' />
      <Cover img={orderImg} title='order food'/>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salads}/>
        </TabPanel>

        <TabPanel>
          <OrderTab items={pizzas} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Order;