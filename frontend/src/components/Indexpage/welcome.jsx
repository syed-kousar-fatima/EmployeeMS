import React from "react";
import './welcome.scss';
import { Link } from "react-router-dom";
function Welcome() {
    return (
        //         <div className="welcome">
        //             <div className="welcome-para">
        //                 An Employee Management System is developed using
        //                 React JS & MySQL by using this application, Admin can add the Managers
        //                 in the application based on the departments, and Managers can manage the Employee Data
        //                 like his Salary, his complete details, etc.
        //                 <div>
        //                     <img src="./image.png" alt="employee" />
        //                 </div>


        //             </div>


        //   </div>
        //   <div>

        //    <button>EMPLOYEE</button>
        //    <button>ADMIN</button>

        // </div>
        <div className="wel">
            <div className="welcome">
                <div className="welcome-para">
                <h3>Welcome to Employee Management System</h3>
                <br/>
                <br/>
                    An Employee Management System is developed using  by React JS & MySQL by using this application, Admin can add the Managers
                    in the application based on the departments, and Managers can manage the Employee Data.                like his Salary, his complete details, etc.
                </div>
                <div>
                    <img src="./images.jpeg" alt="employee" height={"300px"} width={"400px"}/>
                </div>
            </div>
            
            <div className="display">
            <strong>Login us</strong>
                <div className="btn"> 
                    <button type="button"><Link to="./employee-dashboard">Employee</Link></button>
                    <button type="button" ><Link to="./admin-dashboard">Admin</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Welcome;