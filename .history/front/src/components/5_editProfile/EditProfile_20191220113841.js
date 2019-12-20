import React from 'react'
import axios from 'axios'

const EditProfile = () => {

    // edit profile user by id
    const [profile , setProfile] = useState([])
    
    const updateProfile = () => {
        axios.put('/user/profile/:id')
        .then(res => setProfile(res.data))
        .catch((err) => console.log(err))
    }

    return(
            <div>
                <form onSubmit={updateProfile}>
                <p>{user.pseudo}</p>p>
                <input id="pseudo" name="pseudo" value={profile.pseudo} type="text" onChange={(e) => {setProfile({...profile, pseudo: e.target.value})}}></input>
                    
                    <p>{user.score}</p>
                    <p>{user.daily_bet}</p>
                    <button>Edit</button>
                </form>
            </div>
    )
}