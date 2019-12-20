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
}