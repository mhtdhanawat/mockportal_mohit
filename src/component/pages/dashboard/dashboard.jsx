import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Fragment>
      
<div className="main-container dashboard">
        <div className="main-title">
          <h1>Dashboard</h1>
        </div>
        <div className="cellgrid">
          <ul className="grid-4">
            <li>
              <div className="card">
                <div className="mini-icon">
                  <span className="mdi mdi-account-heart"></span>
                </div>
                <div className="text-white">
                  <h5>1,530</h5>
                  <h6>Active Users Free</h6>
                </div>
              </div>
            </li>
            <li>
              <div className="card org ">
                <div className="mini-icon">
                  <span className="mdi mdi-account-heart"></span>
                </div>
                <div className="text-white">
                  <h5>1,530</h5>
                  <h6>Active Users Premium </h6>
                </div>
              </div>
            </li>
            <li>
              <div className="card  pink">
                <div className="mini-icon">
                  <span className="mdi mdi-cash"></span>
                </div>
                <div className="text-white">
                  <h5>587</h5>
                  <h6>Regular Users</h6>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="mini-icon">
                  <span className="mdi mdi-account-group"></span>
                </div>
                <div className="text-white">
                  <h5>1,530</h5>
                  <h6>Total Users</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="modal-window-wrapper ">
        <div className="modal-window filter-dashboard ">
          <div className="title">
            <h2>Filter</h2>
          </div>
          <Link className="popup-close"></Link>
          <div className="popup-form-outer">
            <div className="form">
              <div className="form-element">
                <select>
                  <option> Select Country </option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UAE</option>
                  <option>Argentina</option>
                </select>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>From</label>
                  <input
                    type="text"
                    name=""
                    className="datepicker date"
                    placeholder="Enter Date"
                  />
                </div>
                <div className="col-6">
                  <label>To</label>
                  <input
                    type="text"
                    name=""
                    className="datepicker date"
                    placeholder="Enter Date"
                  />
                </div>

                <div className="clear"></div>
              </div>

              <div className="form-element">
                <div className="col-6 ">
                  <Link className="unfill common-btn">Clear Filter</Link>
                </div>
                <div className="col-6">
                  <Link className="common-btn">Filter </Link>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>

    )
}

export default Dashboard