import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

const Manageexamdetail = () => {
  
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };
  
  return (
    <Fragment>
           <div class="main-container">
        <div class="small-container user-info">
          <div class="main-title">
            <Link to="/manage-exam">
              <h1>
                <i class="mdi mdi-chevron-left"></i> Mange Exam Details{" "}
              </h1>
            </Link>
            <div class="filters">
              <div class="action-wrap">
                <Link
                  to="/edit-mange-exam"
                  class="custom-tooltip"
                  data-name="Edit"
                >
                  <span class="mdi  mdi-lead-pencil"></span>
                </Link>
                <Link
                  href="#"
                  onClick={handleDelete}
                  class="custom-tooltip"
                  data-name="Delete"
                >
                  <span class="mdi  mdi-delete"></span>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-bx-top">
           
            <div class="user-details">
              <div class="repeatedrow">
                <h3>
                  <span class="mdi mdi-information-outline"></span> Information
                </h3>
                <div class="rowbody">
                  <div class="listview">
                    <dl class="list">
                      <dt> Exam Name</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>Exam Type</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>Subject</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>question</dt>
                      <dt>
                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      </dt>
                    </dl>

                    <dl class="list">
                      <dt>Question Set</dt>
                      <dt>Set 1</dt>
                    </dl>
                    <dl class="list">
                      <dt>Option A</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>Option B</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>Option C</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                    <dl class="list">
                      <dt>Option D</dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>

                    <dl class="list">
                      <dt>Answer </dt>
                      <dt>Lorem ipsum dolor</dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null}


    </Fragment>
  );
};

export default Manageexamdetail;
