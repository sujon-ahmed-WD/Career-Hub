import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Componat/Home/Home';
import Apliedob from './Componat/Apliedjob/Apliedob';
 import Errorpage from './Componat/Apliedjob/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>
        ,
    errorElement:<Errorpage></Errorpage>,    
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Apliedob></Apliedob>
      },
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='min-'><RouterProvider router={router} /></div>
  </React.StrictMode>,
)
