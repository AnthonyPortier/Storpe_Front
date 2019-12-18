import React from 'react';
import {Card} from 'reactstrap'
import HandleMMRChange from '../Ressources/HandleMMRChange'
import ReverseCoting from '../Ressources/reverseCoting'
import '../1_matchPage/MatchPage.css'


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
        <div className="MatchCards">

            {Object.values(dataBaseMatch).map(x=>
                <Card>
                    <div className="cardBody">
                        <div className="Team">
                            <h3>{x.EquipeDomicile}</h3>
                            {x.cote}
                            victoryHome:  {HandleMMRChange('victory', x.cote)}
                            <br/>
                            DefeatHome:
                            {HandleMMRChange('defeat', x.cote)}
                        </div>
                        
                        <div id="vs">
                            <h2 >VS</h2>    
                        </div>

                        <div className="Team">
                            <h3>{x.EquipeVisiteur}</h3>
                            {ReverseCoting(x.cote)}
                        
                            Visitor Victory: 
                                {HandleMMRChange('victory', ReverseCoting(x.cote))}
                                    <br/>
                            Defeat visitor: 
                            <p> {HandleMMRChange('defeat', ReverseCoting(x.cote))} </p>

                        </div>
                    </div>

                    <div className="effectOnMMR">
                       

                        <div id="MMRVisitor">
                                

                        </div>
                    
                    </div>

                </Card>
                
                )}
        </div>   


    );
}
 
export default MatchPage;