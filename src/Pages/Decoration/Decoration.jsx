import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DecorationImage from "./DecorationImage";

const Decoration = () => {
     const decorationData = useLoaderData();
     const [dataLength, setDataLength] = useState(4);

     return (
          <div className="mx-auto container text-center">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 text-center mx-auto w-[85%]">
                    {decorationData.slice(0,dataLength).map((data) => (
                         <DecorationImage
                              key={data.id}
                              data={data}
                         ></DecorationImage>
                    ))}
               </div>
               { 
                    <div className={dataLength === decorationData.length ? "hidden" : "block"}>
                         <button onClick={()=>setDataLength(decorationData.length)} className="btn bg-[#ff6900] px-8 text-white font-medium mt-8">See all</button>
                    </div>
               }
          </div>
     );
};

export default Decoration;
