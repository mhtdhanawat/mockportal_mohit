import React, { Fragment, useContext, useEffect } from "react";
import Header from "../pages/fix/Header";
import LeftSideBar from "../pages/fix/LeftSidebar";
// import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenConstextApi } from "../context/GlobalContex";

const PrivateRouting = ({ Component }) => {
  // const navigate = useNavigate();
  const { token } = useContext(TokenConstextApi);
  


  const fetchToken = async () => {
    if (!token) {
      // console.log("Token not found");
      // navigate("/");
    } else {
      console.log("Token found:", token);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <Fragment>
      <Header />
      <LeftSideBar />
      <div className="admin-wrapper">
        <Component />
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export const Customer_id = ()=>{

  const {csId} = useContext(TokenConstextApi)
  console.log(csId);
  return csId
  

}

export default PrivateRouting;
