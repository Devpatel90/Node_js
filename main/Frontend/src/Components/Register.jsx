import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:1111/register",{name, email, password})
        .then((res) => {
            // console.log(res.data);
            alert(res.data.message);
            navigate('/');
        })
        setName('');
        setEmail(''); 
        setPassword('');
    };

  return (
    <div>
        <div className="container" id='a1'>
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card bg-white">
          <h2 className="text-center mb-4">Create Account</h2>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} placeholder="Create a password" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="d-grid">
              <button type="button" onClick={handleSubmit} className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-3 mb-0">
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
