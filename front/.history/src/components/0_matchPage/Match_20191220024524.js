import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'

const Matches = () => {
    //hooks to get all matches & match by id
    const [match, setMatch] = useState([])
    const [idMatch, setIdMatch] = useState([])

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

    
    
    return(
        <div>
            <h2>FOOTBALL</h2>
            <div>
                {match.map(x =>(
                    <div>
                        <p>{x.homeTeam}</p>
                        <p>{x.logo_homeTeam}</p>
                        <p>{x.awayTeam}</p>
                        <p>{x.logo_awayTeam}</p>
                        <p>{x.odd_home}</p>
                        <p>{x.odd_draw}</p>
                        <p>{x.resultat_match}</p>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    )

}

export default Matches