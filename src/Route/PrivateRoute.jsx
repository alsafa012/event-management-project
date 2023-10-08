import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const PrivateRoute = ({ children }) => {
     const { user, loader } = useContext(AuthContext);
     console.log(loader);
     const location = useLocation();
     if (loader) {
          return (
               <div className="text-5xl ml-[50%] mt-[15%]">
                    <span className="loading loading-bars loading-sm text-warning "></span>
                    <span className="loading loading-bars loading-md text-warning "></span>
                    <span className="loading  loading-bars text-warning "></span>
               </div>
              
          );
     }
     if (user) {
          return children;
     }

     return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
