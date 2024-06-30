import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Editmanageexam = () => {
  return (
    <Fragment>
      <div className="main-container">
        <div className="small-container">
          <div className="main-title">
            <Link to="/manage-exam">
              <h1>
                <i className="mdi mdi-chevron-left"></i>Edit Exam{" "}
              </h1>
            </Link>
          </div>

          <div className="col-bx-bottom">
            <div className="form">
              <div className="form-element">
                <div className="col-6">
                  <label>Exam Name </label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Exam Type</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Subject </label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>question</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Question Set </label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option A</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option B </label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Option C</label>
                  <input type="text" name="" />
                </div>
              </div>

              <div className="form-element">
                <div className="col-6">
                  <label>Option D</label>
                  <input type="text" name="" />
                </div>
                <div className="col-6">
                  <label>Answer</label>
                  <input type="text" name="" />
                </div>
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

export default Editmanageexam;
