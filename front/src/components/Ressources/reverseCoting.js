import React from 'react';

const ReverseCoting = (cote) => {
    
    const pourcentageA = (1/cote)*100
    const pourcentageB = 100-pourcentageA
    const coteB = 1/pourcentageB*100
    
    return (coteB);
}
 
export default ReverseCoting;