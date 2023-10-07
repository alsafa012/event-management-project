import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const PrivateRoute = ({ children }) => {
     const { user, loader } = useContext(AuthContext);
     const location = useLocation();
     if (loader) {
          return (
               <span className="loading loading-spinner text-warning ml-[50%] mt-[30%]"></span>
          );
     }
     if (user) {
          return children;
     }

     return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
