import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowCardDetails from './ShowCardDetails';

const CardDetails = () => {
     const [cardDetails,setCardDetails]=useState({})
     const data = useLoaderData()
     const {id} = useParams()

     useEffect(()=>{
          const findData = data.find(card=>card.id === id)
          setCardDetails(findData)
     },[data,id])

     return (
          <div>
               <ShowCardDetails cardDetails={cardDetails}></ShowCardDetails>

          </div>
     );
};

export default CardDetails;