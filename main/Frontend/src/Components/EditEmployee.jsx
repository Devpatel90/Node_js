import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    department: '',
    role: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:1111/employee`)
      .then((res) => {
        const employee = res.data.find(emp => emp._id === id);
        if (employee) {
          setFormData(employee);
        }
      })
      .catch((err) => console.error("Failed to fetch employee", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:1111/employee/${id}`, formData)
      .then((res) => {
        alert(res.data.message);
        navigate("/viewEmployee");
      })
      .catch((err) => {
        alert("Update failed");
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center">Edit Employee</h2>
        <div className="shadow-lg p-4" style={{marginTop:"100px"}}>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Department</label>
                <select name="department" value={formData.department} onChange={handleChange} className="form-select">
                  <option disabled>Select Department</option>
                  <option>HR</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Role</label>
                <select name="role" value={formData.role} onChange={handleChange} className="form-select">
                  <option disabled>Select Role</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Employee</option>
                </select>
              </div>
            </div>
            <div className="text-end mt-4">
              <button type="button" onClick={handleSubmit} className="btn btn-primary px-4">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
