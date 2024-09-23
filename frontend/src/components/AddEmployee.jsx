import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = ({ fetchEmployees, setShowAdd }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [designation, setDesignation] = useState('');
    const [date_of_joining, setDateOfJoining] = useState('');

    const addEmployee = async () => {
        await axios.post('http://localhost:5000/api/employees', {
            name,
            salary,
            designation,
            date_of_joining,
            role_id: 1 
        });
        fetchEmployees();
        setShowAdd(false);
    };

    return (
        <div className="mb-3">
            <h3>Add Employee</h3>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
            <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
            <input type="date" value={date_of_joining} onChange={(e) => setDateOfJoining(e.target.value)} required />
            <button onClick={addEmployee}>Add</button>
        </div>
    );
};

export default AddEmployee;