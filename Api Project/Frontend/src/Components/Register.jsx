// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// export default function Register() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate();

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:1111/register",{name, email, password})
//         .then((res) => {
//             // console.log(res.data);
//             alert(res.data.message);
//             navigate('/');
//         })
//         setName('');
//         setEmail(''); 
//         setPassword('');
//     };

//   return (
//     <div>
//         <div className="container" id='a1'>
//     <div className="row justify-content-center">
//       <div className="col-md-6 col-lg-5">
//         <div className="card bg-white">
//           <h2 className="text-center mb-4">Create Account</h2>
//           <form>
//             <div className="mb-3">
//               <label for="name" className="form-label">Full Name</label>
//               <input type="text" className="form-control" id="name" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required />
//             </div>
//             <div className="mb-3">
//               <label for="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required />
//             </div>
//             <div className="mb-4">
//               <label for="password" className="form-label">Password</label>
//               <input type="password" className="form-control" id="password" value={password} placeholder="Create a password" onChange={(e)=>setPassword(e.target.value)} required />
//             </div>
//             <div className="d-grid">
//               <button type="button" onClick={handleSubmit} className="btn btn-primary">Register</button>
//             </div>
//           </form>
//           <p className="text-center mt-3 mb-0">
//             Already have an account? <Link to={"/"}>Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//     </div>
//   )
// }





import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate}from "react-router-dom"
import axios from 'axios';

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:1111/register",{username, email, password, phone, role})
        .then((res) => {
            // console.log(res.data);
            alert(res.data.message);
            navigate('/');
        })
        setName('');
        setEmail(''); 
        setPassword('');
        setPhone(''); 
        setRole('');
    };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f7f7f9' }}
    >
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: '420px',
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
          Create Account
        </h2>
        <form>
          {/* Username */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingUsername"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              required
            />
            <label htmlFor="floatingUsername">Username</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
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

          {/* Phone */}
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="floatingPhone"
              placeholder="Phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
            />
            <label htmlFor="floatingPhone">Phone</label>
          </div>

          {/* Role */}
          <div className="form-floating mb-4">
            <select
              className="form-select"
              id="floatingRole"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              defaultValue="Select Role"
              required
            >
              <option value="" disabled>
              Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
            <label htmlFor="floatingRole">Role</label>
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
              Register
            </button>
          </div>

          {/* Already have an account? */}
          <div className="text-center">
            <span style={{ color: '#555' }}>Already have an account? </span>
            <Link to="/" style={{textDecoration:"none",color: '#4f4f4f',fontWeight: '500'}}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}


