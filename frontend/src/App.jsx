
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';





function App() {
  return (
    <div className="app">
        <BrowserRouter>
         <Navbar/>
            <Routes>
              <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
              <Route path='/' element={<h1>Welcome to Employee Management System</h1>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;




