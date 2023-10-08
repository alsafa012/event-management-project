import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShoppingCards from "./ShoppingCards";

const ShoppingPage = () => {
     const shopData = useLoaderData();
     // const [dataLength, setDataLength] = useState(4);
     const [toggle, setToggle] = useState(false);
     return (
          <div className="text-center container mx-auto my-10 md:my-16">
               <div className="grid md:grid-cols-3 gap-5">
                    {/* {shopData.slice(0, dataLength).map((data) => (
                         <ShoppingCards
                              key={data.id}
                              data={data}
                         ></ShoppingCards>
                    ))} */}
                    {toggle
                         ? shopData.map((data) => (
                                <ShoppingCards
                                     key={data.id}
                                     data={data}
                                ></ShoppingCards>
                           ))
                         : shopData
                                .slice(0, 3)
                                .map((data) => (
                                     <ShoppingCards
                                          key={data.id}
                                          data={data}
                                     ></ShoppingCards>
                                ))}
               </div>
               {/* <div className={dataLength===shopData.length && 'hidden'}>
                    <button onClick={()=>setDataLength(shopData.length)} className="btn bg-[#ff6900] px-8 text-white font-medium mt-8">
                         See all
                    </button>
               </div> */}
               <div>
                    <button
                         onClick={() => setToggle(!toggle)}
                         className="btn bg-[#ff6900] px-8 text-white font-medium mt-8"
                    >
                         {toggle ? "see less" : "See all"}
                    </button>
               </div>
          </div>
     );
};

export default ShoppingPage;
