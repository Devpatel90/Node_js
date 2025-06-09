// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// export default function ViewEmployee() {
//   const [managers, setManagers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get('http://localhost:1111/managers')
//       .then((res) => {
//         setManagers(res.data);
//       })
//       .catch((err) => {
//         console.log('Error fetching data:', err);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:1111/managers/${id}`);
//     setManagers(managers.filter((emp) => emp._id !== id));
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="d-flex">
//         <Sidebar />
//         <div className="container mt-5">
//           <h2 className="text-center mb-4">Managers List</h2>
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover text-center shadow bg-white">
//               <thead className="table-primary">
//                 <tr>
//                   <th>#</th>
//                   <th>UserName</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Password</th>
//                   <th>Role</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {managers.map((e, i) => (
//                   <tr key={e._id}>
//                     <td>{i + 1}</td>
//                     <td>{e.username}</td>
//                     <td>{e.email}</td>
//                     <td>{e.phone}</td>
//                     <td>{e.password}</td>
//                     <td>{e.role}</td>
//                     <td>
//                       <button
//                         className="btn btn-sm btn-warning me-2"
//                         onClick={() => navigate(`/editEmployee/${e._id}`)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => handleDelete(e._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//                 {managers.length === 0 && (
//                   <tr>
//                     <td colSpan="7">No Managers Found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function ViewManager() {
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    try {
      const res = await axios.get('http://localhost:1111/managers');
      setManagers(res.data);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const updatedStatus = currentStatus === 'active' ? 'deactive' : 'active';
      await axios.patch(`http://localhost:1111/managers/${id}`, { status: updatedStatus });
      setManagers(
        managers.map((m) =>
          m._id === id ? { ...m, status: updatedStatus } : m
        )
      );
    } catch (err) {
      console.log('Status toggle failed:', err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="container mt-4">
          <h2 className="text-center mb-3">Managers List</h2>
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Password</th> */}
                <th>Role</th>
                <th>AdminId</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((e, i) => (
                <tr key={e._id}>
                  <td>{i + 1}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  {/* <td>{e.password}</td> */}
                  <td>{e.role}</td>
                  <td>{e.adminId}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => navigate(`/editEmployee/${e._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => toggleStatus(e._id, e.status)}
                    >
                      {e.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
              {managers.length === 0 && (
                <tr>
                  <td colSpan="8">No Managers Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
