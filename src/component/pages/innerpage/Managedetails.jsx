import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteSubjectPopup from '../popup/Deletepopup';

const Managedetails = () => {
    const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };
  return (

    <Fragment>
         <div className="main-container">
          <div className="small-container user-info">
            <div className="main-title">
              <Link to="/mange-question"><h1><i className="mdi mdi-chevron-left"></i> Mange Question Details </h1></Link>
              <div className="filters">
                  <div className="action-wrap">
                      <Link to="/edit-mange" className="custom-tooltip" data-name="Edit"><span className="mdi  mdi-lead-pencil"></span></Link>
                      <Link href="" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
                  </div>
              </div>
            </div>
            <div className="col-bx-top">
           
              <div className="user-details">
                <div className="repeatedrow">
                  <h3><span className="mdi mdi-information-outline"></span> Information</h3>
                  <div className="rowbody">
                      <div className="listview">
                          <dl className="list">
                              <dt> Exam Name</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>Exam Type</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>Subject</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>question</dt>
                              <dt>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</dt>
                          </dl>

                          <dl className="list">
                              <dt>Question Set</dt>
                              <dt>Set 1</dt>
                          </dl>
                          <dl className="list">
                              <dt>Option A</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>Option B</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>Option C</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>
                          <dl className="list">
                              <dt>Option D</dt>
                              <dt>Lorem ipsum dolor</dt>
                          </dl>

                           <dl className="list">
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

    )
}

export default Managedetails