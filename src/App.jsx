import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App;
