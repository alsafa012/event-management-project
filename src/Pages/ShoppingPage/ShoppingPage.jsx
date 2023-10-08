import React from "react";
import { useLoaderData } from "react-router-dom";
import ShoppingCards from "./ShoppingCards";

const ShoppingPage = () => {
     const shopData = useLoaderData();
     return (
          <div className="grid md:grid-cols-3 gap-5">
               {shopData.map((data) => (
                    <ShoppingCards key={data.id} data={data}>
                        
                    </ShoppingCards>
               ))}
          </div>
     );
};

export default ShoppingPage;
