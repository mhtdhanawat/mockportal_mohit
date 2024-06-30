import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Editsubadmin = () => {
  // const [field, setFeild] = useState({
  //   fullName: null,
  //   email: null,
  //   level: null,
  // });

  // const handleFields = (e) => {
  //   setFeild({
  //     ...field,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(field);
  // };

  return (
    <Fragment>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          level: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = !values.fullName ? "Required" : "";
          }

          if (
            !values.email ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = !values.email ? "Required" : "Invalid email address";
          }

          if (!values.level) {
            errors.level = !values.level ? "Required" : "";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   toast(JSON.stringify(values, null, 2));
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
          <div class="main-container">
            <div class="small-container">
              <form onSubmit={handleSubmit}>
                <div class="main-title">
                  <Link to="/subadmin">
                    <h1>
                      <i class="mdi mdi-chevron-left"></i>Edit sub admin{" "}
                    </h1>
                  </Link>
                </div>
                <div class="col-bx-bottom">
                  <div class="form">
                    <div class="form-element">
                      <label>Full name</label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        type="text"
                        name="fullName"
                        class=""
                      />
                                              {errors.fullName && touched.fullName && errors.fullName}

                    </div>
                    <div class="form-element">
                      <label>Email id</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        class=""
                      />
                                              {errors.email && touched.email && errors.email}

                    </div>
                    <div class="form-element" id="features_list_1">
                      <label>Admin Level</label>
                      <select
                        name="level"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.level}
                      >
                        <option disabled="">Select level</option>
                        <option value="super" selected="">
                          Super admin
                        </option>
                        <option value="sub">Sub admin</option>
                      </select>
                      {errors.level && touched.level && errors.level}

                    </div>
                    <div class="form-element space">
                      <button
                        class=" common-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </Fragment>
  );
};

export default Editsubadmin;
