import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { toast } from "react-toastify";
import Basic from "./testPage";

const GeneralSettings = () => {
  const [field, setField] = useState({
    username : 9599067374
  })

  // const handleSubmitt = () => {
  //   LOGIN_SERVICE(field)
  //   .then((e) => console.log(e))
  // }


  return (
    <Fragment>
      <Formik
        initialValues={{
          email: "",
          number: "",
          policy_url: "",
          service_url: "",
        }}
        validate={(values) => {
          const errors = {};
          
          if (
            !values.email ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = !values.email ? "Required" : "Invalid email address";
          }

          if (!values.number || !/^[0-9]{10,}$/i.test(values.number)) {
            errors.number = !values.number ? "Required" : "Invalid number";
          }

          if (
            !values.policy_url ||
            !/^WWW.[A-Z0-9]+.[A-Z]{3,}$/i.test(values.policy_url)
          ) {
            errors.policy_url = !values.policy_url
              ? "Required"
              : "Invalid URL address";
          }

          if (
            !values.service_url ||
            !/^WWW.[A-Z0-9]+.[A-Z]{3,}$/i.test(values.service_url)
          ) {
            errors.service_url = !values.service_url
              ? "Required"
              : "Invalid URL address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            toast(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          <div className="main-container">
            <div className="small-container">
              <div className="main-title">
                <h1>General Settings </h1>
              </div>
              {/* <Basic /> */}
              <form onSubmit={handleSubmit}>
                <div className="col-bx-bottom">
                  <div className="form">
                    <div className="form-element">
                      <div className="col-6">
                        <label>Contact email</label>
                        <input
                          // onChange={(e) => HandleData(e)}
                          type="text"
                          name="email"
                          className=""
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="johnalex@gmail.com"
                        />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="col-6">
                        <label>Contact number</label>
                        <input
                          // onChange={(e) => HandleData(e)}
                          type="text"
                          name="number"
                          className=""
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.number}
                          placeholder="9874563214"
                        />
                        {errors.number && touched.number && errors.number}
                      </div>
                    </div>

                    <div className="form-element">
                      <label>Privacy policy URL</label>
                      <input
                        // onChange={(e) => HandleData(e)}
                        type="text"
                        name="policy_url"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.policy_url}
                        placeholder="www.mockportal.com/privacy-policy"
                      />
                      {errors.policy_url &&
                        touched.policy_url &&
                        errors.policy_url}
                    </div>
                    <div className="form-element">
                      <label>Terms of service URL</label>
                      <input
                        // onChange={(e) => HandleData(e)}
                        type="text"
                        name="service_url"
                        className=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.service_url}
                        placeholder="www.mockportal.com/terms"
                      />
                      {errors.service_url &&
                        touched.service_url &&
                        errors.service_url}
                    </div>

<Basic/>
                    <div className="form-element">
                      {/* <Link className=" common-btn">Save</Link> */}
                      <button type="submit"  disabled={isSubmitting}>
                        Save
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

export default GeneralSettings;
