import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';
import Errorpage from './Components/Error/Errorpage';
import Jobdetails from './Components/Jobsdetails/Jobdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Appliedjobs></Appliedjobs>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element:<Jobdetails></Jobdetails>,
        loader:()=>fetch('../jobs.json')
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
