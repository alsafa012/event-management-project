import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import CardDetails from "../Components/CardSectionComponent/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Decoration from "../Pages/Decoration/Decoration";
import ShoppingPage from "../Pages/ShoppingPage/ShoppingPage";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch("/category.json"),
               },
               {
                    path: "/category/:id",
                    element: (
                         <PrivateRoute>
                              <CardDetails></CardDetails>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("/category.json"),
               },
               {
                    path: "/decorations",
                    element: (
                         <PrivateRoute>
                              <Decoration></Decoration>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("/gallery.json"),
               },
               {
                    path: "/login",
                    element: <Login></Login>,
               },
               {
                    path: "/register",
                    element: <Register></Register>,
               },
               {
                    path: "/shop",
                    element: (
                         <PrivateRoute>
                              <ShoppingPage></ShoppingPage>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("/shop.json"),
               },
          ],
     },
]);

export default myCreatedRouter;
