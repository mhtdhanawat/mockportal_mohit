import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

const Manageexam = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };
  return (
    <Fragment>
         <div className="main-container">
        <div className="small-container">
          <div className="main-title">
            <Link to="/question">
              <h1>
                <i className="mdi mdi-chevron-left"></i>Mange Exam{" "}
              </h1>
            </Link>
            <div className="filters">
              <div className="select_box">
                <select>
                  <option> Select Exam </option>
                  <option>All </option>
                  <option>SSC</option>
                  <option>Bank</option>
                </select>
              </div>
              <div className="select_box">
                <select>
                  <option>Select Subject </option>
                  <option>English</option>
                  <option>Math</option>
                  <option>SSC</option>
                </select>
              </div>
              <div className="select_box">
                <select>
                  <option>Select Question set </option>
                  <option>Set 1</option>
                  <option>Set 2</option>
                  <option>Set 3</option>
                  <option>Set 4</option>
                </select>
              </div>
              <Link href="#" className="filter-section  register_btn">
                {" "}
                Apply
              </Link>
              <Link href="#" className="filter-section  register_btn">
                {" "}
                Cancle
              </Link>
            </div>
          </div>
          <div className="col-bx-bottom">
            <div className="table-wrapper">
              <table cellspacing="0">
                <thead>
                  <tr>
                    <th className="fixed-w no-sort">Sr.No</th>
                    <th>Exam Name</th>
                    <th>Exam Type</th>
                    <th>Subject</th>
                    <th>question</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/exam-details"> 1 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> SSC </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> CGL tier 1 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> English </Link>
                    </td>
                    <td>
                      <Link to="/exam-details">
                        {" "}
                        Select the most appropriate option to fill in the blank.
                        Because of his behaviour, Rohan is liked by the
                        relatives.{" "}
                      </Link>
                    </td>

                    <td>
                      <div className="action-wrap">
                        <Link
                          to="/exam-details"
                          className="custom-tooltip"
                          data-name="View"
                        >
                          <span className="mdi  mdi-eye"></span>
                        </Link>
                        <Link
                          to="/edit-mange-exam"
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
                      <Link to="/exam-details"> 2 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> SSC </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> CGL tier 1 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> English </Link>
                    </td>
                    <td>
                      <Link to="/exam-details">
                        {" "}
                        Select the most appropriate option to fill in the blank.
                        Because of his behaviour, Rohan is liked by the
                        relatives.{" "}
                      </Link>
                    </td>

                    <td>
                      <div className="action-wrap">
                        <Link
                          to="/exam-details"
                          className="custom-tooltip"
                          data-name="View"
                        >
                          <span className="mdi  mdi-eye"></span>
                        </Link>
                        <Link
                          to="/edit-mange-exam"
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
                      <Link to="/exam-details"> 3 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> SSC </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> CGL tier 1 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> English </Link>
                    </td>
                    <td>
                      <Link to="/exam-details">
                        {" "}
                        Select the most appropriate option to fill in the blank.
                        Because of his behaviour, Rohan is liked by the
                        relatives.{" "}
                      </Link>
                    </td>

                    <td>
                      <div className="action-wrap">
                        <Link
                          to="/exam-details"
                          className="custom-tooltip"
                          data-name="View"
                        >
                          <span className="mdi  mdi-eye"></span>
                        </Link>
                        <Link
                          to="/edit-mange-exam"
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
                      <Link to="/exam-details"> 4 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> SSC </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> CGL tier 1 </Link>
                    </td>
                    <td>
                      <Link to="/exam-details"> English </Link>
                    </td>
                    <td>
                      <Link to="/exam-details">
                        {" "}
                        Select the most appropriate option to fill in the blank.
                        Because of his behaviour, Rohan is liked by the
                        relatives.{" "}
                      </Link>
                    </td>

                    <td>
                      <div className="action-wrap">
                        <Link
                          to="/exam-details"
                          className="custom-tooltip"
                          data-name="View"
                        >
                          <span className="mdi  mdi-eye"></span>
                        </Link>
                        <Link
                          to="/edit-mange-exam"
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
          </div>
        </div>
      </div>

     

      {showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null}


    </Fragment>
  );
};

export default Manageexam;
