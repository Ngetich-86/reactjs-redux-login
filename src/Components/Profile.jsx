import React from 'react'
import {useSelector} from "react-redux"
const Profile = () => {
    const user = useSelector((state)=>state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
  return (
    <>
    <div style={{ background: themeColor }}>
    <h2>Profile page </h2>
    <p>Users name:{user.name}</p>
    <p>Users age:{user.age} </p>
    <p>Users email:{user.email}</p>
    <p>Users gender:{user.gender}</p>
    </div>
    
    </>
    
  )
}

export default Profile