import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
     const { user, signOutUser } = useContext(AuthContext);

     const handleSignOut = () => {
          // console.log("asd")
          signOutUser()
          .then(()=>{
               Swal.fire(
                    'Good job!',
                    'Sign out was successful',
                    'success'
                  )
          })
          .catch();
         
     };
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#FF444A] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/login"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#FF444A] underline"
                                   : ""
                         }
                    >
                         Login
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/register"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#FF444A] underline"
                                   : ""
                         }
                    >
                         Register
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/decorations"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#FF444A] underline"
                                   : ""
                         }
                    >
                         Decorations
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div className="navbar bg-base-100">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label
                                   tabIndex={0}
                                   className="btn btn-ghost lg:hidden"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                   </svg>
                              </label>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                              >
                                   {navLists}
                              </ul>
                         </div>
                         <a className="btn btn-ghost normal-case text-xl">
                              Social Events
                         </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navLists}
                         </ul>
                    </div>

                    <div className="navbar-end">
                         {user ? (
                              <button className="btn" onClick={handleSignOut}>Sign Out</button>
                         ) : (
                              <Link to="/login">
                                   <button className="btn">Sign Up</button>
                              </Link>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
