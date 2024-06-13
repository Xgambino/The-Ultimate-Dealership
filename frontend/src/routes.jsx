import * as React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ItemList from "./pages/ItemList";
import AddToCatalogue from "./pages/AddToCatalogue";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";




export  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/catalogue",
    element: <ItemList/>,
  },

  {
    path: "/add-to-catalogue",
    element: <AddToCatalogue/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); 