import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const sidebarStyle = {
        width: '200px',
        backgroundColor: '#34495e',
        color: 'white',
        height: '100vh',
        paddingTop: '20px',
        position: 'fixed',
        top: '50px', // below navbar
        left: 0
    };

    const linkStyle = {
        display: 'block',
        padding: '15px',
        color: 'white',
        textDecoration: 'none'
    };

    const linkHoverStyle = {
        backgroundColor: '#2c3e50'
    };

    return (
        <div style={sidebarStyle}>
            <Link to="/addemp" style={linkStyle}>Add Employee</Link>
            <Link to="/viewemp" style={linkStyle}>View Employee</Link>
        </div>
    );
}

export default Sidebar;
