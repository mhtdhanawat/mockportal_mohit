import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Paymentdetails = () => {
  return (
    <Fragment>
           <div className="main-container">
        <div className="small-container user-info">
          <div className="main-title">
            <Link to="/payments">
              <h1>
                <i className="mdi mdi-chevron-left"></i> Details
              </h1>
            </Link>
          </div>
          <div className="col-bx-top">
            {/* <div className="left-panel">
                <img src="images/thumbnail.png" />
              </div>  */}
            <div className="user-details">
              <div className="repeatedrow">
                <h3>
                  <span className="mdi mdi-account"></span>Profile Information
                </h3>
                <div className="rowbody">
                  <div className="listview">
                    <dl className="list">
                      <dt>Full Name</dt>
                      <dt>John Alex</dt>
                    </dl>

                    <dl className="list">
                      <dt>Gender</dt>
                      <dt>Male</dt>
                    </dl>
                    <dl className="list">
                      <dt>Country</dt>
                      <dt>USA</dt>
                    </dl>
                    <dl className="list">
                      <dt>Avg rating</dt>
                      <dt>
                        <i className="mdi mdi-star fill"></i>
                        <i className="mdi mdi-star fill"></i>
                        <i className="mdi mdi-star fill"></i>
                        <i className="mdi mdi-star fill"></i>
                        <i className="mdi mdi-star"></i>
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-bx-bottom">
            <div className="repeatedrow">
              <h3>
                <span className="mdi mdi-account-card-details"></span>Payment
                info
              </h3>
              <div className="rowbody">
                <div className="listview">
                  <dl className="list">
                    <dt>Status</dt>
                    <dt>
                      <span className="status status-active">Successful</span>
                    </dt>
                  </dl>
                  <dl className="list">
                    <dt>Amount</dt>
                    <dt>$5</dt>
                  </dl>

                  <dl className="list">
                    <dt>Payment Method</dt>
                    <dt>Card</dt>
                  </dl>
                  <dl className="list">
                    <dt>Transaction Date </dt>
                    <dt>1-6-2019</dt>
                  </dl>
                  <dl className="list">
                    <dt>Transaction Time </dt>
                    <dt>9:00AM</dt>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Paymentdetails;
