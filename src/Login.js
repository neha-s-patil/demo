import React, { useState } from 'react'
import axios from "axios"
const Login = () => {

    const [userName,setUserName]=useState("");
    const [pass,setPass]=useState("");


    const handleSubmit=async(e)=>{
    
        e.target.preventDefault();

        const res= await axios.post("/api/login",{
            userName,pass
        });

        const token = res.data.token;

        localStorage.setItem("token",token)

        window.location.href= "/home";

    }
  return (
    <form>

        <input placeholder = "UserName" type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
<br></br>
        <input placeholder="Password"  type="text" value={pass} onChange={(e)=> setPass(e.target.value)}/>
        <br></br>
<button type="submit" > login</button>
    </form>
  )
}

export default Login