import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {link} from 'react-router-dom'

const EditProfile = () => {

    // edit profile user by id & delete profile by id
    const [profile , setProfile] = useState([])
    const [deleteProfile, setDeleteProfile] = useState([])
    
    const updateProfile = () => {
        axios.put('/user/profile/:id')
        .then(res => setProfile(res.data))
        .catch((err) => console.log(err))
    }

    const deleteProfile = () => {
        axios.delete('/user/profile/:id')
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        updateProfile()
        deleteProfile()
    }, [])

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