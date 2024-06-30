import { Link, useNavigate, useParams } from "react-router-dom";
import { DELETE_INVOICE_SERVICE, GET_INVOICE_SERVICE } from "../../services/Apis";
import { useContext, useEffect, useState } from "react";
import { TokenConstextApi } from "../../context/GlobalContex";

const DeleteSubjectPopup = () => {
  const [deleteId, setDeleteId] = useState(null);
  const { deleteid } = useParams();
  const navigate = useNavigate();
  const{customer_id} = useContext(TokenConstextApi)
  // console.log(customer_id);

  useEffect(() => {
    GET_INVOICE_SERVICE(customer_id)
      .then((invoices) => {
        const filteredInvoice = invoices.find((invoice) => invoice.id === deleteid);
        if (filteredInvoice) {
          setDeleteId(filteredInvoice.id);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [deleteid]);

  const deleteInvoice = () => {
    if (!deleteId) return;
    DELETE_INVOICE_SERVICE(`id=${deleteId}`)
      .then(() => {
        navigate('/quation');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="modal-window-wrapper modal-wrapper-visible">
        <div className="modal-window small delete modal-window-visible modal-window-visible1">
          <div className="title">
            <h2>Delete</h2>
          </div>
          <Link to={"/quation"} className="popup-close"></Link>
          <div className="popup-form-outer">
            <p>Are you sure you want to delete?</p>
            <div className="form-element">
              <div className="col-6">
                <button className="common-btn" onClick={deleteInvoice}>
                  Delete
                </button>
              </div>
              <div className="col-6">
                <Link to={"/quation"} className="unfill common-btn">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSubjectPopup;
