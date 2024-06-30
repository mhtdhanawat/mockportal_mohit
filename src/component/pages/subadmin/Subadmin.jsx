import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";
import { Formik } from "formik";
// import { toast } from "react-toastify";

export default function Subadmin() {
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
          <h1>Admin List</h1>
          <div className="clear"></div>
        </div>

        <div className="table-wrapper">
          <table className="datatable-sorting" cellSpacing="0">
            <thead>
              <tr>
                <th className="fixed-w no-sort">Sr.No</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Admin Level</th>
                <th className="table-child no-sort">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/admin-details">1</Link>{" "}
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>John Appleased</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>johnappleased@gmail.com</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">Sub admin</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/admin-details"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      to="/edit-subadmin"
                      className="custom-tooltip"
                      data-name="Edit"
                    >
                      <span className="mdi  mdi-lead-pencil"></span>
                    </Link>
                    <Link
                      href="3"
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
                  <Link to="/admin-details">2</Link>{" "}
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>John Appleased</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>johnappleased@gmail.com</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">Sub admin</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/admin-details"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
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
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/admin-details">3</Link>{" "}
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>John Appleased</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>johnappleased@gmail.com</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">Sub admin</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/admin-details"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
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
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/admin-details">4</Link>{" "}
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>John Appleased</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">
                    <p>johnappleased@gmail.com</p>
                  </Link>
                </td>
                <td>
                  <Link to="/admin-details">Sub admin</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/admin-details"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination-wrapper">
          <Link className="paginate_btn previous disabled">Previous</Link>
          <Link className="paginate_btn current">1</Link>
          <Link className="paginate_btn ">2</Link>
          <Link className="paginate_btn next">Next</Link>
        </div>
      </div>

      <div className="add-more-container">
        <Link
          href="#"
          onClick={handlePlusOpen}
          className="custom-tooltip"
          data-name="Add new Set "
        >
          <span className="mdi">+</span>
        </Link>
      </div>

      {showPlus ? (
        <Formik
          initialValues={{
            set_name: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.set_name) {
              errors.set_name = !values.set_name ? "Required" : "";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   toast(JSON.stringify(values, null, 2));
            // }, 400);
            setSubmitting(false);
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
                  <div className="title">
                    <h2>Add new Set</h2>
                  </div>
                  <Link
                    onClick={handlePlusClose}
                    href="#"
                    className="popup-close"
                  ></Link>
                  <div className="popup-form-outer">
                    <div className="form-element">
                      <label>Enter Set Name</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.set_name}
                        name="set_name"
                      />
                      {errors.set_name && touched.set_name && errors.set_name}
                    </div>

                    <div className="form-element">
                      <div className="col-6">
                        <button
                          className=" common-btn"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit{" "}
                        </button>
                      </div>
                      <div className="col-6">
                        <Link
                          onClick={handlePlusClose}
                          href="#"
                          className="unfill common-btn"
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
