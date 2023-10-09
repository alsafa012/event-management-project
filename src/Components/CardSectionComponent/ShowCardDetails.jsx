import { useState } from "react";

const ShowCardDetails = ({ cardDetails }) => {
     const [toggle, setToggle] = useState(false);
     const handleToggle = () => {
          setToggle(!toggle);
     };
     const {
          id,
          name,
          image,
          description,
          price,
          location,
          duration,
          includes,
     } = cardDetails;
     return (
          <div>
               <div className="">
                    <div className="flex flex-col shadow-lg rounded-lg p-2">
                         <img
                              className="mx-auto w-[350px] object-fill h-[350px] rounded-lg"
                              src={image}
                              alt="Categories"
                         />

                         <div className="flex flex-col rounded-b-md font-semibold text-xl w-[350px]  text-left py-3 px-2 space-y-1">
                              <span className="">Price: ${price}</span>
                              <p>Location: {location}</p>
                              <p>Duration: {duration}</p>
                              <p>Extra-Include:{includes}</p>
                         </div>

                         <button onClick={handleToggle} className="btn bg-[#ff6900] text-white">
                              {toggle ? "Booked" : "Book now"}
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default ShowCardDetails;
