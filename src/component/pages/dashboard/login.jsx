import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_CHECK_SERVICE } from "../../services/Apis";

const Login = () => {
  const navigate = useNavigate();
  const [field, setField] = useState({
    username: "",
  });
  const [error, setError] = useState("");

  // const validateMobileNumber = (number) => {
  //   const mobilePattern = /^[0-9]{10}$/;
  //   return mobilePattern.test(number);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length > 10) {
      setError("Mobile number should not exceed 10 digits");
    } else {
      setField({
        ...field,
        [name]: numericValue.slice(0, 10), 
      });
      setError(""); 
    }
  };
  const handleSubmit = () => {
    const { username } = field;
    if (username.length !== 10) {
      setError("Please enter exactly 10 digits");
    } else {
      LOGIN_CHECK_SERVICE(field)
        .then((response) => {
          const otp = response[0]?.msg?.split(".")[1];
          if (otp) {
            console.log("Your OTP:", otp);
            navigate("/otp", { state: field });
          } else {
            console.error("Failed to retrieve OTP");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="alert alert_inverse show-alert ">
          <div className="error-icon">
            <img src="images/error.png" alt="error" />
          </div>
          <div className="error-msg">
            <span>Your Mobile No.</span>
            <p id="alertShowMessage"></p>
          </div>
          <div className="clear"></div>
        </div>

        <div className="left-section"></div>
        <div className="right-section">
          <div className="formbox">
            <div className="logo ">
              <img src="images/logo.png" alt="logo" />
            </div>
            <div className="login-bx ">
              <div className="title">
                <h2>Welcome to Mock Portal</h2>
              </div>
              <div className="form">
                <div className="form-element">
                  <label>MOBILE NUMBER </label>
                  <input
                    type="text"
                    id="number"
                    onChange={(e) => handleChange(e)}
                    value={field.username}
                    name="username"
                  />
                  <div className="error-msg"></div>
                  <div className="error-msg">{error}</div>

                  <div className="form-element">
                    <div className="col-6">
                      <label className="checkbox leftlabel">
                        <input type="checkbox" />
                        <i className="input-helper"></i>Remember me
                      </label>
                    </div>
                    <div className="col-6 forgot-password">
                      <Link to={"/forget"} className="reset-btn">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="submit-wrap">
                    <button type="submit" onClick={handleSubmit}>
                      Get Otp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
