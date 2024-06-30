import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Questionmanagement = () => {

  return (
    <Fragment>
      <div className="main-container dashboard">
        <div className="main-title">
          <h1>Question Managment</h1>
        </div>
        <div className="cellgrid">
          <ul className="grid-3">
            <li>
              <Link to="/add-question" className="card">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>100</h5>
                  <h6>Add Question</h6>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/mange-question" className="card org ">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>200</h5>
                  <h6>Mange Question</h6>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/regular-user" className="card  pink">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>700</h5>
                  <h6>Regular Users</h6>
                </div>
              </Link>
            </li>
          </ul>

          <ul className="grid-3">
            <li>
              <Link to="/add-exame" className="card">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>400</h5>
                  <h6>Add Exame</h6>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/manage-exam" className="card org ">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>500</h5>
                  <h6>Manage Exam </h6>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/all-exam" className="card  pink">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>600</h5>
                  <h6>All Exam Type</h6>
                </div>
              </Link>
            </li>
          </ul>

          {/* <ul className="grid-3">
                <li>
                   <Link to="regular-users.html" className="card  pink">
                      <div className="mini-icon">
                        <span className="mdi mdi-cash"></span>
                      </div>
                      <div className="text-white">                    
                        <h5>700</h5>
                        <h6>Regular Users</h6>
                      </div>                   
                  </Link>
                </li>         
              </ul>  */}
        </div>
      </div>
    </Fragment>
  );
};

export default Questionmanagement;
