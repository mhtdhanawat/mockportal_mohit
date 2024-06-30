import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteSubjectPopup from "../popup/Deletepopup";
import AddNewQuotation from "../innerpage/addNewQuotation";
import { GET_INVOICE_SERVICE } from "../../services/Apis";
import { TokenConstextApi } from "../../context/GlobalContex";

const QuotationListing = () => {
  const [data, setData] = useState([]);
  // const [ cousId , setCousId] = useState({
  //   coustomer_id : ''
  // })
  const { userid } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [showNewSet, setShowNewSet] = useState(false);
  const {csId} = useContext(TokenConstextApi)
  const{customer_id}= useContext(TokenConstextApi)

  console.log(customer_id);

  // console.log(csId);

  // useEffect(()=>{
  //   setCousId(csId)
  // })

  // console.log(cousId);

  // useEffect(()=>{
  //  let customer_id = localStorage.getItem("customer_id")
  // })

  const getInvoiceList = () => {
    // if(!csId){
    //   alert("Please LOgin First")
    // } else{
      
    GET_INVOICE_SERVICE(customer_id)
      .then((e) => {
        setData(e);
      })
      .catch((err) => {
        console.log(err);
      });
  // };
}

  useEffect(() => {
//    let customer_id = localStorage.getItem("customer_id")
// console.log(customer_id);
    getInvoiceList(csId);
  },[customer_id]);

  const HandleDelete = () => setShowDelete(!showDelete);
  const HandleShowNewSet = () => setShowNewSet(!showNewSet);

  return (
    <Fragment>
      <div className="main-container">
        <div className="main-title">
          <h1>Quotation List</h1>
          <div className="clear"></div>
        </div>

        <div className="table-wrapper">
          <table className="datatable-sorting">
            <thead>
              <tr>
                <th className="fixed-w no-sort">Sr.No</th>
                <th>Document No.</th>
                <th>Name</th>
                <th>Address</th>
                <th className="table-child no-sort">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.sort((a, b) => b.id - a.id)
              .map((e, i) => (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>
                  <Link to={`/quotation-details/${e.id}`}>
                      <p>{e.document_no}</p>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/quotation-details/${e.id}`}>
                      <p>{e.full_name}</p>
                    </Link>
                  </td>
                  <td>
                  <Link to={`/quotation-details/${e.id}`}>
                      {e.address}</Link>{" "}
                  </td>
                  <td>
                    <div className="action-wrap">
                      <Link className="custom-tooltip" data-name="View">
                        <span className="mdi  mdi-eye"></span>
                      </Link>
                      <Link
                        to={`/edit-quotation/${e.id}`}
                        className="custom-tooltip"
                        data-name="Edit"
                      >
                        <span className="mdi  mdi-lead-pencil"></span>
                      </Link>
                      <Link
                        to={`/delete-quotation/${e.id}`}
                        className="custom-tooltip"
                        data-name="Delete"
                      >
                        <span className="mdi  mdi-delete"></span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
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

      <div className="add-more-container" onClick={HandleShowNewSet}>
        <Link className="custom-tooltip" data-name="Add new Set">
          <span className="mdi">+</span>
        </Link>
      </div>

      {showDelete && <DeleteSubjectPopup data={data} HandleDelete={HandleDelete} />}
      {showNewSet && <AddNewQuotation getInvoiceList={getInvoiceList} HandleShowNewSet={HandleShowNewSet} />}
    </Fragment>
  );
};

export default QuotationListing;














// import React, { Fragment, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import DeleteSubjectPopup from "../popup/Deletepopup";
// import AddNewQuotation from "../innerpage/addNewQuotation";
// import { GET_INVOICE_SERVICE } from "../../services/Apis";

// const QuotationListing = () => {
//   const [data, setData] = useState();

//   const{userid} = useParams()

//   console.log(userid);

//   const [showDelete, setShowDelete] = useState(false);
//   const HandleDelete = () => {
//     return setShowDelete(!showDelete);
//   };
//   const [showNewSet, setShowNewSet] = useState(false);
//   const HandleShowNewSet = () => {
//     return setShowNewSet(!showNewSet);
//   };

//   const getInvoiceList = ()=>{
//     GET_INVOICE_SERVICE()
//     .then((e) => {
//       setData(e);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   console.log(data);

//   useEffect(() => {
//     getInvoiceList()
//   }, []);

//   return (
//     <Fragment>
//       <div className="main-container">
//         <div className="main-title">
//           <h1>Quotation List</h1>
//           <div className="clear"></div>
//         </div>

//         <div className="table-wrapper">
//           <table className="datatable-sorting">
//             <thead>
//               <tr>
//                 <th className="fixed-w no-sort">Sr.No</th>
//                 <th>Document No.</th>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th className="table-child no-sort">Action </th>
//               </tr>
//             </thead>
//             <tbody>
//               {data &&
//                 data.length !== 0 &&
//                 data
//                 .sort((a, b) => b.id - a.id)
//                 .map((e, i) => {
//                   // console.log(e);
//                   const { full_name, document_no, address, id } = e;

//                   // console.log(document_no);
//                   // console.log(full_name);
//                   // console.log(address);
//                   // console.log(id);
//                   return (
//                     <tr>
//                       <td>
//                         <Link >{+i +1}</Link>{" "}
//                       </td>
//                       <td>
//                         <Link to="/admin-detail">
//                           <p>{document_no}</p>
//                         </Link>
//                       </td>
//                       <td>
//                         <Link to="/admin-detail">
//                           <p>{full_name}</p>
//                         </Link>
//                       </td>
//                       <td>
//                         <Link to="/admin-detail">{address}</Link>{" "}
//                       </td>
//                       <td>
//                         <div className="action-wrap" >
//                           <Link className="custom-tooltip" data-name="View">
//                             <span className="mdi  mdi-eye"></span>
//                           </Link>
//                           <Link
//                             to={`/edit-quotation/${id}`}
//                             className="custom-tooltip"
//                             data-name="Edit"
//                           >
//                             <span className="mdi  mdi-lead-pencil"></span>
//                           </Link>
                            
//                           <Link to={`/delete-quotation/${id}`} className="custom-tooltip" data-name="Delete">
//                             <span  className="mdi  mdi-delete"></span>
//                           </Link>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//         <div className="pagination-wrapper">
//           <Link className="paginate_btn previous disabled">Previous</Link>
//           <Link className="paginate_btn current">1</Link>
//           <Link className="paginate_btn ">2</Link>
//           <Link className="paginate_btn next">Next</Link>
//         </div>
//       </div>

//       <div className="add-more-container" onClick={HandleShowNewSet}>
//         <Link className="custom-tooltip" data-name="Add new Set ">
//           <span className="mdi">+</span>
//         </Link>
//       </div>

//       {showDelete ? (
//         <DeleteSubjectPopup
//         data={data}
//         HandleDelete={HandleDelete} />
//       ) : null}
//       {showNewSet ? <AddNewQuotation
//       getInvoiceList={getInvoiceList}
//       HandleShowNewSet={HandleShowNewSet} /> : null}
//     </Fragment>
//   );
// };

// export default QuotationListing;

