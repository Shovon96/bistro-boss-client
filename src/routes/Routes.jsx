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

  export const router = createBrowserRouter([
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
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);