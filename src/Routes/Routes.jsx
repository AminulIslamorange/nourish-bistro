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
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";






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
    //  normal user routes
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>

      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },

      // for admin
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path:'allUsers',
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path:'addItems',
        element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path:'manageItems',
        element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path:'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
   
  ]);