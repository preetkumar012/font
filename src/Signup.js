import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const navigate = useNavigate()
    const handleButton = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method:"post",
            body:JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        if (result) {
            console.log(result);
            alert("register user");
            navigate('/login')
        }
    }
    return (
        <div className='container mx-4 py-4'>
            <h3>sign up page</h3>
            <input type="text" name="password" value={name} placeholder='enter password' onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" name="email" value={email} placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <input type="text" name="password" value={password} placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />

            <button onClick={handleButton}>login</button>
        </div>
    )
}

export default Login