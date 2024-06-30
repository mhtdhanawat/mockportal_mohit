import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ADD_INVOICE_SERVICE } from "../../services/Apis";
import { Formik } from "formik";
import { TokenConstextApi } from "../../context/GlobalContex";

const AddNewQuotation = ({ HandleShowNewSet, getInvoiceList }) => {
  const { customer_id } = useContext(TokenConstextApi);
  console.log(customer_id);

  const [fields, setFields] = useState({
    customer_id: customer_id,
    document_no: "",
    full_name: "",
    address: "",
    gstin: "",
    inv_date: "",
    cnn_no: "",
  });

  const submitQuotation = () => {
    ADD_INVOICE_SERVICE(fields)
      .then(() => {
        getInvoiceList();
        HandleShowNewSet();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={{
        customer_id: customer_id,
        document_no: "",
        full_name: "",
        address: "",
        gstin: "",
        inv_date: "",
        cnn_no: "",
      }}
      validate={(values) => {
        const errors = {};

        // Validation logic here

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Submit logic here
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
      }) => (
        <div className="modal-window-wrapper modal-wrapper-visible ">
          <div className="modal-window add-set modal-window-visible modal-window-visible1">
            <form onSubmit={handleSubmit}>
              <div className="title">
                <h2>Add Quotation</h2>
              </div>
              <Link className="popup-close" onClick={HandleShowNewSet}></Link>
              <div className="popup-form-outer">
                {/* Form elements here */}
                <div className="form-element">
                  <label> Quotation No.</label>
                  <input
                    type="text"
                    name="document_no"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, document_no: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.document_no}
                  />
                  {errors.document_no &&
                    touched.document_no &&
                    errors.document_no}
                </div>
                <div className="form-element">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, full_name: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.full_name}
                  />
                  {errors.full_name && touched.full_name && errors.full_name}
                </div>
                <div className="form-element">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, address: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {errors.address && touched.address && errors.address}
                </div>

                <div className="form-element">
                  <label>GST No.</label>
                  <input
                    type="text"
                    name="gstin"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, gstin: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.gstin}
                  />
                  {errors.gstin && touched.gstin && errors.gstin}
                </div>
                <div className="form-element">
                  <label>Invoice Date</label>
                  <br />

                  <input
                    type="date"
                    name="inv_date"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, inv_date: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.inv_date}
                  />
                  {errors.inv_date && touched.inv_date && errors.inv_date}
                </div>
                <div className="form-element">
                  <label>CNN no.</label>
                  <input
                    type="text"
                    name="cnn_no"
                    onChange={(e) => {
                      handleChange(e);
                      setFields({ ...fields, cnn_no: e.target.value });
                    }}
                    onBlur={handleBlur}
                    value={values.cnn_no}
                  />
                  {errors.cnn_no && touched.cnn_no && errors.cnn_no}
                </div>
                {/* Other form elements */}
                <div className="form-element">
                  <div className="col-6">
                    <button className="common-btn" onClick={submitQuotation}>
                      Submit
                    </button>
                  </div>
                  <div className="col-6">
                    <Link
                      className="unfill common-btn"
                      onClick={HandleShowNewSet}
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
  );
};

export default AddNewQuotation;
