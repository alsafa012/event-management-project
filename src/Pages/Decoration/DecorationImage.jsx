import React from "react";

const DecorationImage = ({ data }) => {
     const { id, img } = data;
     return (
          <div>
               <div className="">
                    <figure>
                         <img
                         className="w-[450px] h-[350px] rounded-lg object-contain md:object-fill"
                              src={img}
                              alt="Shoes"
                         />
                    </figure>
                  
               </div>
               
          </div>
     );
};

export default DecorationImage;
