import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/HomePage/Home';
import Login from '../Pages/LoginPage/Login';
import Register from '../Pages/RegisterPage/Register';
import CardDetails from '../Components/CardSectionComponent/CardDetails';

const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
          {
               path: "/",
               element:<Home></Home>,
               loader: ()=>fetch('/category.json'),
          },
          {
               path: "/category/:id",
               element:<CardDetails></CardDetails>,
               loader: ()=>fetch('/category.json'),


          },
          {
               path: "/login",
               element:<Login></Login>,
          },
          {
               path: "/register",
               element:<Register></Register>
          }
       ]
     }
   ])

export default myCreatedRouter;