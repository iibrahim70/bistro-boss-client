import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/mycart/MyCart";
import AllUsers from "../pages/allusers/AllUsers";

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <Main/>, 
    children: [
      {
        path: '/', 
        element: <Home/>,
      },
      {
        path: '/menu', 
        element: <Menu/>,
      }, 
      {
        path: '/order/:category', 
        element: <Order/>,
      }, 
      {
        path: '/signin', 
        element: <Signin/>,
      }, 
      {
        path: '/signup', 
        element: <Signup/>,
      }, 
      {
        path: '/secret', 
        element: <PrivateRoute><Secret /></PrivateRoute>,
      }, 
    ]
  }, 
  {
    path: '/dashboard', 
    element: <PrivateRoute><DashBoard/></PrivateRoute>, 
    children: [
      {
        path: 'mycart', 
        element: <MyCart/>
      },
      {
        path: 'all-users', 
        element: <AllUsers/>
      },
    ]
  }
])
