import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';
import UseCart from '../hooks/UseCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

  const [cart] = UseCart(); 
  // Todo: load data from the server to have dynamic isAdmin based on data 
  // const isAdmin = true;
  const [isAdmin] = useAdmin();  

  return (
    <div className='w-[90%] mx-auto'>
      <Helmet title='Bistro Boss || Dashboard' />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>

        <div className="drawer-side bg-[#d1a054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            
            {
              isAdmin? <>
                <li><NavLink to='/'><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/reservations'><FaUtensils /> Add Items</NavLink></li>
                <li><NavLink to='/dashboard/payment-history'><FaWallet /> Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/payment-history'><FaBook /> Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/all-users'><FaUsers /> All Users</NavLink></li>
                
              </> : 
              
              <>
                <li><NavLink to='/'><FaHome /> User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt /> Reservations</NavLink></li>
                <li><NavLink to='/dashboard/payment-history'><FaWallet /> Payment History</NavLink></li>
                <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className='badge badge-secondary'>+{cart?.length || 0}</span></NavLink></li>
              </>
            }


            
            <div className='divider'/>
            <li><NavLink to='/'><FaHome/> User Home</NavLink></li>
            <li><NavLink to='/menu'><HiMenu/> Our Menu</NavLink></li>
            <li><NavLink to='/order/salads'>Order Food</NavLink></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;