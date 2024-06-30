import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OTP_VERIFY_SERVICE } from "../../services/Apis";
import { toast } from "react-toastify";
import { TokenConstextApi } from "../../context/GlobalContex";

const Otp = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const { state } = useLocation();
  const { setToken } = useContext(TokenConstextApi);
  const { setCsId } = useContext(TokenConstextApi);

  const [showOtp, setShowOtp] = useState(null);

  const otpOut = state.split(".")[1];
  const username = state.match(/\d{10}/)[0];


  useEffect(() => {
    setShowOtp(otpOut);
  });

  const handleChange = (e) => {
    setOtp(e.target.value);
  };


  const handleSubmit = () => {
    if (!otp) {
      alert("Please Enter The Otp");
    } else {
      OTP_VERIFY_SERVICE({
        username: username,
        passwd: otp,
      })
        .then(async (e) => {
          console.log(e[0].id);
          await localStorage.setItem("sessToken", e[0].sessToken);
          await localStorage.setItem("customer_id", e[0].id);

          setCsId(e[0].id)
          setToken(e[0].sessToken);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
  };

  // const storeinLocal = async (e) => {
  //   // console.log(e[0])
  //   let obj = {
  //     sesstoken: e[0].sessToken,
  //   };
  //   setToken(obj)
  //   // await localStorage.setItem("sessToken", JSON.stringify(obj.sesstoken));
  // navigate("/dashboard");

  //   // console.log(e)
  // };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="alert alert_inverse show-alert ">
          <div className="error-icon">
            <img src="images/error.png" alt="error" />
          </div>
          <div className="error-msg">
            <span>Your Otp : {showOtp}</span>
            <p id="alertShowMessage">{}</p>
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
                  <label>Enter The OTP</label>
                  <p>OTP sent to :(+91{username})</p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => handleChange(e)}
                    id="OTP"
                    name="passwd"
                  />
                  <div className="error-msg"></div>
                </div>

                <div className="form-element">
                  <div className="col-6">
                    <label className="checkbox leftlabel">
                      <input type="checkbox" />
                      <i className="input-helper"></i>Remember me
                    </label>
                  </div>
                </div>
                <div className="submit-wrap">
                  <button onClick={handleSubmit} type="submit">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Otp;

////////////////////////////////////////

// import React, { Fragment } from "react";

// const Otp = (props) => {

//   return (
//     <Fragment>
//       <div className="wrapper">
//         <div className="alert alert_inverse show-alert ">
//           <div className="error-icon">
//             <img src="images/error.png" alt="error" />
//           </div>
//           <div className="error-msg">
//             <span>Your Otp</span>
//             <p id="alertShowMessage">OTP</p>
//           </div>
//           <div className="clear"></div>
//         </div>

//         <div className="left-section"></div>
//         <div className="right-section">
//           <div className="formbox">
//             <div className="logo ">
//               <img src="images/logo.png" alt="logo" />
//             </div>
//             <div className="login-bx ">
//               <div className="title">
//                 <h2>Welcome to Mock Portal</h2>
//               </div>
//               <div className="form">
//                 <div className="form-element">
//                   <label>OTP</label>
//                   <input type="text" value="" />
//                   <div className="error-msg"></div>
//                 </div>

//                 <div className="form-element">
//                   <div className="col-6">
//                     <label className="checkbox leftlabel">
//                       <input type="checkbox" />
//                       <i className="input-helper"></i>Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <div className="submit-wrap">
//                   <button type="submit">Sign In</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Otp;
