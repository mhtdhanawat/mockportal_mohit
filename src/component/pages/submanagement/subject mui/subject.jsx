import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../../popup/Deletepopup";
import CustomGridTable from "../../../mui/dataGrid";
import CustomInputFeild from "../../../mui/textFeild";

const Subject = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [feildNames, setFeildNames] = useState([
    { field: "id", headerName: "ID", width: 170 },
    { field: "name", headerName: "Full Name", width: 370 },
    { field: "location", headerName: "Location", width: 370 },
  ]);

  const [userData, setUserData] = useState([
    { id: 1, name: "Testing Team", location: "Gurgaon" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
    { id: 2, name: "Testing", location: "Delhi" },
  ]);

  const [subectFeilds, setSubjectFeild] = useState([
    { field: "id", headerName: "ID", width: 170 },
    { field: "name", headerName: "Full Name", width: 370 },
  ]);

  const [subData, setSubData] = useState([
    { id: 1, name: "Testing Team", location: "Gurgaon" },
    { id: 2, name: "Testing", location: "Delhi" },
  ]);

  const HandleShowDelete = () => {
    setShowDelete(true);
  };
  return (
    <Fragment>
      <div className="main-container">
        <div className="main-title">
          <h1>Subject Managment List</h1>
          <div className="filters">
            <div className="search-outer">
              <input
                id="search"
                className="search-box"
                placeholder="Search.."
                type="text"
              />
              <input className="search" value="" type="button" />
            </div>
          </div>
          <div className="clear"></div>
        </div>

        <div className="table-wrapper_outer">
          <CustomInputFeild label={"Full Name"} />
          <CustomInputFeild label={"Address"} onChange={() => null} />
          <CustomGridTable rows={userData} columns={feildNames} pageSize={15} />
          <CustomGridTable rows={subData} columns={subectFeilds} pageSize={5} />
          {/* <table className="datatable-sorting">
            <thead>
              <tr>
                <th className="fixed-w no-sort">Sr.No</th>
                <th>Name Subject 1</th>
                <th>Name Subject 2</th>
                <th>Name Subject 3</th>
                <th className="table-child no-sort">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link>1</Link>{" "}
                </td>
                <td>
                  <Link>
                    <p> English </p>
                  </Link>
                </td>
                <td>
                  <Link>
                    <p>Aptitude</p>
                  </Link>
                </td>
                <td>
                  <Link>Math</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link className="custom-tooltip" data-name="View">
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      onClick={HandleShowDelete}
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
                  <Link>1</Link>{" "}
                </td>
                <td>
                  <Link>
                    <p> English </p>
                  </Link>
                </td>
                <td>
                  <Link>
                    <p>Aptitude</p>
                  </Link>
                </td>
                <td>
                  <Link>Math</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link className="custom-tooltip" data-name="View">
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      onClick={HandleShowDelete}
                      className="custom-tooltip"
                      data-name="Delete"
                    >
                      <span className="mdi  mdi-delete"></span>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        {/* <div className="pagination-wrapper">
          <Link className="paginate_btn previous disabled">Previous</Link>
          <Link className="paginate_btn current">1</Link>
          <Link className="paginate_btn ">2</Link>
          <Link className="paginate_btn next">Next</Link>
        </div> */}
      </div>

      <div className="add-more-container">
        <Link
          to="/add-subject"
          className="custom-tooltip"
          data-name="Add Subject "
        >
          <span className="mdi">+</span>
        </Link>
      </div>

      <div className="modal-window-wrapper ">
        <div className="modal-window small  delete">
          <div className="title">
            <h2>Delete</h2>
          </div>
          <Link className="popup-close"></Link>
          <div className="popup-form-outer">
            <p>Are you sure, you want to Delete?</p>
            <div className="form-element">
              <div className="col-6">
                <Link className=" common-btn">Delete </Link>
              </div>
              <div className="col-6">
                <Link  className="unfill common-btn">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDelete ? <DeleteSubjectPopup setcloseDelete={HandleShowDelete} /> : null}
    </Fragment>
  );
};

export default Subject;
