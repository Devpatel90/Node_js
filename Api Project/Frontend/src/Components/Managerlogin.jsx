import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ManagerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:1111/manager/managerLogin', {
        email,
        password
      });
      if (res.data.code === 200) {
        alert('Login Successful');
        localStorage.setItem('token', res.data.token);
        navigate("/ManagerHome")
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error('Error logging in:', err);
      alert('Error logging in');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '350px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px' }}>Welcome Back Manager</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
