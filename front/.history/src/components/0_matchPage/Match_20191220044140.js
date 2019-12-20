import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'

const Matches = () => {
    //hooks to get all matches & match by id & sport
    const [match, setMatch] = useState([])
    const [idMatch, setIdMatch] = useState([])
    const [football, setFootball] = useState([])
    const [basketball, setBasketball] = useState([])

    //get all matches 
    const getMatches = () => {
        axios.get('http://localhost:5000/match')
        .then(res => setMatch(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMatches()
    }, [])

    //get matches by id
    const getIdMatch = () => {
        axios.get('http://localhost:5000/match/:id')
        .then(res => setIdMatch(res.data))
        .catch((err) => console.log(err))
    }

    // get football matches
    const getFootball = () => {
          axios.get('http://localhost:5000/match/football')
          .then(res => setFootball(res.data))
          .catch((err) => console.log(err))
      }

    const getBasketball = () => {
        axios.get('http://localhost:5000/match/basketball')
    }

    return(
        <div>
            <div>
            <h1>Les matchs du jour</h1>
            </div>
            <div>
                <h2>Sport</h2>
            </div>
            <div>
                {match.map( e => {
                    <div>
                        <p>{match.homeTeam}</p>
                        <p>{match.logo_homeTeam}</p>
                        <p>{match.awayTeam}</p>
                        <p>{match.logo_awayTeam}</p>
                        <p>{match.odd_home}</p>
                        <p>{match.odd_draw}</p>
                        <p>{match.resultat_match}</p>
                    </div>
                })}
                    
                ))}
            </div>
            <div>
                <p>{idMatch.homeTeam}</p>
                <p>{idMatch.logo_homeTeam}</p>
                <p>{idMatch.awayTeam}</p>
                <p>{idMatch.logo_awayTeam}</p>
                <p>{idMatch.odd_home}</p>
                <p>{idMatch.odd_draw}</p>
                <p>{idMatch.resultat_match}</p>
            </div>
        </div>
    )

}

export default Matches