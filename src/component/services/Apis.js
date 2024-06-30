import FetchApi from "./Service";

// const {csId} = useContext(TokenConstextApi)
// console.log(csId);


export const LOGIN_CHECK_SERVICE = (data) => {
  return FetchApi("POST", "logincheck", data, {});
};

export const OTP_VERIFY_SERVICE = (data) => {
  return FetchApi("POST", "verifylogin", data, {});
};

export const ADD_QUOTATION_SERVICE = (data) => {
  return FetchApi("POST", "addQuotationDetail", data, {});
};

export const GET_QUOTATION_SERVICE = () => {
  return FetchApi("GET", "quotation_listing", {}, {});
};

export const ADD_INVOICE_SERVICE = (data) => {
  return FetchApi("POST", "addInvoice", data, {});
};

export const GET_INVOICE_SERVICE = (customer_id) => {
return FetchApi("GET", `invoice_listing&customer_id=${customer_id}`, {}, {});
};

// export const GET_INVOICE_SERVICE = () => {
//   const { csId } = useContext(TokenConstextApi);
//   return FetchApi("GET", `invoice_listing&${csId}`, {}, {});
// };

export const DELETE_INVOICE_SERVICE = (data) => {
  return FetchApi("POST", "deleteInvoice", data, {});
};


export const EDIT_INVOICE_SERVICE = (data) => {
  return FetchApi("POST", "updateInvoice", data, {});
};

// updateInvoice&id=1&document_no=LR0000011&full_name=afdas&address=asd&gstin=asdfa&inv_date=aadsfa&cnn_no=asdfa

// https://www.retropackers.com/api/retropackers-apis.php?type=addQuotationDetail
// https://www.retropackers.com/api/retropackers-apis.php?type=updateInvoice



// https://www.retropackers.com/api/retropackers-apis.php?type=verifylogin&username=9599067374&passwd=1212
