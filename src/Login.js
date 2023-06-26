import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email, setEmail]=useState();
    const[password, setPassword]=useState();
    const navigate=useNavigate()

    const handleButton= async (e)=>{
        
        e.preventDefault();
        console.log(email, password);
        let result=await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email, password}),
            headers:{
                "Content-type":"application/json"
            }
        })
        result=await result.json();
        if(result){
            alert("login user");
            navigate('/dash')
        }
    }
  return ( 
    <div className='container px-5 py-4'>
         <h3>login  page</h3>
        <input type="text" name="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" name="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={handleButton}>login</button>
    </div>
  )
}

export default Login