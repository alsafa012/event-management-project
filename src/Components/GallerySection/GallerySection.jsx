import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const GallerySection = () => {
     const { user } = useContext(AuthContext);
     const navigate = useNavigate();
     // const location = useLocation();
     const handleGAllery = () => {
          if (user) {
               navigate("/decorations");
          } else {
               navigate("/login");
               //  <Navigate state={location.pathname} to="/login"></Navigate>
               // return <Navigate state={location.pathname} to="/login"></Navigate>;
          }
     };
     return (
          <div className="text-center space-y-10">
               <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#fcb900]">
                    Our Gallery
               </h2>
               <p className="text-sm font-light">OUR RECENT PROJECTS...!!</p>
               <div className="grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <img
                         className="h-[200px] w-full"
                         src="https://i.ibb.co/rkyNxZz/wedding-gift-etiquette-3.webp"
                         alt=""
                    />
                    <img
                         className="h-[200px] w-full"
                         src="https://i.ibb.co/tc7Ckk5/pexels-cottonbro-studio-6800133.jpg"
                         alt=""
                    />
                    <img
                         className="h-[200px] w-full"
                         src="https://i.ibb.co/PzyVH5H/ideas-for-retirement-party-1024x.webp"
                         alt=""
                    />
                    <img
                         className="h-[200px] w-full"
                         src="https://i.ibb.co/h70cy2K/download.jpg"
                         alt=""
                    />
               </div>

               <div>
                    <p className="text-xl font-light mb-1">
                         See Our{" "}
                         <span className="text-[#fcb900]">Best Events</span>{" "}
                         Gallery!
                    </p>

                    <button
                         onClick={handleGAllery}
                         className="btn bg-[#ff6900] text-white"
                         // className="btn bg-[#cf2e2e] text-white"
                    >
                         {" "}
                         Visit Gallery{" "}
                    </button>
               </div>
          </div>
     );
};

export default GallerySection;
