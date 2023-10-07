import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
     return (
          <div>
               <p className="text-3xl font-bold mb-6 text-center">
                    Register your account
               </p>

               <form className="w-1/2 mx-auto">
                    <div className="form-control">
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
                    </div>
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
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Password</span>
                         </label>
                         <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="input input-bordered"
                              required
                         />
          
                    </div>
                    <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
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
