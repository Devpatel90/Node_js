import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('New Password and Confirm Password do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1111/adminPass', {
        oldPassword,
        newPassword,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h4 className="mb-4" style={{ color: '#4f4f4f', fontWeight: '600' }}>
        Change Password
      </h4>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingOldPassword"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <label htmlFor="floatingOldPassword">Old Password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingNewPassword"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="floatingNewPassword">New Password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingConfirmPassword"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label htmlFor="floatingConfirmPassword">Confirm New Password</label>
      </div>

      <button
        type="button"
        className="btn"
        style={{
          backgroundColor: '#4f4f4f',
          color: '#fff',
          fontWeight: '500',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        onClick={handleChangePassword}
      >
        Change Password
      </button>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}
