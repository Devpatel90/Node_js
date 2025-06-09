import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './MNav';
import Sidebar from './MSidebar';
// import AddEmployee from './AddEmployee';
// import ViewEmployee from './ViewEmployee';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '200px', padding: '20px', width: '100%', marginTop: '50px' }}>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <h2>Welcome to Manager Dashboard</h2>
                                <p>This is your main panel where you can manage employees.</p>
                            </div>
                        } />
                        {/* <Route path="/add-employee" element={<AddEmployee />} /> */}
                        {/* <Route path="/view-employee" element={<ViewEmployee />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
