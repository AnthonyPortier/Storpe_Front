import React from 'react';

const HandlingLeague = () => {

    let score = 1000
    let league = ""

    const result =()=>{
        score < 700?
            league = 'Bronze':
        
        score < 850?
            league = 'Argent':

        score < 1000?
        league = 'Or':

        score < 1200?
            league = 'Platine':

        score < 1400?
            league = 'Diamant':
        //>1400
            league = 'Master'
    }
    result()

    return ( 
 <>       {league}
</>
     );
}
 
export default HandlingLeague;