import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mailnLayout/MainLayout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/OurMenu/Menu";

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
        }
      ]
    },
  ]);