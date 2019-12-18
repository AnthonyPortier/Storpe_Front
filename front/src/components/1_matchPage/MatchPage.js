import React from 'react';
import {Card} from 'reactstrap'
import HandleMMRChange from '../Ressources/HandleMMRChange'
import ReverseCoting from '../Ressources/reverseCoting'

const MatchPage = () => {



    const dataBaseMatch = {
            
            1: {id : 1,
            EquipeVisiteur : "Nantes",
            EquipeDomicile : "FcCapucin",
            cote : 3},
            
            2: {id : 2,
            EquipeVisiteur : "nantes2",
            EquipeDomicile : "Fc2",
            cote : 1.4},
    }
    
    return (  
        <>

            {Object.values(dataBaseMatch).map(x=>
                <Card>
                    <div className="cardCote" >
                        cote : ___
                    </div>

                <div className="cardTitle">
                    
                    <h3>{x.EquipeDomicile}</h3>
                    {x.cote}
                    VS
                    {ReverseCoting(x.cote)}

                    <h3>{x.EquipeVisiteur}</h3>


                </div>

                <div className="effectOnMMR">
                    <div id="MMRHome">
                        victoryHome:  {HandleMMRChange('victory', x.cote)}
                        <br/>
                        DefeatHome:
                        {HandleMMRChange('defeat', x.cote)}
                        

                    </div>

                    <div id="MMRVisitor">
                            Visitor Victory: 
                            {HandleMMRChange('victory', ReverseCoting(x.cote))}
                                <br/>
                            visitor Defeat: 
                        <p> {HandleMMRChange('defeat', ReverseCoting(x.cote))} </p>


                    </div>
                
                </div>

                </Card>
                
                )}
        </>   


    );
}
 
export default MatchPage;