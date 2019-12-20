import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
                <button onClick={setProfile}>Edit</button>
                </form>
                <Link to='/Register'>
                <button onClick={setDeleteProfile}>Delete</button>
                </Link>
            </div>
    )
}

export default EditProfile