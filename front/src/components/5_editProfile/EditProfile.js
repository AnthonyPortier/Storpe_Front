import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const EditProfile = () => {

    // edit profile user by id
    const [profile , setProfile] = useState([])
    
    const updateProfile = () => {
        axios.put('https://storp5.herokuapp.com/user/profile/:id')
        .then(res => setProfile(res.data))
        .catch((err) => console.log(err))
    }

    return(
            <div>
                <form onSubmit={updateProfile}>
                <p>{user.pseudo}</p>p>
                <input id="pseudo" name="pseudo" value={profile.pseudo} type="text" onChange={(e) => {setProfile({...profile, pseudo: e.target.value})}}></input>
                <p>{user.firstname}</p>p>
                <input id="firstname" name="firstname" value={profile.firstname} type="text" onChange={(e) => {setProfile({...profile, firstname: e.target.value})}}></input>
                <p>{user.lastname}</p>p>
                <input id="lastname" name="lastname" value={profile.lastname} type="text" onChange={(e) => {setProfile({...profile, lastname: e.target.value})}}></input>
                <p>{user.email}</p>p>
                <input id="email" name="email" value={profile.email} type="text" onChange={(e) => {setProfile({...profile, email: e.target.value})}}></input>
                <p>{user.password}</p>p>
                <input id="password" name="password" value={profile.password} type="text" onChange={(e) => {setProfile({...profile, password: e.target.value})}}></input>
                <button onClick={setProfile}>Edit</button>
                </form>
                <Link to='/Register'>
                <button onClick={setDeleteProfile}>Delete</button>
                </Link>
            </div>
    )
}

export default EditProfile