import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";

export default function Subjectmanagement() {
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };
  return (
    <>
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

        <div className="table-wrapper">
          <table className="datatable-sorting" cellSpacing="0">
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
                  <Link href="#">1</Link>{" "}
                </td>
                <td>
                  <Link href="#">
                    <p> English </p>
                  </Link>
                </td>
                <td>
                  <Link href="#">
                    <p>Aptitude</p>
                  </Link>
                </td>
                <td>
                  <Link href="#">Math</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link href="#" className="custom-tooltip" data-name="View">
                      <span className="mdi  mdi-eye"></span>
                    </Link>
                    <Link
                      to="#"
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
                  <Link href="#">1</Link>{" "}
                </td>
                <td>
                  <Link href="#">
                    <p> English </p>
                  </Link>
                </td>
                <td>
                  <Link href="#">
                    <p>Aptitude</p>
                  </Link>
                </td>
                <td>
                  <Link href="#">Math</Link>{" "}
                </td>
                <td>
                  <div className="action-wrap">
                    <Link href="#" className="custom-tooltip" data-name="View">
                      <span className="mdi  mdi-eye"></span>
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

        <div className="pagination-wrapper">
          <Link className="paginate_btn previous disabled">Previous</Link>
          <Link className="paginate_btn current">1</Link>
          <Link className="paginate_btn ">2</Link>
          <Link className="paginate_btn next">Next</Link>
        </div>
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

      {showDelete ? <DeleteSubjectPopup setShowDelete={setShowDelete} /> : null}
    </>
  );
}
