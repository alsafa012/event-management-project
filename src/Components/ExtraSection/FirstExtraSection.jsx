import React from 'react';
import { GiPartyPopper } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";

const FirstExtraSection = () => {
     return (
          <div>
               <div className="my-5 md:my-14">
               <div>
                    <h2 className="text-center text-3xl font-bold">
                        <span className='text-[#fcb900]'>Hello! </span> We Are an Event Planning Agency
                    </h2>
                    <p className="w-[50%] mx-auto text-center my-5 text-sm font-light">
                         As the premier event planning company in the area, we
                         know that it is not “one size fits all”. Each event and
                         client is unique and we believe our services should be
                         as well. We know that it should be “Can I hire a
                         planner?” not “Can I afford one?”.
                    </p>
               </div>
               <div className="grid gap-5  md:grid-cols-2 lg:grid-cols-4 font-light mx-4 md:mx-auto">
                    <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                         <div className="flex justify-center text-5xl my-2 ">
                              <MdOutlineHomeWork></MdOutlineHomeWork>
                         </div>
                         <p >Find the perfect venue for free</p>
                    </div>
                    <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                         <div className="flex justify-center text-5xl my-2 ">
                              <BiCommentDetail></BiCommentDetail>
                         </div>
                         <p>Connect with the best vendor</p>
                    </div>
                    <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                         <div className="flex justify-center text-5xl my-2 ">
                              <FaHandsHelping></FaHandsHelping>
                         </div>
                         <p>Let us help you with the event</p>
                    </div>
                    <div className="text-center space-y-3 shadow-lg py-5 rounded-lg">
                         <div className="flex justify-center text-5xl my-2 ">
                              <GiPartyPopper></GiPartyPopper>
                         </div>
                         <p>Enjoy the party with your friends</p>
                    </div>
               </div>
          </div>
          </div>
     );
};

export default FirstExtraSection;
{/* <div className="min-h-[300px] ">
               <div>
                    <h2 className="text-center text-3xl">
                         Hello! We Are an Event Planning Agency
                    </h2>
                    <p className="w-[50%] mx-auto text-center my-5">
                         As the premier event planning company in the area, we
                         know that it’s not “one size fits all”. Each event and
                         client is unique and we believe our services should be
                         as well. We know that it should be “Can I hire a
                         planner?” not “Can I afford one?”.
                    </p>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center space-y-3">
                         <div className="flex justify-center text-3xl lg:text-4xl">
                              <MdOutlineHomeWork></MdOutlineHomeWork>
                         </div>
                         <p >Find the perfect venue for free</p>
                    </div>
                    <div className="text-center space-y-3">
                         <div className="flex justify-center text-3xl lg:text-4xl">
                              <BiCommentDetail></BiCommentDetail>
                         </div>
                         <p>Connect with the best vendor</p>
                    </div>
                    <div className="text-center space-y-3">
                         <div className="flex justify-center text-3xl lg:text-4xl">
                              <FaHandsHelping></FaHandsHelping>
                         </div>
                         <p>Let us help you with the event</p>
                    </div>
                    <div className="text-center space-y-3">
                         <div className="flex justify-center text-3xl lg:text-4xl">
                              <GiPartyPopper></GiPartyPopper>
                         </div>
                         <p>Enjoy the party with your friends</p>
                    </div>
               </div>
          </div> */}