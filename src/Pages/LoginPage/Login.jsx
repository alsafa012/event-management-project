import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [errorMessage, setErrorMessage] = useState("");
     const location = useLocation();
     const navigate = useNavigate();

     const { user, signIn, googleSignIn } = useContext(AuthContext);
     const emailRef = useRef(null);

     // sign in with google

     const handleGoogleSignIn = () => {
          if (user) {
               toast.error("user already logged in");
               return;
          }
          // if(!user.email){
          //      return alert("Please enter a valid email");
          // }
          googleSignIn()
               .then((result) => {
                    toast.success("Login Successfully!");
                    navigate(location?.state ? location.state : "/");
               })
               .catch((error) => {
                    console.log(error.message);
               });
     };
     const handleLogin = (e) => {
          if(user){
               toast.error("user already logged in");
           }
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const email = form.get("email");
          const password = form.get("password");

          setErrorMessage("");
          // if(user.email !== email && user.password !== password){
          //      return alert("User login failed..! Invalid email or password");
          // }
          // if(user.email !== email) {
          //      return alert("Please enter a valid email");
          // }
          // if(user.password !== password) {
          //      return alert("Please enter a valid password");
          // }

          // user sign-in using email && password
          signIn(email, password)
               .then((result) => {

                    toast.success("user sign-in successfully...");
          
                    navigate(location?.state ? location.state : "/");
               })
               .catch((error) => {
                    setErrorMessage(
                         "User login failed..! Invalid email or password"
                    );
               });
     };

     return (
          <div>
               <p className="text-3xl font-bold mb-6 text-center text-[#fcb900]">
                    Login Page
               </p>
               <form onSubmit={handleLogin} className="w-4/5 md:w-1/2 mx-auto">
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input
                              type="text"
                              name="email"
                              ref={emailRef}
                              placeholder="Email"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control relative">
                         <label className="label">
                              <span className="label-text">Password</span>
                         </label>
                         <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              className="input input-bordered"
                              required
                         />
                         <label className="label mt-3">
                              <a
                                   href="#"
                                   className="label-text-alt link link-hover"
                              >
                                   Forgot password?
                              </a>
                         </label>
                         <span
                              className="text-xl absolute top-[40%] right-4"
                              onClick={() => setShowPassword(!showPassword)}
                         >
                              {showPassword ? (
                                   <FiEye></FiEye>
                              ) : (
                                   <FiEyeOff></FiEyeOff>
                              )}
                         </span>
                    </div>
                    <h3>
                         {errorMessage && (
                              <p className="text-red-600 pt-1">
                                   {errorMessage}
                              </p>
                         )}
                    </h3>
                    <div className="form-control mt-6">
                         <button className="btn text-white bg-[#ff6900]">
                              Login
                         </button>
                    </div>

                    <div className="form-control w-[300px] mx-auto text-center mt-6">
                         <button
                              onClick={handleGoogleSignIn}
                              type="button"
                              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg btn inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                         >
                              <svg
                                   className="w-4 h-4 mr-2"
                                   aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="currentColor"
                                   viewBox="0 0 18 19"
                              >
                                   <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                              </svg>
                              Sign in with Google
                         </button>
                    </div>
               </form>
               <p className="text-center py-4">
                    Do not Have An Account ?
                    <Link
                         className="text-green-500 font-bold hover:underline ml-1"
                         to="/register"
                    >
                         Sign Up
                    </Link>
               </p>
          </div>
     );
};

export default Login;
