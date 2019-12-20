import React, {useContext, useState} from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'

const Matches = () => {
    //hooks to get all matches
    const [match, setMatch] = useState([])

    //consommation api to get all matches
    const getMatches = () => {
        axios.get('http://localhost:5000/match')
        .then(res => setMatch(res.data))
    }
}