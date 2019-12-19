import React, {useState} from 'react';
import {Card, Button} from 'reactstrap'
import HandleMMRChange from '../Ressources/HandleMMRChange'
import ReverseCoting from '../Ressources/reverseCoting'
import '../1_matchPage/MatchPage.css'


const MatchPage = () => {
    const [Counter, setCounter] = useState(0)
    const decimal1 = (number)=>{
        return(
        Math.round(number*100)/100
        )}

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
        <div className='MatchPage-full'>
            <h1 className='h1-title'>Les matchs du jours</h1>
                <h2 className='h2-title'>FOOTBALL</h2>
        </div>
        <div className="MatchCards">


            {Object.values(dataBaseMatch).map(x=>
                <Card>
                    <div className="cardBody">
                        <div className="Team">
                            <div className="teamHead">
                                <h3>{x.EquipeDomicile}</h3>
                                {decimal1(x.cote)}
                            </div>
                            <div className="MMR">
                                <Button>
                                    Bet for {x.EquipeDomicile}
                                </Button>
                                <div className="points">
                                    <p>+ {HandleMMRChange('victory', x.cote)}</p>
                                    <p>- {HandleMMRChange('defeat', x.cote)}</p>
                                </div>
                                </div>
                        </div>
                        
                        <div id="vs">
                            <h2 >VS</h2>    
                        </div>
                        
                        <div className="Team">
                            <div className="teamHead">
                                <h3>{x.EquipeVisiteur}</h3>
                                {decimal1(ReverseCoting(x.cote))}
                            </div>
                            <div className="MMR">
                                <Button>
                                    Bet for {x.EquipeVisiteur}
                                </Button>
                                <div className="points">

                                    <p>+ {HandleMMRChange('victory', ReverseCoting(x.cote))}</p>
                                    <p>- {HandleMMRChange('defeat', ReverseCoting(x.cote))}</p>
                                </div>
                        </div>
                    </div>
                </div>
                </Card>
            )}
                <div className="sideBarRight">
                    <button type='submit'>
                        Valider
                    </button>
                
                    <p> {Counter}/10 </p>

                </div>
                
        </div>   

    </>
    );
}
 
export default MatchPage;