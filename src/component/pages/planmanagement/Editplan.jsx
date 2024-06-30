import React, { useState } from "react";
import { Link } from "react-router-dom";

const Editplan = () => {
  const [field, setFeild] = useState({
    title: null,
    monthly_price: null,
    yearly_price: null,
    textarea: null,
    feature: null,
  });

  const handleFields = (e) => {
    setFeild({
      ...field,
      [e.target.name]: e.target.value,
    });
    console.log(field);
  };

  const handleSubmit = () => {
    if (!field.title) {
      alert("Please Enter Your Title");
    } else
    if (!field.monthly_price) {
      alert("Please Enter Your Monthly Price");
    } else
    if (!field.yearly_price) {
      alert("Please Enter Your Yearly Price");
    } else
    if (!field.textarea) {
      alert("Please Enter Your Suggestion");
    } else
    if (!field.feature) {
      alert("Please Select Your Feature");
    }
  };

  return (
    <>
      <div class="main-container">
        <div class="small-container">
          <div class="main-title">
            <Link to="/plan">
              <h1>
                <i class="mdi mdi-chevron-left"></i>Edit plan{" "}
              </h1>
            </Link>
          </div>
          <div class="col-bx-bottom">
            <div class="form">
              <div class="form-element">
                <label>Title</label>
                <input
                  type="text"
                  onChange={handleFields}
                  name="title"
                  class=""
                />
              </div>
              <div class="form-element">
                <div class="col-6">
                  <label>Monthly Price</label>
                  <input
                    type="text"
                    onChange={handleFields}
                    name="monthly_price"
                    class=""
                  />
                </div>
                <div class="col-6">
                  <label>Yearly Price</label>
                  <input type="text" name="yearly_price" class="" />
                </div>
                <div class="clear"></div>
              </div>
              <div class="form-element">
                <label>Description</label>
                <textarea name="textarea" onChange={handleFields}></textarea>
              </div>
              <div class="form-element" id="features_list_1">
                <label>Feature</label>
                <input
                  type="text"
                  name="feature"
                  onChange={handleFields}
                  class=""
                />
              </div>

              <div class="form-element space">
                <div class="col-6">
                  <input type="hidden" id="count_1" value="7" />
                  <Link
                    href=""
                    onclick="add_feature(1);"
                    class="unfill common-btn"
                  >
                    Add feature
                  </Link>
                </div>
                <div class="col-6">
                  <Link onClick={handleSubmit} class=" common-btn" href="">
                    Submit{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editplan;
