import React from 'react';


    const HandleMMRChange = (result,cote) => {
        let attributedPoints = 0

        if (result === 'victory'){
            cote>=1.10?
                attributedPoints = cote*10:
                attributedPoints = cote*100-100

        }

        else if (result === 'draw'){


        }

        else if (result === 'defeat'){

            cote>2.60?
                attributedPoints= - 5:

            cote>2.30?
                attributedPoints= - 6:
                

            cote>2.10?
                attributedPoints= - 7:
                
            cote>1.86?
                attributedPoints= - 7:
            
            cote>1.66?
                    attributedPoints= -8:
                    
            cote>1.50?
                    attributedPoints= -10:

            cote>1.3?
                    attributedPoints= -11:

            cote>1.1?
                    attributedPoints= -15: 
                    attributedPoints = 'error'

        }

        else{
            attributedPoints="ERREUR"
        }
        return(attributedPoints
        )
    }
    
    
    

export default HandleMMRChange;