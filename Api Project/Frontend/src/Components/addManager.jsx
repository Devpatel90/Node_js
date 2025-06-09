import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized: Please login first.");
      navigate("/login");
      return;
    }

    axios.post("http://localhost:1111/addManager", {
      username,
      email,
      phone,
      password,
      role,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      alert(res.data.message);
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      navigate("/viewManager");
    })
    .catch((err) => {
      console.error("Error adding manager:", err);
      alert("Failed to add manager. Please try again.");
    });
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="container mt-5 pt-4">
          <div className="card shadow-lg p-4 rounded-4">
            <div className="card-header bg-dark text-white text-center rounded-4 mb-4">
              <h3 className="mb-0 py-2">Add Manager Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Enter userName"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control rounded-3"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control rounded-3"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select rounded-3"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select Role</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                </div>
                <div className="text-end mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn px-4 py-2"
                    style={{ backgroundColor: "#212529", color: "white", borderRadius: "0.5rem" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
