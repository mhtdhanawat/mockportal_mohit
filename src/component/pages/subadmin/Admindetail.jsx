import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

const Admindetail = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };
  return (
    <Fragment>
      <div className="main-container">
        <div className="small-container user-info">
          <div className="main-title">
            <Link to="/subadmin">
              <h1>
                <i className="mdi mdi-chevron-left"></i> Details
              </h1>
            </Link>
            <div className="filters">
              <div className="action-wrap">
                <Link
                  to="/edit-subadmin"
                  className="custom-tooltip"
                  data-name="Edit"
                >
                  <span className="mdi  mdi-lead-pencil"></span>
                </Link>
                <Link
                  href="#"
                  onClick={handleDelete}
                  className="custom-tooltip"
                  data-name="Delete"
                >
                  <span className="mdi  mdi-delete"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-bx-top">
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
                      <dt>Email</dt>
                      <dt>johnalex@gmail.com</dt>
                    </dl>
                    <dl className="list">
                      <dt>Admin Level</dt>
                      <dt>
                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null}
    </Fragment>
  );
};

export default Admindetail;
