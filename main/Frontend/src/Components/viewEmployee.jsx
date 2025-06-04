import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function viewEmployee() {

  const [employee,setEmployee] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:1111/employee')
    .then((res)=>{
      setEmployee(res.data)
    })
    .catch((err)=>{
      err ? console.log(err) : console.log("Your All Data is Here");
    })
  },[]);

  const handleDelete =async (id)=>{
    await axios.delete(`http://localhost:1111/employee/${id}`)
    .then(()=>{
      setEmployee(employee.filter((emp) => emp._id !== id));
    })
  }

  const navigate = useNavigate();
    
  return (
    <>
    <Navbar/>
    <div>
        <div className="container py-5">
    <h2 className="text-center mb-4">Employee List</h2>
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle text-center shadow-sm bg-white">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Department</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {employee.map((e,i)=>(
          <tr key={e._id}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
            <td>{e.city}</td>
            <td>{e.department}</td>
            <td>{e.role}</td>
            <td>
              <button className="btn btn-sm btn-warning me-1" onClick={() => navigate(`/editEmployee/${e._id}`)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(e._id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
    </div>
    </>
  )
}
