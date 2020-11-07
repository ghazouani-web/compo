import React from "react";

const Adress = () => {
    const adress={country:' tunis ',
                city :'bizerte',
                street:'666 street corniche',
                ZipCode:'7000',
                 }

    return(
 <>
       <h1> 
         country: {adress.country}
      </h1>
       <h1> 
         city: {adress.city}
       </h1>
       <h1> 
         street: {adress.street}
       </h1>
       <h1> 
         ZIP code: {adress.ZipCode}
       </h1>

 </>
 );
 
};
export default Adress;