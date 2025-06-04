import React, { useEffect } from 'react'
import "./Dashboard.css"
import { useNavigate, Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);
  return (
  <>
    <Navbar/>
  <div className="main-content">
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p class="lead">You are successfully logged in.</p>
    </div>
  </div>

  <div className='main2'>
    <div className='b1'>
      <Link to={"/addEmployee"}><button><h3>Add Employee</h3></button></Link>
    </div>
    <div className='b1'>
      <Link to={"/viewEmployee"}><button><h3>View Employee</h3></button></Link>
    </div>
  </div>

    {/* <div>Dashboard</div> */}
    {/* <button onClick={()=>navigate("/")}>Logout</button> */}
    </>
  )
}
