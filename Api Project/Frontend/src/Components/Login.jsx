// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';


// export default function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     await axios.post("http://localhost:1111/login", { email, password })
//     .then((res) => {
//       alert(res.data.message);
//     if (res.data.code == 200) {
//         localStorage.setItem('token', res.data.token);
//         navigate('/dashboard');
//       } else if (res.data.code == 100) {
//         navigate('/register');
//       }else{
//         navigate('/');
//       }
//     })
//     setEmail('');
//     setPassword('');
//   }

//   return (
//     <>
//       <div className="container">
//     <div className="row justify-content-center">
//       <div className="col-md-6 col-lg-5">
//         <div className="card bg-white">
//           <h2 className="text-center mb-4">Login</h2>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required />
//             </div>
//             <div className="mb-4">
//               <label className="form-label">Password</label>
//               <input type="password" className="form-control" id="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required />
//             </div>
//             <div className="d-grid">
//               <button type="button" onClick={handleSubmit} className="btn btn-primary">Login</button>
//             </div>
//           </form>
//           <p className="text-center mt-3 mb-0">
//             Don’t have an account? <Link to={"/register"}>Register</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

//     </>

    
//   )
// }



import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f7f7f9' }}
    >
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: '#333', fontWeight: '600' }}
        >
          Welcome Back
        </h2>
        <form>
          {/* Username or Email */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingUsernameOrEmail"
              placeholder="Username or Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingUsernameOrEmail">Username or Email</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {/* Submit */}
          <div className="d-grid mb-3">
            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
              style={{
                backgroundColor: '#4f4f4f',
                color: '#fff',
                fontWeight: '500',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#333';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4f4f4f';
              }}
            >
              Login
            </button>
          </div>

          {/* Don't have an account? */}
          <div className="text-center">
            <span style={{ color: '#555' }}>Don’t have an account? </span>
                <Link to="/register" style={{textDecoration:"none",color: '#4f4f4f',fontWeight: '500'}}>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
