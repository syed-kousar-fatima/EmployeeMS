import React, { useState, useEffectt } from 'react';
import axios from 'axios';

const EditEmployee = ({ Employee, onCancel, onSave }) => {
    const [editeEmployee, setEditeEmployee] = useState(Employee);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditeEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/admins/${Employee.Employeeid}`, editeEmployee);
            onSave();
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={editeEmployee.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="number" className="form-control" id="salary" name="salary" value={editeEmployee.salary} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="designation" className="form-label">Designation</label>
                <input type="text" className="form-control" id="designation" name="designation" value={editeEmployee.designation} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="date_of_joining" className="form-label">Date of Joining</label>
                <input type="date" className="form-control" id="date_of_joining" name="date_of_joining" value={editeEmployee.date_of_joining} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary me-2">Save</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditEmployee;