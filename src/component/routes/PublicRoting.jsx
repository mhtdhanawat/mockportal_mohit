import React, { Fragment } from "react";
// import { Navigate } from "react-router-dom";

const PublicRoting = ({ Component }) => {
  // const isToken = localStorage.getItem('Token');
  // if(!isToken){
  //   return <Navigate to={"/login"} />
  // }
  return (
    <Fragment>
      <Component />
    </Fragment>
  );
};

export default PublicRoting;
