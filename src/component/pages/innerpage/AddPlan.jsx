import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const AddPlan = () => {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          monthly_price: "",
          yearly_price: "",
          description: "",
          feature: "",
          feature1: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = !values.title ? "Required" : "";
          }if (!values.monthly_price) {
            errors.monthly_price = !values.monthly_price ? "Required" : "";
          }if (!values.yearly_price) {
            errors.yearly_price = !values.yearly_price ? "Required" : "";
          }if (!values.description) {
            errors.description = !values.description ? "Required" : "";
          }if (!values.feature) {
            errors.feature = !values.feature ? "Required" : "";
          }if (!values.feature1) {
            errors.feature1 = !values.feature1 ? "Required" : "";
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
          <div className="main-container">
            <div className="small-container">
              <form onSubmit={handleSubmit}>
                <div className="main-title">
                  <Link to="/plan">
                    <h1>
                      <i className="mdi mdi-chevron-left"></i>Add plan{" "}
                    </h1>
                  </Link>
                </div>
                <div className="col-bx-bottom">
                  <div className="form">
                    <div className="form-element">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        className=""
                      />
                      {errors.title && touched.title && errors.title}
                    </div>
                    <div className="form-element">
                      <div className="col-6">
                        <label>Monthly Price</label>
                        <input
                          type="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.monthly_price}
                          name="monthly_price"
                          className=""
                        />
                        {errors.monthly_price &&
                          touched.monthly_price &&
                          errors.monthly_price}
                      </div>
                      <div className="col-6">
                        <label>Yearly Price</label>
                        <input
                          type="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.yearly_price}
                          name="yearly_price"
                          className=""
                        />
                        {errors.yearly_price &&
                          touched.yearly_price &&
                          errors.yearly_price}
                      </div>
                      <div className="clear"></div>
                    </div>
                    <div className="form-element">
                      <label>Description</label>
                      <textarea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        name="description"
                      ></textarea>
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </div>

                    <div className="form-element">
                      <label>Feature</label>
                      <input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.feature}
                        name="feature"
                        className=""
                      />
                      {errors.feature && touched.feature && errors.feature}
                    </div>

                    <div className="appendBox">
                      <div className="form-element">
                        <label>Feature</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.feature1}
                          name="feature1"
                          className=""
                        />
                        {errors.feature1 && touched.feature1 && errors.feature1}

                        <span className="mdi  mdi-delete"></span>
                      </div>
                    </div>

                    <div className="form-element space">
                      <div className="col-6">
                        <Link
                          href="#"
                          className="unfill common-btn"
                          id="count_1"
                        >
                          Add feature
                        </Link>
                      </div>
                      <div className="col-6">
                        <button
                          className=" common-btn"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default AddPlan;
