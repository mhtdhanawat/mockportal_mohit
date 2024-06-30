import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <Fragment>
      <div className="wrapper">

        <div className="alert alert_inverse show-alert ">
          <div className="error-icon">
            <img src="images/error.png" alt="error" />
          </div>
          <div className="error-msg">
            <span>Fehler</span>
            <p id="alertShowMessage">E-Mail Adresse ist erforderlich.</p>
          </div>
          <div className="clear"></div>
        </div>

        <div className="left-section"></div>
        <div className="right-section">
          <div className="formbox">
            <div className="forgot-bx-show">
              <div className="title">
                <h2>Forgot Password ?</h2>
              </div>
              <div className="form">
                <div className="form-element">
                  <label>Username/Email</label>
                  <input type="text" />
                  <div className="error-msg"></div>
                </div>
                <div className="form-element">
                  <div className="forgot-password">
                    {
                      <Link to={"/"} className="login-btn">
                        Back to Login
                      </Link>
                    }
                  </div>
                </div>
                <div className="submit-wrap ">
                  {<Link className="common-btn">Reset Password</Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Forget;
