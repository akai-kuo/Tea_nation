// react router
import { createHashRouter } from "react-router-dom";

// Layouts
import FrontendLayout from "./Layouts/FrontendLayout";
import AdminLayout from "./Layouts/AdminLayout";

// Frontend pages(前台)
import Home from "./pages/front/Home";
import About from "./pages/front/About";
import Products from "./pages/front/Products";
import SingleProduct from "./pages/front/SingleProduct";
import Cart from "./pages/front/Cart";
import Login from "./pages/front/Login";
import Register from "./pages/front/Register";

//Admin pages(後台)
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";

// 404 page
import NotFound from "./pages/front/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true, // 預設首頁
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "product/:id", // 動態參數
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "adminProducts",
        element: <AdminProducts />,
      },
    ],
  },
  {
    path: "*", // 404 頁面
    element: <NotFound />,
  },
]);
