import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
     console.log(card);
     const {id, name, image, description, price } = card;

     return (
          <div className="">
               <div className="flex flex-col shadow-lg rounded-lg p-2">
                    
                         <img className="w-full h-[200px] rounded-lg" src={image} alt="Categories" />
               
                    <div className="flex flex-col px-3 py-3 space-y-3 rounded-b-md ">
                         <p className="flex grow">
                              <span className="text-sm font-medium rounded-md p-1">
                                   {name}
                              </span>
                         </p>

                         <p className="h-[50px] w-full font-semibold text-xl">
                              {description}
                         </p>
                    </div>
               <Link to={`/category/${id}`}>
               <button className="btn bg-[#F87147] text-white">See Details</button>
               </Link>
               </div>
          </div>
     );
};

export default Cards;
