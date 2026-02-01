import { useState } from "react";
import axios from "axios";
// import { Routes, Route } from "react-router";
import { RouterProvider } from "react-router";
//React Router
import { router } from "./router";
// 路由表

function App() {
  return <RouterProvider router={router} />;
}

export default App;
