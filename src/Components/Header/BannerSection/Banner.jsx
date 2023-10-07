import React from "react";
// import Birthday from "../../../assets/birthday-parties-at-the-discovery-center-southern-tier.png";
const Banner = () => {
     // https://i.ibb.co/qpkXM2Y/birthday-parties-at-the-discovery-center-southern-tier.png
     return (
          <div className="">
               {/* <div className="border w-full min-h-[300px]  bg-[url('https://i.ibb.co/qpkXM2Y/birthday-parties-at-the-discovery-center-southern-tier.png')] bg-cover bg-no-repeat"> */}
               <div>
                    <img
                         className="bg-cover w-full h-[500px] object-cover relative opacity-95"
                         // src={Birthday}
                         // src="https://i.ibb.co/vDbrr75/birthday-party-organizers-in-Mumbai.jpg"
                         // src="https://i.ibb.co/23HBbgK/limage-32773-208-photo.png"
                         src="https://i.ibb.co/7R5Qvbt/Birthday-Party-min.webp"
                         alt=""
                    />
                    <div className="absolute top-[35%] left-[20%] text-center w-[50%] space-y-5">
                         <div
                              className="text-2xl
                         lg:text-6xl font-bold"
                         >
                              <p className="text-[#fcb900]">We create</p>
                              <p className="text-[#FFFFFF]">You..........</p>
                              <p className="text-[#FFFFFF]">Celebrate</p>
                         </div>
                         <div>
                              <p className="text-[#FFFFFF] font-light">
                                   Planning a Wedding, Proposal, or Event in our busy city is not so easy and it takes skills (and time) to make it all look easy-going.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
