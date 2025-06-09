import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#" style={{ color: '#4f4f4f' }}>
          Admin Panel
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link to="/dashboard" style={{textDecoration:"none"}}>
              <a className="nav-link" href="#" style={{ color: '#4f4f4f', fontWeight: '500' }}>
                Home
              </a></Link>
            </li>
            <li className="nav-item">
              <Link to="/adminPass" style={{textDecoration:"none"}}>
              <a className="nav-link" href="#" style={{ color: '#4f4f4f', fontWeight: '500' }}>
                Change Password
              </a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#4f4f4f', fontWeight: '500' }}>
                Forgot Password
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn"
                
                style={{
                  backgroundColor: '#4f4f4f',
                  color: '#fff',
                  fontWeight: '500',
                  padding: '6px 16px',
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
                <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                Logout
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
