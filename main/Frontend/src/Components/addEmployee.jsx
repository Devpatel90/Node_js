import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function addEmployee() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [city,setCity] = useState("");
    const [department,setDep] = useState("");
    const [role,setRole] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async()=>{
        await axios.post("http://localhost:1111/addEmployee", { name,email,phone,city,department,role })
        .then((res)=>{
          alert(res.data.message);
        })
        setName(" ")
        setEmail(" ")
        setPhone(" ")
        setCity(" ")
        setDep(" ")
        setRole(" ")

        navigate("/viewEmployee")
    }


  return (
    <>
    <Navbar/>   
    <div>
        <div class="container">
    <div class="shadow-lg" style={{marginTop:"100px", padding:"90px"}}>
      <div class="card-header bg-primary text-white text-center">
        <h3>Employee Detail Form</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullName" placeholder="Enter full name" onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="phone" placeholder="Enter phone number" onChange={(e)=>setPhone(e.target.value)} required/>
            </div>
            <div class="col-md-6">
              <label for="address" class="form-label">City</label>
              <input type="text" class="form-control" id="city" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)} required/>
            </div>
            <div class="col-md-6">
              <label for="department" class="form-label">Department</label>
              <select class="form-select" id="department" onChange={(e)=>setDep(e.target.value)} required>
                <option selected disabled>Select Department</option>
                <option>HR</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="role" class="form-label">Role</label>
              <select class="form-select" id="role" onChange={(e)=>setRole(e.target.value)} required>
                <option selected disabled>Select Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>
          </div>
          <div class="text-end mt-4">
            <button type="button" onClick={handleSubmit} class="btn btn-success px-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )

}
