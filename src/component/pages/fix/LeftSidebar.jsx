import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSideBar = () => {
  const location = useLocation();
  const setActiveClass = (e) => {
    if (location.pathname === e) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <Fragment>
      <div className="side-bar">
        <div className="nav-outer scroll_custom">
          <ul className="nav-bar">
            <li className={setActiveClass("/dashboard")}>
              <Link to="/dashboard">
                <i className="mdi mdi-buffer"></i>Dashboard
              </Link>
            </li>
            <li className={setActiveClass("/question")}>
              <Link to="/question">
                <i className="mdi mdi-buffer"></i>Question Managment
              </Link>
            </li>
            <li className={setActiveClass("/subject")}>
              <Link to="/subject">
                <i className="mdi mdi-buffer"></i>Subject Managment
              </Link>
            </li>
            <li className={setActiveClass("/user")}>
              <Link to="/user">
                <i className="mdi mdi-buffer"></i>Users
              </Link>
            </li>
            <li className={setActiveClass("/quation")}>
              <Link to="/quation">
                <i className="mdi mdi-buffer"></i>Quation
              </Link>
            </li>
            <li className={setActiveClass("/set")}>
              <Link to="/set">
                <i className="mdi mdi-buffer"></i>Set Managment
              </Link>
            </li>
            <li className={setActiveClass("/payments")}>
              <Link to="/payments">
                <i className="mdi mdi-buffer"></i>Payment
              </Link>
            </li>
            <li className={setActiveClass("/plan")}>
              <Link to="/plan">
                <i className="mdi mdi-buffer"></i>Plan Management
              </Link>
            </li>
            <li className={setActiveClass("/subadmin")}>
              <Link to="/subadmin">
                <i className="mdi mdi-buffer"></i>Sub Admin
              </Link>
            </li>
            <li className={setActiveClass("/general-settings")}>
              <Link to="/general-settings">
                <i className="mdi mdi-buffer"></i>General Settings
              </Link>
            </li>
            <li className={setActiveClass("/feedback")}>
              <Link to="/feedback">
                <i className="mdi mdi-buffer"></i> Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftSideBar;
