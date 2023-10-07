import React from "react";

const DecorationImage = ({ data }) => {
     const { id, img } = data;
     return (
          <div>
               <div className="card bg-base-100 shadow-xl">
                    <figure>
                         <img
                              src={img}
                              alt="Shoes"
                         />
                    </figure>
                  
               </div>
          </div>
     );
};

export default DecorationImage;
