import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

export default function Planmanagement() {
  const [showDelete , setShowDelete] = useState(false)
  const handleDelete = () => {
    setShowDelete(true)
  }
  return (
    <>
        <div className="main-container">
        <div className="main-title">
          <h1>Plan Management</h1>

          <div className="filters">
            <Link
              to="/subject-set"
              className="filter-section  register_btn custom-tooltip"
              data-name="Subject set"
            >
              {" "}
              Subject set
            </Link>
          </div>
          <div className="clear"></div>
        </div>

        <div className="pricing_sec">
          <ul className="grid-2">
            <li>
              <div className="price-box">
                <div className="price-header">
                  <h4 className="uppercase">Free</h4>
                  <div className="action-wrap">
                    <Link
                      to="/edit-plan"
                      className="custom-tooltip"
                      data-name="Edit"
                    >
                      <span className="mdi  mdi-lead-pencil"></span>
                    </Link>
                    <Link
                      onClick={handleDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </div>
                <div className="price-rate">
                  <h2>
                    <sup>$</sup> <span className="rate">0.0</span>{" "}
                    <small>/ Month</small>
                  </h2>
                  <p className="price-text">
                    It has survived not only five centu but also the leap
                    electronic.
                  </p>
                </div>
                <div className="price-body">
                  <ul className="packages">
                    <li>
                      <i className="mdi mdi-close"></i>Appear at the top of
                      search results.
                    </li>
                    <li>
                      <i className="mdi mdi-close"></i>Get more insight on your
                      stats.
                    </li>
                    <li>
                      <i className="mdi mdi-close"></i>See your rating's
                      breakdown.
                    </li>
                    <li>
                      <i className="mdi mdi-close"></i>See other detailed rating
                      breakdown.
                    </li>
                    <li>
                      <i className="mdi mdi-close"></i>Select more positive
                      comments to be displayed on your profile.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="price-box">
                <div className="price-header">
                  <h4 className="uppercase">Premium</h4>
                  <div className="action-wrap">
                    <Link
                      to="/edit-plan"
                      className="custom-tooltip"
                      data-name="Edit"
                    >
                      <span className="mdi  mdi-lead-pencil"></span>
                    </Link>
                    <Link
                      onClick={handleDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </div>
                <div className="price-rate">
                  <h2>
                    <sup>$</sup> <span className="rate">23.88</span>{" "}
                    <small>/ Yearly</small>
                  </h2>
                  <p className="price-text">
                    It has survived not only five centu but also the leap
                    electronic.
                  </p>
                </div>
                <div className="price-body">
                  <ul className="packages">
                    <li>
                      <i className="mdi mdi-check"></i>Appear at the top of
                      search results.
                    </li>
                    <li>
                      <i className="mdi mdi-check"></i>Get more insight on your
                      stats.
                    </li>
                    <li>
                      <i className="mdi mdi-check"></i>See your rating's
                      breakdown.
                    </li>
                    <li>
                      <i className="mdi mdi-check"></i>See other detailed rating
                      breakdown.
                    </li>
                    <li>
                      <i className="mdi mdi-check"></i>Select more positive
                      comments to be displayed on your profile.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="add-more-container">
        <Link
          to="/add-plan"
          className="custom-tooltip"
          data-name="Add new plan "
        >
          <span className="mdi">+</span>
        </Link>
      </div>

      <div className="modal-window-wrapper ">
        <div className="modal-window small  delete">
          <div className="title">
            <h2>Delete</h2>
          </div>
          <Link onClick={handleDelete} href="#" className="popup-close"></Link>
          <div className="popup-form-outer">
            <p>Are you sure, you want to Delete?</p>
            <div className="form-element">
              <div className="col-6">
                <Link className=" common-btn" href="#">
                  Delete{" "}
                </Link>
              </div>
              <div className="col-6">
                <Link
                  onClick={handleDelete}
                  href="#"
                  className="unfill common-btn"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-window small  block">
          <div className="title">
            <h2>Block</h2>
          </div>
          <Link onClick={handleDelete} href="#" className="popup-close"></Link>
          <div className="popup-form-outer">
            <p>Are you sure, you want to Block?</p>
            <div className="form-element">
              <div className="col-6 ">
                <Link className="common-btn" href="#">
                  Block{" "}
                </Link>
              </div>
              <div className="col-6 ">
                <Link
                  onClick={handleDelete}
                  href="#"
                  className="unfill common-btn"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

{showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null }

    </>
  );
}
