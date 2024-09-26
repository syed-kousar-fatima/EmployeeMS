import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEmployee from './AddEmployee';

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);
        fetchEmployees();
    };

    return (
        <div>

            <h2>Employee List</h2>
            <button className="btn btn-primary" onClick={() => setShowAdd(true)}>Add Employee</button>
            {showAdd && <AddEmployee fetchEmployees={fetchEmployees} setShowAdd={setShowAdd} />}
            <table className="table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Date of Joining</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.employeeid}>
                            <td>{emp.employeeid}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.date_of_joining}</td>
                            <td>
                                <button className="btn btn-warning me-2"> Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteEmployee(emp.employeeid)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeDashboard;