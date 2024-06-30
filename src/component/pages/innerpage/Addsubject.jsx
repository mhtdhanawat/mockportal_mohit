import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Addsubject() {
  // const [feilds, setFeilds] = useState({
  //   exam_one: null,
  //   exam_two: null,
  // });
  // const [error, handleError] = useState({
  //   exam_one: null,
  //   exam_two: null,
  // });
  // const handleFeilds = (e) => {
  //   setFeilds({
  //     ...feilds,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = () => {
  //   if (!feilds.exam_one) {
  //     handleError({
  //       exam_one: "Please error the Exam One",
  //     });
  //     return;
  //   }
  //   if (!feilds.exam_two) {
  //     handleError({
  //       exam_two: "Please error the Exam Two",
  //     });
  //     return;
  //   }
  //   handleError({});
  // };
  // console.log(error);
  return (
    <>
      <Formik
        initialValues={{
          exam_one: "",
          exam_two: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.exam_one) {
            errors.exam_one = !values.exam_one ? "Required" : "";
          }

          if (!values.exam_two) {
            errors.exam_two = !values.exam_two ? "Required" : "";
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
          <div className="main-container">
            <div className="small-container">
              <form onSubmit={handleSubmit}>
                <div className="main-title">
                  <Link to="/subject">
                    <h1>
                      <i className="mdi mdi-chevron-left"></i>Add Subject{" "}
                    </h1>
                  </Link>
                </div>

                <div className="col-bx-bottom">
                  <div className="form">
                    <div className="form-element">
                      <div className="col-12">
                        <label>Exame Name 1</label>
                        <input
                          type="text"
                          name="exam_one"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.exam_one}
                        />
                        {errors.exam_one && touched.exam_one && errors.exam_one}
                      </div>
                    </div>
                    <div className="form-element">
                      <div className="col-12">
                        <label>Exame Name 2</label>
                        <input
                          type="text"
                          name="exam_two"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.exam_two}
                        />
                        {errors.exam_two && touched.exam_two && errors.exam_two}
                      </div>
                    </div>

                    <div className="form-element space">
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
    </>
  );
}

export default Addsubject;
