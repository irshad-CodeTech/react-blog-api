
import App from './App';
import Blog from './pages/Blog';
import Home from './pages/Home';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home/>
        {/* <Blog/> */}
      </div>
      
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Blog/>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);