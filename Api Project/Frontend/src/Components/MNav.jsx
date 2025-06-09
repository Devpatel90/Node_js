import React from 'react';

function Navbar() {
    const handleLogout = () => {
        alert("Logout clicked");
    };

    const handleChangePassword = () => {
        alert("Change Password clicked");
    };

    const handleForgotPassword = () => {
        alert("Forgot Password clicked");
    };

    const navbarStyle = {
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        zIndex: 1000
    };

    const buttonStyle = {
        marginLeft: '10px',
        padding: '8px 12px',
        border: 'none',
        backgroundColor: '#3498db',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '4px'
    };

    return (
        <div style={navbarStyle}>
            <div style={{ fontWeight: 'bold' }}>Manager Panel</div>
            <div>
                <button style={buttonStyle} onClick={handleChangePassword}>Change Password</button>
                <button style={buttonStyle} onClick={handleForgotPassword}>Forgot Password</button>
                <button style={buttonStyle} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
