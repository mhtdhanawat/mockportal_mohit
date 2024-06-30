import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_INVOICE_SERVICE } from "../../services/Apis";

const QuotationDetails = () => {
  const [user, setUser] = useState();

  const { detailid } = useParams();
//   console.log(detailid);

  const getDetails = () => {
    GET_INVOICE_SERVICE()
      .then((e) => {
        //    console.log(e);
        const ids = e.map((obj) => obj.id).filter((id) => id === detailid);

        const filteredObjects = e.filter((obj) => ids.includes(obj.id));

        console.log(filteredObjects);

        // const obj = filteredObjects.length > 0 ? filteredObjects[0] : {};
        // console.log(obj);

        setUser(filteredObjects);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  console.log(user, "=====================");

  return (
    <Fragment>
      <div className="main-container">
        <div className="small-container user-info">
          <div className="main-title">
            <Link to="/quation">
              <h1>
                <i className="mdi mdi-chevron-left"></i> Details
              </h1>
            </Link>
          </div>
          <div className="col-bx-top">
            {/* <div className="left-panel">
                <img src="./././public/images/mohit_pic.jpg" />
              </div>  */}
            <div className="user-details">
              <div className="repeatedrow">
                <h3>
                  <span className="mdi mdi-account"></span>Profile Information
                </h3>
                <div className="rowbody">
                    {user &&
                      user.length !== 0 &&
                      user.map((e) => (
                        <div className="listview" >
                          <dl className="list">
                            <dt>Quotation No.</dt>
                            <dt>{e.document_no}</dt>
                          </dl>
                          <dl className="list">
                            <dt>Full Name</dt>
                            <dt>{e.full_name}</dt>
                          </dl>
                          <dl className="list">
                            <dt>Address</dt>
                            <dt>{e.address}</dt>
                          </dl>
                          <dl className="list">
                            <dt>Gst In</dt>
                            <dt>{e.gstin}</dt>
                          </dl>
                          <dl className="list">
                            <dt>Invoice Date</dt>
                            <dt>{e.inv_date}</dt>
                          </dl>
                          <dl className="list">
                            <dt>CNN No.</dt>
                            <dt>{e.cnn_no}</dt>
                          </dl>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuotationDetails;
