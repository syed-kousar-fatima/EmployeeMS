import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEmployee from './AddEmployee';

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete('http://localhost:5000/api/employees/${id}');
        fetchEmployees();
    };


    const startEditing = (employee) => {
        setEditingEmployee({ ...employee });
    };

    const handleEditChange = (e) => {
        setEditingEmployee({ ...editingEmployee, [e.target.name]: e.target.value });
    };

    const saveEdit = async () => {
        try {
            await axios.put(http://localhost:5000/api/employees/${editingEmployee.employeeid}, editingEmployee);
                setEditingEmployee(null);
            fetchEmployees();
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    const cancelEdit = () => {
        setEditingEmployee(null);
    };

    return (
        <div>


            <h2>Employee List</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAdd(true)}>Add Employee</button>
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
                            <td>
                                {editingEmployee && editingEmployee.employeeid === emp.employeeid ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={editingEmployee.name}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    emp.name
                                )}
                            </td>
                            <td>
                                {editingEmployee && editingEmployee.employeeid === emp.employeeid ? (
                                    <input
                                        type="number"
                                        name="salary"
                                        value={editingEmployee.salary}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    emp.salary
                                )}
                            </td>
                            <td>
                                {editingEmployee && editingEmployee.employeeid === emp.employeeid ? (
                                    <input
                                        type="text"
                                        name="designation"
                                        value={editingEmployee.designation}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    emp.designation
                                )}
                            </td>
                            <td>
                                {editingEmployee && editingEmployee.employeeid === emp.employeeid ? (
                                    <input
                                        type="date"
                                        name="date_of_joining"
                                        value={editingEmployee.date_of_joining}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    emp.date_of_joining
                                )}
                            </td>
                            <td>
                                {editingEmployee && editingEmployee.employeeid === emp.employeeid ? (
                                    <>
                                        <button className="btn btn-success me-2" onClick={saveEdit}>Save</button>
                                        <button className="btn btn-secondary" onClick={cancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-warning me-2" onClick={() => startEditing(emp)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(emp.employeeid)}>Delete</button>
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

export default EmployeeDashboard;