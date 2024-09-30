import React from "react";
import Welcome from "./welcome";
import Employeeimage from "./image";
import './index.scss';

function Indexpage(){
    return(
        <div className="container1">
            <Employeeimage/>
            <Welcome/>
          
        </div>
    )
}
export default Indexpage;