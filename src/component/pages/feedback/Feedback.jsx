import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

export default function Feedback() {
  // const [field, setFeild] = useState({
  //   textarea: null,
  // });

  // const handleFields = (e) => {
  //   setFeild({
  //     ...field,
  //     [e.target.name]: e.target.value,
  //   });

  //   console.log(field);
  // };

  // const handleSubmit = () => {
  //   if (!field.textarea) {
  //     toast("Please Enter Your Suggestion");
  //   }
  // };

  const [showPlus, setShowPlus] = useState(false);
  const handlePlusOpen = () => {
    setShowPlus(true);
  };
  const handlePlusClose = () => {
    setShowPlus(false);
  };
  return (
    <>
      <div className="main-container">
        <div className="main-title">
          <h1>Feedback</h1>
        </div>

        <div className="table-wrapper">
          <table className="datatable-sorting" cellSpacing="0">
            <thead>
              <tr>
                <th className="no-sort fixed-w">Date</th>
                <th>Name</th>
                <th>Type</th>
                <th>Query</th>
                <th>Status</th>
                <th className="table-child no-sort">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/feedback-detail">12-05-2019</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">John</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">Lorem Ipsum</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
                  </Link>
                </td>
                <td>
                  <Link to="/feedback-detail">
                    <span className="status-active">Responded</span>
                  </Link>
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/feedback-detail"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      href="#"
                      onClick={handlePlusOpen}
                      className="custom-tooltip"
                      data-name="Reply"
                    >
                      <span className="mdi  mdi-reply"></span>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/feedback-detail">12-07-2018</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">John</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">Lorem Ipsum</Link>
                </td>
                <td>
                  <Link to="/feedback-detail">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
                  </Link>
                </td>
                <td>
                  <Link to="/feedback-detail">
                    <span className="status-waiting">Pending</span>
                  </Link>
                </td>
                <td>
                  <div className="action-wrap">
                    <Link
                      to="/feedback-detail"
                      className="custom-tooltip"
                      data-name="View"
                    >
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      href="#"
                      onClick={handlePlusOpen}
                      className="custom-tooltip"
                      data-name="Reply"
                    >
                      <span className="mdi  mdi-reply"></span>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showPlus ? (
        <Formik
          initialValues={{
            reply: "",
          }}
          validate={(values) => {
            const errors = {};

            if (
              !values.reply 
              // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.reply)
            ) {
              errors.reply = !values.reply
                ? "Required"
                : "Invalid reply address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              toast(JSON.stringify(values, null, 2));
            }, 400);
            console.log(values);
              setSubmitting(false);
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
            <div className="modal-window-wrapper modal-wrapper-visible">
              <div className="modal-window add-user modal-window-visible modal-window-visible1">
              <form onSubmit={handleSubmit}>
                  <div className="title">
                    <h2>Reply</h2>
                  </div>
                  <Link
                    onClick={handlePlusClose}
                    className="popup-close"
                  ></Link>
                  <div className="popup-form-outer">
                    <div className="form-element">
                      <p>
                        <strong>John Appleased</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut
                      </p>
                    </div>
                    <div className="form-element">
                      <label>Reply</label>
                      <textarea
                        name="reply"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.reply}
                      >
                      </textarea>
                        {errors.reply && touched.reply && errors.reply}
                    </div>

                    <div className="form-element">
                      <div className="col-6">
                        {/* <Link
                          onClick={handleSubmit}
                          className=" common-btn"
                          href="#"
                        >
                          Submit{" "}
                        </Link> */}
                        <button className=" common-btn" type="submit" disabled={isSubmitting}>
                          Save
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
    </>
  );
}
