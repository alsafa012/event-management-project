import React from "react";
import { useLoaderData } from "react-router-dom";
import DecorationImage from "./DecorationImage";

const Decoration = () => {
     const decorationData = useLoaderData();

     return (
          <div>
               <div className="grid mx-2 grid-cols-1 md:grid-cols-2">
                    {decorationData.map((data) => (
                         <DecorationImage
                              key={data.id}
                              data={data}
                         ></DecorationImage>
                    ))}
               </div>
          </div>
     );
};

export default Decoration;
