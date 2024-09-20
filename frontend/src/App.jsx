
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireToken } from './components/Auth.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from './components/dashboard.jsx';
import Home from './components/home.jsx';
import Employee from './components/employee.jsx';
import AddEmployee from './components/addemployee.jsx';
import EditEmployee from './components/editemployee.jsx';
import Indexpage from './components/Indexpage/index.jsx';
import Profile from './components/profile.jsx';


 
function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Routes>
              <Route path='/index' element={<Indexpage/>}/>
              <Route path="/login" element={<Login/>} />
             <Route path="/signup" element={<Signup/>} />
             
             <Route path='/' element={
                  <RequireToken>
                    <Dashboard/>
                  </RequireToken>
                  }>
                  <Route path='' element={<Home/>}></Route>
                  <Route path='/employee' element={<Employee/>}></Route>
                  <Route path='/profile' element={<Profile/>}></Route>
                  <Route path='/create' element={<AddEmployee/>}></Route>
                  <Route path='/employeeedit/:id' element={<EditEmployee/>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
   
export default App;
  



