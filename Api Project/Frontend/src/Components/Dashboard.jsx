import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Dashboard() {
  const navigate = useNavigate();
  const [admins, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);    // Loading state
  const [error, setError] = useState(null);        // Error state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      axios.get('http://localhost:1111/admins')
        .then((res) => {
          setAdmin(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError('Failed to load admin data.');
          setLoading(false);
        });
    }
  }, [navigate]);

  // Example handleDelete (you can enable this if you want)
  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:1111/admins/${id}`)
  //     .then(() => {
  //       setAdmin(admins.filter((admin) => admin._id !== id));
  //     });
  // };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="p-4" style={{ flexGrow: 1 }}>
          <h2>Welcome, Admin!</h2>
          <div className="container py-5">
            <h2 className="text-center mb-4">Admin List</h2>

            {/* Loading spinner */}
            {loading && <div className="text-center my-4">Loading...</div>}

            {/* Error message */}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            {/* Admin Table */}
            {!loading && !error && (
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle text-center shadow-sm bg-white">
                  <thead className="table-primary">
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((e, i) => (
                      <tr key={e._id}>
                        <td>{i + 1}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.role}</td>
                        <td>
                          <button className="btn btn-sm btn-warning me-1" onClick={() => navigate(`/editAdmin/${e._id}`)}>Edit</button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(e._id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
