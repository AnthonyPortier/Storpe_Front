import React from 'react'
import axios from 'axios'

const Users = () => {

    // get user by id
    const [user, setUser] = useState([])

    const getUser = () => {
        axios.get('http//localhost:5000/user/profile/:id')
        .then(res => setUser(res.data))
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <p>{user.pseudo}</p>p>
            <p>{user.score}</p>
            <p>{user.daily_bet}</p>
        </div>
    )
}

export default Users