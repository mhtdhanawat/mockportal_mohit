import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  EDIT_INVOICE_SERVICE,
  GET_INVOICE_SERVICE,
} from "../../services/Apis";
import { Formik } from "formik";
import { TokenConstextApi } from "../../context/GlobalContex";

const EditQuotation = ({ HandleShowNewSet }) => {
  const { userid } = useParams();
  // console.log(userid);

  const { customer_id } = useContext(TokenConstextApi);
  console.log(customer_id);
  


  const [feilds, setFeilds] = useState({
    customer_id: customer_id,
    document_no: "",
    full_name: "",
    address: "",
    gstin: "",
    inv_date: "",
    cnn_no: "",
  });
  // const HandleCloseNewSet = () => {
  //   HandleShowNewSet();
  // };

  //   const editSubmitQuotation = ()=>{

  //   }

  useEffect(() => {
    GET_INVOICE_SERVICE(customer_id)
      .then((e) => {
        //    console.log(e);
        const ids = e.map((obj) => obj.id).filter((id) => id === userid);

        const filteredObjects = e.filter((obj) => ids.includes(obj.id));

        // console.log(filteredObjects);

        const obj = filteredObjects.length > 0 ? filteredObjects[0] : {};
        // console.log(obj);

        setFeilds(obj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  //console.log(feilds);
  const editSubmitQuotation = () => {
    // console.log("hellllll" , feilds);

    EDIT_INVOICE_SERVICE(feilds)
      .then(() => {
        GET_INVOICE_SERVICE(customer_id);
        navigate("/quation");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Formik
        initialValues={{
          customer_id: customer_id,
          document_no: null,
          full_name: null,
          address: null,
          gstin: null,
          inv_date: null,
          cnn_no: null,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.document_no) {
            errors.document_no = !values.document_no
              ? "Required"
              : "Invalid reply address";
          }
          if (!values.full_name) {
            errors.full_name = !values.full_name
              ? "Required"
              : "Invalid reply address";
          }
          if (!values.address) {
            errors.address = !values.address
              ? "Required"
              : "Invalid reply address";
          }

          if (!values.gstin) {
            errors.gstin = !values.gstin ? "Required" : "Invalid reply address";
          }
          if (!values.inv_date) {
            errors.inv_date = !values.inv_date
              ? "Required"
              : "Invalid reply address";
          }
          if (!values.cnn_no) {
            errors.cnn_no = !values.cnn_no
              ? "Required"
              : "Invalid reply address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // toast(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 400);
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
          <div className="modal-window-wrapper modal-wrapper-visible ">
            <div className="modal-window add-set modal-window-visible modal-window-visible1">
              <form onSubmit={handleSubmit}>
                <div className="title">
                  <h2>Edit Quotation</h2>
                </div>
                <Link to={"/quation"} className="popup-close"></Link>
                <div className="popup-form-outer">
                  <div className="form-element">
                    <label>Enter Quotation No.</label>
                    <input
                      type="text"
                      name="document_no"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, document_no: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.document_no}
                    />
                    {errors.document_no &&
                      touched.document_no &&
                      errors.document_no}
                  </div>
                  <div className="form-element">
                    <label>full_name</label>
                    <input
                      type="text"
                      name="full_name"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, full_name: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.full_name}
                    />
                    {errors.full_name && touched.full_name && errors.full_name}
                  </div>
                  <div className="form-element">
                    <label>address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, address: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.address}
                    />
                    {errors.address && touched.address && errors.address}
                  </div>

                  <div className="form-element">
                    <label>Enter Quotation No.</label>
                    <input
                      type="text"
                      name="gstin"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, gstin: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.gstin}
                    />
                    {errors.gstin && touched.gstin && errors.gstin}
                  </div>
                  <div className="form-element">
                    <label>inv_date</label>
                    <input
                      type="text"
                      name="inv_date"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, inv_date: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.inv_date}
                    />
                    {errors.inv_date && touched.inv_date && errors.inv_date}
                  </div>
                  <div className="form-element">
                    <label>cnn_no</label>
                    <input
                      type="text"
                      name="cnn_no"
                      onChange={(e) => {
                        handleChange(e);
                        setFeilds({ ...feilds, cnn_no: e.target.value });
                      }}
                      onBlur={handleBlur}
                      value={feilds.cnn_no}
                    />
                    {errors.cnn_no && touched.cnn_no && errors.cnn_no}
                  </div>

                  <div className="form-element">
                    <div className="col-6">
                      <button
                        className=" common-btn"
                        onClick={editSubmitQuotation}
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <Link to={"/quation"} className="unfill common-btn">
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
    </Fragment>
  );
};

export default EditQuotation;
