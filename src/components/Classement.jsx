import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Classement = () => {
    
    
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://storp5.herokuapp.com/user')
        .then(res => setUsers(res.data))
    }, [])
    return(
        <div>
            {users
        .sort((a,b)=> parseFloat(b.score)-parseFloat(a.score)) //sorting by ascendant
        .map(x =>{
            return (
            <div className="playerTabScore">
                    {x.firstname} {x.lastname} {x.pseudo} {x.score}
            </div>
        )})
            }
        </div>
    )
}
export default Classement;