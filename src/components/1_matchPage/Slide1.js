import React, { useContext, useEffect, useState, useReducer } from 'react'
import {Card, Button} from 'reactstrap'
import axios from 'axios'
import HandleMMRChange from '../Ressources/HandleMMRChange'
import '../1_matchPage/MatchPage.scss'


const Slide1 = () => {

    const [Counter, setCounter] = useState(0)
    const urlDatabase = "xxx"

    const decimal1 = (number)=>{
        return(
        Math.round(number*100)/100
        )}
    
    const switchToGreen = ()=>{
        return("")
    }

    /* 
    const getMatches = async() => {
        await axios.get(urlDatabase)
        .then(res => setMatch(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMatches()
    }, []) */




    const [pronostic, dispatchPronostic] = useReducer(fullfillDatabase, {})

    function fullfillDatabase (pronostic, action){
        
        if (Object.keys(pronostic).length<10){
        return(
            {...pronostic, 
                [action.id]:
                    { "HomeTeam" : action.HomeTeam,
                    "AwayTeam": action.AwayTeam,
                    "PlayerBet" : action.bet,
                    "oddsAtClickTime": action.oddsAtClickTime }
            } 
        )}
        else{
            alert( 'Vous avez déjà atteint le seuil de 10 paris')
            return(pronostic)
        }
    }

    const dataBaseMatch = [
        {   "id": 1,
            "homeTeam": {
                "teamName": "Lille",
                "teamLogo": "https://media.api-football.com/teams/79.png"
            },
            "awayTeam": {
                "teamName": "Montpellier",
                "teamLogo": "https://media.api-football.com/teams/71.png"
            },
            "odds": [
                {
                    "value": "Home",
                    "odd": "1.80"
                },
                {
                    "value": "Draw",
                    "odd": "3.50"
                },
                {
                    "value": "Away",
                    "odd": "5.00"
                }
            ]
        },
        {"id": 2,
            "homeTeam": {
                "teamName": "Metz",
                "teamLogo": "https://media.api-football.com/teams/112.png"
            },
            "awayTeam": {
                "teamName": "Marseille",
                "teamLogo": "https://media.api-football.com/teams/112.png"
            },
            "odds": [
                {
                    "value": "Home",
                    "odd": "4.00"
                },
                {
                    "value": "Draw",
                    "odd": "3.60"
                },
                {
                    "value": "Away",
                    "odd": "1.90"
                }
            ]
        },
        {"id": 3,
            "homeTeam": {
                "teamName": "Angers",
                "teamLogo": "https://media.api-football.com/teams/77.png"
            },
            "awayTeam": {
                "teamName": "Monaco",
                "teamLogo": "https://media.api-football.com/teams/77.png"
            },
            "odds": [
                {
                    "value": "Home",
                    "odd": "3.10"
                },
                {
                    "value": "Draw",
                    "odd": "3.50"
                },
                {
                    "value": "Away",
                    "odd": "2.25"
                }
            ]
        },
        {"id": 4,
            "homeTeam": {
                "teamName": "Nimes",
                "teamLogo": "https://media.api-football.com/teams/92.png"
            },
            "awayTeam": {
                "teamName": "Nantes",
                "teamLogo": "https://media.api-football.com/teams/92.png"
            },
            "odds": [
                {
                    "value": "Home",
                    "odd": "3.90"
                },
                {
                    "value": "Draw",
                    "odd": "3.20"
                },
                {
                    "value": "Away",
                    "odd": "2.10"
                }
            ]
        },
        {   "id": 5,
        "homeTeam": {
            "teamName": "Lille",
            "teamLogo": "https://media.api-football.com/teams/79.png"
        },
        "awayTeam": {
            "teamName": "Montpellier",
            "teamLogo": "https://media.api-football.com/teams/71.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "1.80"
            },
            {
                "value": "Draw",
                "odd": "3.50"
            },
            {
                "value": "Away",
                "odd": "5.00"
            }
        ]
    },
    {"id": 6,
        "homeTeam": {
            "teamName": "Metz",
            "teamLogo": "https://media.api-football.com/teams/112.png"
        },
        "awayTeam": {
            "teamName": "Marseille",
            "teamLogo": "https://media.api-football.com/teams/112.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "4.00"
            },
            {
                "value": "Draw",
                "odd": "3.60"
            },
            {
                "value": "Away",
                "odd": "1.90"
            }
        ]
    },
    {"id": 7,
        "homeTeam": {
            "teamName": "Angers",
            "teamLogo": "https://media.api-football.com/teams/77.png"
        },
        "awayTeam": {
            "teamName": "Monaco",
            "teamLogo": "https://media.api-football.com/teams/77.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "3.10"
            },
            {
                "value": "Draw",
                "odd": "3.50"
            },
            {
                "value": "Away",
                "odd": "2.25"
            }
        ]
    },
    {"id": 8,
        "homeTeam": {
            "teamName": "Nimes",
            "teamLogo": "https://media.api-football.com/teams/92.png"
        },
        "awayTeam": {
            "teamName": "Nantes",
            "teamLogo": "https://media.api-football.com/teams/92.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "3.90"
            },
            {
                "value": "Draw",
                "odd": "3.20"
            },
            {
                "value": "Away",
                "odd": "2.10"
            }
        ]
    },  

    {"id": 9,
        "homeTeam": {
            "teamName": "Metz",
            "teamLogo": "https://media.api-football.com/teams/112.png"
        },
        "awayTeam": {
            "teamName": "Marseille",
            "teamLogo": "https://media.api-football.com/teams/112.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "4.00"
            },
            {
                "value": "Draw",
                "odd": "3.60"
            },
            {
                "value": "Away",
                "odd": "1.90"
            }
        ]
    },
    {"id": 10,
        "homeTeam": {
            "teamName": "Angers",
            "teamLogo": "https://media.api-football.com/teams/77.png"
        },
        "awayTeam": {
            "teamName": "Monaco",
            "teamLogo": "https://media.api-football.com/teams/77.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "3.10"
            },
            {
                "value": "Draw",
                "odd": "3.50"
            },
            {
                "value": "Away",
                "odd": "2.25"
            }
        ]
    },
    {"id": 11,
        "homeTeam": {
            "teamName": "Nimes",
            "teamLogo": "https://media.api-football.com/teams/92.png"
        },
        "awayTeam": {
            "teamName": "Nantes",
            "teamLogo": "https://media.api-football.com/teams/92.png"
        },
        "odds": [
            {
                "value": "Home",
                "odd": "3.90"
            },
            {
                "value": "Draw",
                "odd": "3.20"
            },
            {
                "value": "Away",
                "odd": "2.10"
            }
        ]
    }, ]
        
    
    
        
    const sendPronostic = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/users', pronostic)
        console.log('sending pronostic to db')

    }

    
    return (

    <>  
    {console.log(pronostic)}
    <h2 className='h2-title-foot'>FOOTBALL</h2>
        <div className="MatchCards">
            <Button id="btn-classement">Classement</Button>
            {
            
            
            dataBaseMatch.map(x=>
                
                <Card key={x.id} className="MatchPage-full">
                    <div className="cardBody">
                        <div className="Team">
                            <img alt="" src={x.homeTeam.teamLogo}/>
                            <div className="teamHead">
                                <h3>{x.homeTeam.teamName}</h3>

                                {x.odds[0].odd}
                                
                                                            </div>
                            <div className="MMR">
                            <Button 
                                value={x.awayTeam.teamName}
                                onClick={()=>dispatchPronostic({
                                    id: x.id,
                                    HomeTeam : x.homeTeam.teamName,
                                    AwayTeam : x.awayTeam.teamName,
                                    bet: 1,
                                    oddsAtClickTime: x.odds[2].odd 
                                    })}
                                    
                                    >

                                    Bet for {x.awayTeam.teamName}
                                    
                            </Button>
                                
                                <div className="points">
                                    <p>+ {HandleMMRChange(
                                            'victory',
                                            decimal1(x.odds[0].odd
                                                ))
                                        }
                                    </p>
                                    <p>- {HandleMMRChange(
                                        'defeat',
                                        decimal1(x.odds[0].odd
                                            )
                                        )}
                                    </p>
                                </div>
                                </div>
                        </div>
                        
                        <div id="vs">
                            <h2 >VS</h2>
                            <Button id="draw" value={x.awayTeam.teamName}
                                    onClick={()=>dispatchPronostic({
                                    id: x.id,
                                    HomeTeam : x.homeTeam.teamName,
                                    AwayTeam : x.awayTeam.teamName,
                                    bet: 0,
                                    oddsAtClickTime: x.odds[1].odd 
                                    })}>

                                    Match nul
                                    
                                </Button>
                                    
                        </div>
                        
                        <div className="Team">
                        <img alt="" src={x.awayTeam.teamLogo}/>

                            <div className="teamHead">
                                <h3>{x.awayTeam.teamName}</h3>
                                {decimal1(x.odds[2].odd)}
                            </div>
                            <div className="MMR">
                                <Button onClick={()=>dispatchPronostic({
                                    id: x.id,
                                    HomeTeam : x.homeTeam.teamName,
                                    AwayTeam : x.awayTeam.teamName,
                                    bet: 2,
                                    oddsAtClickTime: x.odds[2].odd 
                                    })}>

                                    Bet for {x.awayTeam.teamName}
                                    
                                </Button>
                                <div className="points">

                                    <p>+ {HandleMMRChange('victory',x.odds[2].odd
)}</p>
                                    <p>- {HandleMMRChange('defeat', x.odds[2].odd)}</p>
                                </div>
                        </div>
                    </div>
                </div>
                </Card>
            )}
                <div className="sideBarRight">
                <div className="match-count"> {Object.keys(pronostic).length>=10?"10":Object.keys(pronostic).length}/10 </div>

                    <form className="div-valider"onSubmit={(e)=>sendPronostic(e)}>
                        <button className="button-validation" type="submit">Valider</button>
                    </form>

                </div>
                
        </div>   

    </>
    );
}


export default Slide1