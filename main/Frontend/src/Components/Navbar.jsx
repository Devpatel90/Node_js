import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
    <div className='j1'>
     <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">MyApp</a>
      <div className="ms-auto">
        <button className="btn btn-dark"  onClick={()=>navigate("/dashboard")}>Home</button>
      </div>
      <div className="ms-5">
        <button className="btn btn-danger"  onClick={()=>navigate("/")}>Logout</button>
      </div>
    </div>
  </nav>
  </div>
    </>
  )
}
