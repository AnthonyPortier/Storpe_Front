import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Classement.css'

const Classement = () => {
    
    
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://storp5.herokuapp.com/user')
        .then(res => setUsers(res.data))
    }, [])
    return(
        <div className='Classement-full'>
            <h1 className='Classement-title'>Classement</h1>
            {users
        .sort((a,b)=> parseFloat(b.score)-parseFloat(a.score)) //sorting by ascendant
        .map(x =>{
            return (
            <div className="playerTabScore">
                    {x.firstname} {x.lastname} {x.pseudo} {x.score}
            </div>
        )})
            }

            <Link to='/matchs'><button className='Classement-button' > Retour aux matchs </button></Link>
        </div>
    )
}
export default Classement;