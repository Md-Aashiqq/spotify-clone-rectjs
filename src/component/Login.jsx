import React from 'react'
import "../css/Login.css"
import {loginUrl} from "./spotify"

function Login() {
    return (
        
        <div className="login__container">
       
             {/* Spotify logo */}
      {/* login button  */}
      <img src='https://imgix.bustle.com/uploads/image/2018/10/5/32a337c4-a6e9-4c0e-b512-010bb98e0049-spotify-logo.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70' alt='dfdf' />
        <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login
