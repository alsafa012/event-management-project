import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCardDetails from "./ShowCardDetails";

const CardDetails = () => {
     const [cardDetails, setCardDetails] = useState({});
     const data = useLoaderData();
     const { id } = useParams();

     useEffect(() => {
          const findData = data.find((card) => card.id === id);
          setCardDetails(findData);
     }, [data, id]);

     return (
          <div className="mx-auto container">
               <div className="mx-auto text-center flex justify-center">
                    <ShowCardDetails
                         cardDetails={cardDetails}
                    ></ShowCardDetails>
               </div>
          </div>
     );
};

export default CardDetails;
