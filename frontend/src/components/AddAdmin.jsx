import React, { useState } from 'react';
import axios from 'axios';

const AddAdmin = ({ fetchAdmins, setShowAdd }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [designation, setDesignation] = useState('');
    const [date_of_joining, setDateOfJoining] = useState('');

    const addAdmin = async () => {
        await axios.post('http://localhost:5000/api/admins', {
            name,
            salary,
            designation,
            date_of_joining,
            role_id: 2 // Assuming role_id for admin
        });
        fetchAdmins();
        setShowAdd(false);
    };

    return (
        <div className="mb-3">
            <h3>Add Admin</h3>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
            <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
            <input type="date" value={date_of_joining} onChange={(e) => setDateOfJoining(e.target.value)} required />
            <button onClick={addAdmin}>Add</button>
        </div>
    );
};

export default AddAdmin;