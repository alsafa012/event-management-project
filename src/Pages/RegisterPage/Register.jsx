import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
     const [showPassword, setShowPassword] = useState(false);

     const { createUser } = useContext(AuthContext);

     const handleRegister = (e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          // const name = form.get("name")
          // const photo = form.get("photo")
          const email = form.get("email");
          const password = form.get("password");

          console.log("register", email, password);

          // checking the password
          if (password.length < 6) {
               alert("Please enter at least 6 character password");
               return;
          }
          // if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password))
          else if (
               !/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)
          ) {
               alert(
                    "Please enter a password with at least one uppercase letter"
               );
               return;
          }

          //  else if (!checkbox) {
          //      setRegisterError("Please accept our terms and conditions");
          //      return;
          // }

          // create a new user
          createUser(email, password)
               // if(password.length > 6)

               .then((result) => {
                    console.log(result.user);
                    alert("successfully registered");
               })
               .catch((error) => {
                    console.error(error);
                    alert(error.message);
               });
     };
     return (
          <div>
               <p className=" text-lg md:text-3xl font-bold mb-6 text-center">
                    Register your account
               </p>

               <form onSubmit={handleRegister} className="w-4/5 md:w-1/2 mx-auto">
                    {/* <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Photo URL</span>
                         </label>
                         <input
                              type="text"
                              name="photo"
                              placeholder="Photo URL"
                              className="input input-bordered"
                              required
                         />
                    </div> */}
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input
                              type="text"
                              name="email"
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
                         
                              <span
                                   className="text-xl absolute top-[60%] right-4"
                                   onClick={() =>
                                        setShowPassword(!showPassword)
                                   }
                              >
                                   {showPassword ? (
                                        <FiEye> </FiEye>
                                   ) : (
                                        <FiEyeOff></FiEyeOff>
                                   )}
                              </span>
                         
                    </div>
                    <div className="form-control mt-6">
                         <button className="btn btn-primary">Register</button>
                    </div>
               </form>
               <p className="text-center py-4">
                    Already Have An Account ?
                    <Link
                         className="text-green-500 font-bold hover:underline ml-1"
                         to="/login"
                    >
                         Login
                    </Link>
               </p>
          </div>
     );
};

export default Register;
