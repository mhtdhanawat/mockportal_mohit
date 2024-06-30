import React, { Fragment, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LeftSideBar from "./LeftSidebar";
import { TokenConstextApi } from "../../context/GlobalContex";
import { ThemeContext } from "../../context/ThemeContext";
import { lightTheme } from "../constant/Theme";
import { Button } from "@mui/material/Button";

const Header = () => {
  const navigate = useNavigate();

  // const {handleLogOut} = useContext(TokenConstextApi)

  const handleLogOut = () => {
    localStorage.removeItem("sessToken");
    localStorage.removeItem("customer_id");
    navigate("/");
  };

  const [showPopUp, setPopUp] = useState(false);
  const handleShowPopUp = () => {
    setPopUp(!showPopUp);
  };

  const [notificationPopup, setnotificationPopUp] = useState(false);
  const handleNotification = () => {
    setnotificationPopUp(!notificationPopup);
  };

  const [slider, setSlider] = useState(false);
  const handleSlider = () => {
    let body = document.querySelector("body");
    if (slider) {
      body.classList.remove("slide");
      setSlider(false);
    } else {
      body.classList.add("slide");
      setSlider(true);
    }
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className="top-bar">
        <div className="left-section">
          <div onClick={handleSlider} className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <img src="images/logo.png" alt="logo" />
          </div>
        </div>
        <div>
          {/* <button variant="contained" color="primary" onClick={toggleTheme}>
            {theme === lightTheme
              ? "Switch to Dark Theme"
              : "Switch to Light Theme"}
          </button> */}
        </div>
        <div className="right-section">
          <ul>
            <li>
              <div className="notification">
                <div
                  className="navdrop-box custom-tooltip"
                  data-name="Notification"
                  onClick={handleNotification}
                >
                  <i className="mdi mdi-bell-ring"></i>
                  <span className="count-notification">21</span>
                </div>
                {notificationPopup ? (
                  <div className="dropdown-menu broadcast-notification show">
                    <div className="notification-header">
                      <h5>Notifications</h5>
                      <p>
                        you have <span>21</span> unread Messages{" "}
                      </p>
                    </div>
                    <div className="notification-message">
                      <ul>
                        <li>
                          <Link>
                            <i className="mdi mdi-bell"></i>New Notification
                            Message
                            <span>11:00PM</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i className="mdi mdi-bell"></i>New Notification
                            Message
                            <span>11:00PM</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i className="mdi mdi-bell"></i>New Notification
                            Message
                            <span>11:00PM</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="notification-footer">
                      <Link href="#">View All Notifications</Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </li>
            <li>
              <div className="profile-settings">
                <div className="navdrop-box">
                  <img
                    onClick={handleShowPopUp}
                    src="images/thumbnail.jpg"
                    alt="thumbnail"
                  />
                </div>

                {showPopUp ? (
                  <div className="dropdown-menu show">
                    <h5>Jhon Smith</h5>
                    <Link to="/setting">Account settings</Link>
                    <div className="dropdown-menu-footer">
                      <button onClick={handleLogOut}> Logout </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      {slider ? <LeftSideBar /> : null}
    </Fragment>
  );
};

export default Header;
