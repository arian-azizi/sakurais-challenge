import axios from 'axios';
import { response } from 'express';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const tryLogin = (event) => {

        
        
        event.preventDefault();

        axios.post('https://brianhong.xyz/sorapi/login', {
            username: user,
            password: password,
        })

        if (response.data.error) {
            alert('Error');
        } else {
            localStorage.setItem('u', response.data.UID);
            navigate('/');
        }
    }

    return (
        <div>
            <h1>Login/Register</h1>
            <form>
                <input type="text" placeholder="Username" value={user} onChange={(event) => setUser(event.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type='submit' onClick={(event) => tryLogin(event)}>Login</button>
            </form>
        </div>
  )
}

export default LoginPage
