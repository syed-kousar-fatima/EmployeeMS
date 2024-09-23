
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Indexpage from './components/Indexpage';





function App() {
  return (
    <div className="app">
        <BrowserRouter>
         <Navbar/>
         <div className='container'>
            <Routes>
              <Route path='/employee-dashboard' element={<EmployeeDashboard/>}/>
              <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
              <Route path='/' element={<Indexpage/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;




