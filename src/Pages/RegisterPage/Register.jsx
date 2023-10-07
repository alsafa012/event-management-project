import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Register = () => {

        const {createUser} = useContext(AuthContext)


     const handleRegister = (e)=>{
          e.preventDefault();
          const form = new FormData(e.currentTarget)
          // const name = form.get("name")
          // const photo = form.get("photo")
          const email = form.get("email")
          const password = form.get("password")
          
          console.log("register", email, password)



          // create a new user
          createUser(email,password)
          .then(result=>{
               console.log(result.user)
               alert('successfully registered')
          })
          .catch(error=>{
               console.error(error);
               alert(error.message)
          })
     }
     return (
          <div>
               <p className="text-3xl font-bold mb-6 text-center">
                    Register your account
               </p>

               <form onSubmit={handleRegister} className="w-1/2 mx-auto">
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
