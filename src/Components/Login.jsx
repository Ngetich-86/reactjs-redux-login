import React from 'react'
import {useDispatch} from "react-redux"
import { login } from '../Features/User' 
const Login = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(login({
        name: "annastacia", age: 21,email:"ngetich@gmail.com",gender:"undefined"
    }))}}>Login</button>


<button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    {/* <button onClick={()=>{
        dispatch(logout())}}>Logout</button> */}
    </div>
  )
    
}

export default Login