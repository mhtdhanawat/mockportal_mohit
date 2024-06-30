import React, { useState } from "react";
import { Formik } from "formik";

import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

export default function User() {
  const [showPlus, setShowPlus] = useState(false);
  const handlePlusOpen = () => {
    setShowPlus(true);
  };
  const handlePlusClose = () => {
    setShowPlus(false);
  };

  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-title">
          <h1>Users Management</h1>
          <div className="filters">
            <div className="search-outer">
              <input
                id="search"
                className="search-box"
                placeholder="Search.."
                type="text"
              />
              <input className="search" value="" type="button" />
            </div>
            <Link
              to="/register_user"
              className="filter-section  register_btn custom-tooltip"
              data-name="Register user"
            >
              {" "}
              Register user{" "}
            </Link>
          </div>
          <div className="clear"></div>
        </div>

        <div className="table-wrapper">
          <table className="datatable-sorting" cellSpacing="0">
            <thead>
              <tr>
                <th className="fixed-w no-sort">Sr.No</th>
                <th>Full Name</th>
                <th>Email id</th>
                <th>Status</th>
                <th className="table-child no-sort">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="#">1</Link>
                </td>
                <td>
                  <Link href="#">Ankit Mishra</Link>
                </td>
                <td>
                  <Link href="#">ankit@gmail.com</Link>
                </td>
                <td>
                  <Link href="#">
                    <span className="status-active">Delivered</span>
                  </Link>
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      href="#"
                      onClick={handleDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="#">2</Link>
                </td>
                <td>
                  <Link href="#">Ankit Mishra</Link>
                </td>
                <td>
                  <Link href="#">ankit@gmail.com</Link>
                </td>
                <td>
                  <Link href="#">
                    <span className="status-active">Delivered</span>
                  </Link>
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      href="#"
                      onClick={handleDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="#">3</Link>
                </td>
                <td>
                  <Link href="#">varun verma</Link>
                </td>
                <td>
                  <Link href="#">varunvermacu@gmail.com</Link>
                </td>
                <td>
                  <Link href="#">
                    <span className="status-active">Activated</span>
                  </Link>
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      href="#"
                      onClick={handleDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="add-more-container">
        <Link
          onClick={handlePlusOpen}
          className="custom-tooltip"
          data-name="Add new User "
        >
          <span className="mdi">+</span>
        </Link>
      </div>

      {showPlus ? (
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = !values.name ? "Required" : "";
            }

            if (
              !values.email ||
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = !values.email
                ? "Required"
                : "Invalid email address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 0);
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,

            /* and other goodies */
          }) => (
            <div class="modal-window-wrapper modal-wrapper-visible">
              <div class="modal-window add-user modal-window-visible modal-window-visible1">
                <form onSubmit={handleSubmit}>
                  <div class="title">
                    <h2>Add new User</h2>
                  </div>
                  <Link
                    onClick={handlePlusClose}
                    href="#"
                    class="popup-close"
                  ></Link>
                  <div class="popup-form-outer">
                    <div class="form-element">
                      <label>Name</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        name="name"
                        class=""
                      />
                      {errors.name && touched.name && errors.name}
                    </div>
                    <div class="form-element">
                      <label>Email</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                      />
                      {errors.email && touched.email && errors.email}
                    </div>

                    <div class="form-element">
                      <div class="col-6">
                        <button
                          class=" common-btn"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit{" "}
                        </button>
                      </div>
                      <div class="col-6">
                        <Link
                          onClick={handlePlusClose}
                          href="#"
                          class="unfill common-btn"
                        >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      ) : null}

      {showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null}
    </>
  );
}
