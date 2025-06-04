import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const notify = () => toast("Login Successful!");

  const handleSubmit = async () => {
    await axios.post("http://localhost:1111/login", { email, password })
    .then((res) => {
      alert(res.data.message);
    if (res.data.code == 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else if (res.data.code == 100) {
        navigate('/register');
      }else{
        navigate('/');
      }
    })
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card bg-white">
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="d-grid">
              <button type="button" onClick={handleSubmit} className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-3 mb-0">
            Don’t have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  </div>

    </>

    
  )
}
