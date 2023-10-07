import React from "react";
import Birthday from "../../../assets/birthday-parties-at-the-discovery-center-southern-tier.png";
const Banner = () => {
     // https://i.ibb.co/qpkXM2Y/birthday-parties-at-the-discovery-center-southern-tier.png
     return (
          <div className="">
               {/* <div className="border w-full min-h-[300px]  bg-[url('https://i.ibb.co/qpkXM2Y/birthday-parties-at-the-discovery-center-southern-tier.png')] bg-cover bg-no-repeat"> */}
               <div>
                    <img
                         className="bg-cover w-full h-[500px] object-fill relative opacity-90"
                         src={Birthday}
                         alt=""
                    />
                    <div className="absolute top-[35%] left-[20%] text-center w-[50%]">
                         <div
                              className="text-2xl
                         lg:text-4xl font-bold"
                         >
                              <p className="text-yellow-500">We create</p>
                              <p className="text-[#FFFFFF]">You..........</p>
                              <p className="text-[#FFFFFF]">Celebrate</p>
                         </div>
                         <div>
                              <p className="text-[#FFFFFF]">
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit. Tenetur cupiditate
                                   doloribus 
                                   minus molestiae reprehenderit est.
                                   Repudiandae?
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
