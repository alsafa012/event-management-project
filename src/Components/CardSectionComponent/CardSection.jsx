import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const CardSection = () => {
     const cardInfo = useLoaderData();
     return (
          <div className="my-14 container mx-auto">
               <div className="text-center w-[50%] mx-auto space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">
                         It’s simple. You have an event to plan and we have{" "}
                         <span className="text-[#fcb900]">the solutions</span>
                    </h2>
                    <p className="font-light">HERE IS HOW WE CAN HELP YOU</p>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mx-2 md:mx-auto">
                    {cardInfo.map((card) => (
                         <Cards card={card} key={card.id}></Cards>
                    ))}
               </div>
          </div>
     );
};

export default CardSection;
