import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <>
      <div className="main-container">
        <div className="main-title">
          <h1>Subject Managment List</h1>
        </div>
        <div className="col-12 flexbox">
          <div className="col-4 total-payment received-payment">
            <h4>Total Payments Received</h4>
            <div className="imgbox">
              <img src="images/money-bag.svg" alt="#" />
            </div>
            <div className="total">5,587</div>
          </div>
          <div className="col-8 total-payment">
            <div className="top-section">
              <h4 className="sub-title">Last 5 Transactions</h4>
            </div>
            <div className="table-wrapper">
              <table>
                <tr>
                  <th>Transaction Id</th>
                  <th>Amount</th>
                  <th>Transaction Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>
                    <Link to="/payment-details">#123</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">$85</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">12-05-2019</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">
                      <span className="status status-active">Successful</span>
                    </Link>
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link
                        to="/payment-details"
                        className="custom-tooltip"
                        data-name="View"
                      >
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/payment-details">#123</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">$85</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">12-05-2019</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">
                      <span className="status status-active">Successful</span>
                    </Link>
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link
                        to="/payment-details"
                        className="custom-tooltip"
                        data-name="View"
                      >
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/payment-details">#123</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">$85</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">12-05-2019</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">
                      <span className="status status-active">Successful</span>
                    </Link>
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link
                        to="/payment-details"
                        className="custom-tooltip"
                        data-name="View"
                      >
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/payment-details">#123</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">$85</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">12-05-2019</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">
                      <span className="status status-active">Successful</span>
                    </Link>
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link
                        to="/payment-details"
                        className="custom-tooltip"
                        data-name="View"
                      >
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/payment-details">#123</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">$85</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">12-05-2019</Link>
                  </td>
                  <td>
                    <Link to="/payment-details">
                      <span className="status status-active">Successful</span>
                    </Link>
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link
                        to="/payment-details"
                        className="custom-tooltip"
                        data-name="View"
                      >
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="whitebox">
          <div className="top-section">
            <h4 className="sub-title">Earnings</h4>
            <div className="filters">
              <ul className="duration">
                <li>
                  <Link href="#">Daily</Link>
                </li>
                <li>
                  <Link href="#">Weekly</Link>
                </li>
                <li className="active">
                  <Link href="#">Monthly</Link>
                </li>
                <li>
                  <Link href="#">Yearly</Link>
                </li>
                <div className="clear"></div>
              </ul>
              <div
                className="filter-section custom-tooltip"
                data-name="Filter"
                onclick="common_popup('.filter-dashboard')"
              >
                <i className="mdi mdi-filter"></i>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="chart-section">
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>

      <div className="modal-window-wrapper ">
        <div className="modal-window filter-dashboard ">
          <div className="title">
            <h2>Filter</h2>
          </div>
          <Link onclick="close_pop();" href="" className="popup-close"></Link>
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
                    readonly
                  />
                </div>
                <div className="col-6">
                  <label>To</label>
                  <input
                    type="text"
                    name=""
                    className="datepicker date"
                    placeholder="Enter Date"
                    readonly
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="form-element">
                <div className="col-6 ">
                  <Link href="#" className="unfill common-btn">
                    Clear Filter
                  </Link>
                </div>
                <div className="col-6">
                  <Link className="common-btn" href="">
                    Filter{" "}
                  </Link>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
