import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddAdmin from './AddAdmin';
import EditAdmin from './EditAdmin';

const AdminDashboard = () => {
    const [admins, setAdmins] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [editingAdmin,setEditingAdmin] = useState(null);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        const response = await axios.get('http://localhost:5000/api/admins');
        setAdmins(response.data);

    };
    // const fetchAdmins = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/api/admins');
    //         setAdmins(response.data);
    //     } catch (error) {
    //         console.error('Error fetching admins:', error);
    //     }
    // };

    const deleteAdmin = async (id) => {
        await axios.delete(`http://localhost:5000/api/admins/${id}`);
            fetchAdmins();
    };
    // const deleteAdmin = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:5000/api/admins/${id}`);
    //         fetchAdmins();
    //     } catch (error) {
    //         console.error('Error deleting admin:', error);
    //     }
    // };


    const startEditing = (admin) => {
        setEditingAdmin(admin);
    };

    const cancelEditing = () => {
        setEditingAdmin(null);
    };

    const saveEditedAdmin = () => {
        setEditingAdmin(null);
        fetchAdmins();
    };


    return (
          <div>
            <h2>Admin List</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAdd(true)}>Add Admin</button>
            {showAdd && <AddAdmin fetchAdmins={fetchAdmins} setShowAdd={setShowAdd} />}
            <table className="table">
                <thead>
                    <tr>
                        <th>Admin ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Date of Joining</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map(admin => (
                        <tr key={admin.adminid}>
                            <td>{admin.adminid}</td>
                            <td>{admin.name}</td>
                            <td>{admin.salary}</td>
                            <td>{admin.designation}</td>
                            <td>{admin.date_of_joining}</td>
                            <td>
                            {editingAdmin && editingAdmin.adminid === admin.adminid ? (
                                    <EditAdmin 
                                        admin={editingAdmin} 
                                        onCancel={cancelEditing} 
                                        onSave={saveEditedAdmin} 
                                    />
                                ) : (
                                    <>   
                                <button className="btn btn-warning me-2" onClick={()=>startEditing(admin)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteAdmin(admin.adminid)}>Delete</button>
                            </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default AdminDashboard;



