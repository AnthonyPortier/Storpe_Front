import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

const Profile = () => {

    // get user by id
    const [user, setUser] = useState([])

    const getUser = () => {
        axios.get('https://storp5.herokuapp.com/user/profile/:id')
        .then(res => setUser(res.data))
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user.pseudo}</p>
            <p>{user.score}</p>
            <p>{user.daily_bet}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <Link to='/EditProfile'>
                <button>Edit</button>
            </Link>
        </div>
    );
}

export default Profile;