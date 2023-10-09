import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneDuotone } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoIssueReopened } from "react-icons/go";

const SecondExtraSection = () => {
     return (
          <div className="container mx-auto my-10">
               <div className="text-center space-y-3 mb-8">
               <h3 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-[]">Testimonials</h3>
               <p className="font-light">HAPPY CLIENTS ABOUT US</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 w-[70%] mx-auto text-center gap-5">
                    <div className="shadow-2xl p-5 rounded-xl">
                         <p className="text-lg font-semibold">
                              I invited these event planner to arrange a
                              bachelor party for my best friend!
                         </p>
                         <div className="space-y-2 mt-5">
                              <img
                                   className="w-[80px h-[80px] rounded-full mx-auto"
                                   src="https://unicaevents.ancorathemes.com/wp-content/uploads/2015/10/testimonial-3-150x150.jpg"
                                   alt=""
                              />
                              <p className="font-medium">Smith</p>
                         </div>
                    </div>
                    <div className="shadow-2xl p-5 rounded-xl">
                         {" "}
                         <p>
                              My family and I are beyond happy to have them plan
                              our wedding day.
                         </p>
                         <div className="space-y-2 mt-5">
                              <img
                                   className="mx-auto w-[80px h-[80px] rounded-full"
                                   src="https://unicaevents.ancorathemes.com/wp-content/uploads/2015/10/testimonial-2-150x150.jpg"
                                   alt=""
                              />
                              <p>Lisa</p>
                         </div>
                    </div>
                    <div className="shadow-2xl p-5 rounded-xl">
                         {" "}
                         <p>
                              My family and I are beyond happy to have them plan
                              our wedding day.
                         </p>
                         <div className="space-y-2 mt-5">
                              <img
                                   className="mx-auto w-[80px h-[80px] rounded-full"
                                   src="https://unicaevents.ancorathemes.com/wp-content/uploads/2015/10/testimonial-1-150x150.jpg"
                                   alt=""
                              />
                              <p>Hema</p>
                         </div>
                    </div>
                    <div className="shadow-2xl p-5 rounded-xl">
                         {" "}
                         <p>
                              Perfect decoration and perfect buffet for my
                              little sister's birthday party!
                         </p>
                         <div className="space-y-2 mt-5">
                              <img
                                   className="mx-auto w-[80px h-[80px] rounded-full"
                                   src="https://unicaevents.ancorathemes.com/wp-content/uploads/2015/10/testimonial-4-150x150.jpg"
                                   alt=""
                              />
                              <p>Samantha</p>
                         </div>
                    </div>

                    {/* about us */}
               </div>
          </div>
     );
};

export default SecondExtraSection;
