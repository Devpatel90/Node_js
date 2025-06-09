import React, { use,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        await axios.post("http://localhost:1008/register",{name,email,password}).then((res) => {
            alert(res.data.message);
            navigate("/dashboard");
        })

        setName(" ");
        setEmail(" ");
        setPassword(" ");
    }

  return (
    <div>
        <h1>Register</h1>
        <input type="text" name="name" placeholder='Enter Your Name' value={name} id="" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <input type="text" name="email" placeholder='Enter Email' value={email} id="" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
        <input type="text" name="password" placeholder='Enter Password' value={password} id="" onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <button onClick={handleSubmit}>Register</button>
    </div>
  )
}
