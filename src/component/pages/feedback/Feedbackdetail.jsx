import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Feedbackdetail = () => {
  return (
    <Fragment>
      <div className="main-container">
        <div className="small-container user-info">
          <div className="main-title">
            <Link to="/feedback">
              <h1>
                <i className="mdi mdi-chevron-left"></i> Details
              </h1>
            </Link>
            <div className="filters"></div>
            <div className="col-bx-top">
              <div className="user-details">
                <div className="repeatedrow">
                  <h3>
                    <span className="mdi mdi-account"></span>Profile Information
                  </h3>
                  <div className="rowbody">
                    <div className="listview">
                      <dl className="list">
                        <dt>Name</dt>
                        <dt>John Alex</dt>
                      </dl>
                      <dl className="list">
                        <dt>Date</dt>
                        <dt>12-05-2019</dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-bx-bottom">
              <div className="repeatedrow">
                <h3>
                  <span className="mdi mdi-playlist-edit"></span>Query Details
                </h3>
                <div className="rowbody">
                  <p>
                    <strong>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer
                    </strong>
                    <span className="time">12-05-2019</span>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                    <span className="time">12-05-2019</span>
                  </p>
                </div>
              </div>
              <div className="repeatedrow">
                <div className="rowbody">
                  <p>
                    <strong>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer
                    </strong>
                    <span className="time">12-05-2019</span>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                    <span className="time">12-05-2019</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Feedbackdetail;
