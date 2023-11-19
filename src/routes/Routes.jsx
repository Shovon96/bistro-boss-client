import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mailnLayout/MainLayout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/OurMenu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login-Register/Login";
import Register from "../pages/Login-Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import MyCart from "../pages/Dashboard/MyCart";
import Dashboard from "../mailnLayout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";

  export const router = createBrowserRouter([
    // user path and elements
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/ourMenu',
            element: <Menu></Menu>
        },
        {
            path: '/ourShop',
            element: <PrivetRoutes><OurShop></OurShop></PrivetRoutes>
        }
      ],
    },

    // dashboard path and elements
    {
        path: '/dashboard',
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children:[
            {
                path: '/dashboard/cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: '/dashboard/manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    },

    // login and registation
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);