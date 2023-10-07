import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const CardSection = () => {
     const cardInfo =  useLoaderData()
     return (
          <div>
               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto my-10'>
               {
                    cardInfo.map(card=><Cards card={card} key={card.id}></Cards>)
               }
               </div>
          </div>
     );
};

export default CardSection;