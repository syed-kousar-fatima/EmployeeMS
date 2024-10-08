import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg  navbar-light bg-body-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h2>Employee Management System</h2></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/employee-dashboard">Employee Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin-dashboard">Admin Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;