import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm"
      style={{
        width: '250px',
        minHeight: '100vh',
        borderRight: '1px solid #eaeaea',
      }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4 fw-bold" style={{ color: '#4f4f4f' }}>
          Admin Menu
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-2">
          <Link to={"/addManager"} style={{
              backgroundColor: '#4f4f4f',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration:'none'
            }}>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active"
            style={{
              backgroundColor: '#4f4f4f',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '500',
            }}
          >
            Add Manager
          </a>

        </li>
        </Link>
        <Link to={"/viewManager"} style={{
              backgroundColor: '#4f4f4f',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration:'none'
            }}>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active"
            style={{
              backgroundColor: '#4f4f4f',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: '500',
            }}
          >
            View Manager
          </a>

        </li>
        </Link>
        {/* Add more menu items here */}
      </ul>
      <hr />
    </div>
    </>
  );
}
