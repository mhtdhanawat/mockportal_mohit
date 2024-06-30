import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Addexam = () => {
  return (
    <Fragment>
            <div className="main-container">
        <div className="small-container">
          <div className="main-title">
            <Link to="/question">
              <h1>
                <i className="mdi mdi-chevron-left"></i>Add question{" "}
              </h1>
            </Link>
          </div>
          <div className="col-bx-bottom">
            <div className="form">
              <div className="form-element">
                <label>Exam Name </label>
                <input type="text" name="" placeholder="Enter Exam Name" />
              </div>

              <div className="form-element">
                <label>Exam Icon </label>
                <div className="upload-img">
                  <Link href="#" className="remove-img">
                    <span className="mdi  mdi-close"></span>
                  </Link>
                  <div className="img-border">
                    <input
                      id="upload"
                      value="Choose a file"
                      className="upload-photo"
                      title=""
                      accept="image/*"
                      // type="file"
                    />
                    <div id="priview_image">
                      <img src="images/thumbnail.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <label>400x400</label>
              </div>

              <div className="form-element space">
                <Link className=" common-btn" href="#">
                  Submit{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Addexam;
