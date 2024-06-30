import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";


const Allexam = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDelete = () => {
    setShowDelete(true);
  };

  return (
    <Fragment>
            <div className="main-container">
            <div className="small-container">
                <div className="main-title">
                    <Link to="/question"><h1><i className="mdi mdi-chevron-left"></i>Mange Question </h1></Link>
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
                        <Link href="#" className="filter-section  register_btn"> Apply</Link>
                        <Link href="#" className="filter-section  register_btn"> Cancle</Link>
                    </div>
                    
                </div>
                <div className="col-bx-bottom">
                    <div className="table-wrapper">
                        <table cellSpacing="0"> 
                            <thead>
                                <tr>
                                   <th className="fixed-w no-sort">Sr.No</th>
                                  <th>Exam type Name</th>
                                  <th>Exam Name</th>
                                  <th>Action</th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>  
                                    <td><Link href="#" > 1 </Link></td>
                                    <td><Link href="#" >  MTS  </Link></td> 
                                    <td><Link href="#" >SSC </Link></td> 
                                    <td>
                                      <div className="action-wrap">
                                        <Link href="#" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
                                      </div>
                                    </td>
                                </tr>
                                 <tr>  
                                    <td><Link href="#" > 2 </Link></td>
                                    <td><Link href="#" > tier 1  </Link></td> 
                                    <td><Link href="#" >SBI </Link></td> 
                                    <td>
                                      <div className="action-wrap">
                                        <Link href="#" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
                                      </div>
                                    </td>
                                </tr>
                                 <tr>  
                                    <td><Link href="#" > 3 </Link></td>
                                    <td><Link href="#" > CHSL  </Link></td> 
                                    <td><Link href="#" >SSC </Link></td> 
                                    <td>
                                      <div className="action-wrap">
                                        <Link href="#" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
                                      </div>
                                    </td>
                                </tr>
                                 <tr>  
                                    <td><Link href="#" > 4 </Link></td>
                                    <td><Link href="#" > SBI clerk pre </Link></td> 
                                    <td><Link href="#" >SBI </Link></td> 
                                    <td>
                                      <div className="action-wrap">
                                        <Link href="#" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
                                      </div>
                                    </td>
                                </tr>
                                 <tr>  
                                    <td><Link href="#" > 5 </Link></td>
                                    <td><Link href="#" >  SBI clerk pre  </Link></td> 
                                    <td><Link href="#" >SBI </Link></td> 
                                    <td>
                                      <div className="action-wrap">
                                        <Link href="#" onClick={handleDelete} className="custom-tooltip" data-name="Delete"><span className="mdi  mdi-delete"></span></Link>
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

export default Allexam;
