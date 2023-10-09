const Banner = () => {
     return (
          <div className="">
               <div>
                    <img
                         className="bg-cover w-full h-[500px] object-cover relative opacity-95"
                         src="https://i.ibb.co/7R5Qvbt/Birthday-Party-min.webp"
                         alt=""
                    />
                    <div className="absolute top-[25%] md:top-32 lg:top-[30%] left-[24%] text-center w-[50%] space-y-5">
                         <div
                              className="text-3xl md:text-4xl
                         lg:text-6xl font-bold"
                         >
                              <p
                                   data-aos="slide-down"
                                   className="text-[#fcb900]"
                              >
                                   We create
                              </p>
                              <p data-aos="slide-up" className="text-[#FFFFFF]">You........</p>
                              <p data-aos="slide-left" className="text-[#FFFFFF]">Celebrate</p>
                         </div>
                         <div>
                              <p className="text-[#FFFFFF] font-light">
                                   Planning a Wedding, Proposal, or Event in our
                                   busy city is not so easy and it takes skills
                                   (and time) to make it all look easy-going.
                              </p>
                         </div>
                         <button className="px-12 py-2 text-sm rounded-lg md:text-xl border-none text-white bg-[#ff6900]">Book An Appointment</button>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
