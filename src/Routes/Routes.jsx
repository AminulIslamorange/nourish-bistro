import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";






export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      }
     
    ]
  },
  {
    path:'/dashboard',
    element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },

      // for admin
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      }
    ]
  }
   
  ]);