import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCards = ({ data }) => {
     const [toggle, setToggle] = useState(false);
     const handleToggle = () => {
          setToggle(!toggle);
     };

     return (
          <div>
               <div className="flex flex-col shadow-lg rounded-lg p-2">
                    <img
                         className="w-[200px] h-[200px] mx-auto rounded-lg object-fill"
                         src={data.image}
                         alt="Categories"
                    />

                    <div className="flex flex-col py-3 space-y-3 rounded-b-md ">
                         <p className="flex grow">
                              <span className="text-sm font-medium rounded-md">
                                   {name}
                              </span>
                         </p>

                         <p className="h-[50px] w-full font-semibold text-xl">
                              {data.description}
                         </p>
                    </div>
                    <div className="flex justify-between items-center">
                         <p className="text-xl font-medium">
                              Price: ${data.price}
                         </p>
                         <Link>
                              <button
                                   onClick={handleToggle}
                                   className="btn bg-[#ff6900] text-white"
                              >
                                   {toggle ? "ADDED" : "ADD TO CART"}
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default ShoppingCards;
