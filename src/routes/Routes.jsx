import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

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
    ]
  }
])
