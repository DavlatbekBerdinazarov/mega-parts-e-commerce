import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import AppLayout from "@/layout/AppLayaut";
import MainLayout from "@/layout/MainLayout";
import NotFound from "@/components/NotFound";
import Item from "@/pages/Item";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/homepage",
        element: <MainLayout/>,
        children: [
          {
            index: true,
            element: <HomePage/>,
          }
        ]
      },
      {
        path: "*",
        element: <NotFound to="/"/>,
      }
    ]
  }
]);
