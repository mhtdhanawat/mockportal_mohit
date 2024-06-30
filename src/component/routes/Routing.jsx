import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoting from "./PublicRoting";
import Login from "../pages/login/login";
import PrivateRouting from "./PrivateRouting";
import Forget from "../pages/login/forget";
import Dashboard from "../pages/dashboard/dashboard";
import Feedback from "../pages/feedback/Feedback";
import Generalsetting from "../pages/gensetting/Gensetting";
import Subadmin from "../pages/subadmin/Subadmin";
import Planmanagement from "../pages/planmanagement/Plan";
import Payment from "../pages/payment/Payment";
import Setmanagement from "../pages/setmanagement/Setmanagement";
import User from "../pages/users/User";
// import Subjectmanagement from "../pages/submanagement/Subjectmanagement";
import Questionmanagement from "../pages/quesmanagement/Questionmanagement";
import Error from "../pages/error/Error";
import Addquestion from "../pages/innerpage/Addquestion";
import Addexam from "../pages/innerpage/Addexam";
import Manageexam from "../pages/innerpage/Manageexam";
import Allexam from "../pages/innerpage/Allexam";
import Regularuser from "../pages/innerpage/Regularuser";
import Mangequestion from "../pages/innerpage/Mangequestion";
import Paymentdetails from "../pages/payment/Paymentdetails";
import Admindetail from "../pages/subadmin/Admindetail";
import Feedbackdetail from "../pages/feedback/Feedbackdetail";
import Manageexamdetail from "../pages/innerpage/Manageexamdetail";
import Editmanageexam from "../pages/innerpage/Editmanageexam";
import Editsubadmin from "../pages/subadmin/Editsubadmin";
import Subjectsetplan from "../pages/planmanagement/Subjectsetplan";
import DeleteSubjectPopup from "../pages/popup/Deletepopup";
import Managedetails from "../pages/innerpage/Managedetails";
import Addsubject from "../pages/innerpage/Addsubject";
import AddPlan from "../pages/innerpage/AddPlan";
import Editplan from "../pages/planmanagement/Editplan";
import RegisterUser from "../pages/users/RegisterUser";
import Otp from "../pages/login/otp";
import Subject from "../pages/submanagement/subject mui/subject";
import QuotationListing from "../pages/quotation/quotationListing";
import EditQuotation from "../pages/quotation/EditQuotation";
import QuotationDetails from "../pages/quotation/QuotationDetails";
const Routing = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<PublicRoting Component={Login} />} />
        <Route path="*" element={<PublicRoting Component={Error} />} />
        <Route path="/login" element={<PublicRoting Component={Login} />} />
        <Route path="/forget" element={<PublicRoting Component={Forget} />} />
        <Route path="/otp" element={<PublicRoting Component={Otp} />} />
        <Route
          path="/dashboard"
          element={<PrivateRouting Component={Dashboard} />}
        />
        <Route
          path="/feedback"
          element={<PrivateRouting Component={Feedback} />}
        />
        <Route
          path="/general-settings"
          element={<PrivateRouting Component={Generalsetting} />}
        />
        <Route
          path="/subadmin"
          element={<PrivateRouting Component={Subadmin} />}
        />
        <Route
          path="/plan"
          element={<PrivateRouting Component={Planmanagement} />}
        />
        <Route
          path="/subject-set"
          element={<PrivateRouting Component={Subjectsetplan} />}
        />

        <Route
          path="/payments"
          element={<PrivateRouting Component={Payment} />}
        />
        <Route
          path="/set"
          element={<PrivateRouting Component={Setmanagement} />}
        />
        <Route path="/user" element={<PrivateRouting Component={User} />} />
        <Route
          path="/subject"
          element={<PrivateRouting Component={Subject} />}
        />
        {/* <Route
        path="/subject"
        element={<PrivateRouting Component={Subjectmanagement} />}
      /> */}
        <Route
          path="/question"
          element={<PrivateRouting Component={Questionmanagement} />}
        />
        <Route
          path="/add-question"
          element={<PrivateRouting Component={Addquestion} />}
        />
        <Route
          path="/mange-question"
          element={<PrivateRouting Component={Mangequestion} />}
        />
        <Route
          path="/regular-user"
          element={<PrivateRouting Component={Regularuser} />}
        />
        <Route
          path="/add-exame"
          element={<PrivateRouting Component={Addexam} />}
        />
        <Route
          path="/manage-exam"
          element={<PrivateRouting Component={Manageexam} />}
        />
        <Route
          path="/all-exam"
          element={<PrivateRouting Component={Allexam} />}
        />
        <Route
          path="/payment-details"
          element={<PrivateRouting Component={Paymentdetails} />}
        />
        <Route
          path="/quotation-details/:detailid"
          element={<PrivateRouting Component={QuotationDetails} />}
        />
        <Route
          path="/quation"
          element={<PrivateRouting Component={QuotationListing} />}
        />
        <Route
          path="/admin-details"
          element={<PrivateRouting Component={Admindetail} />}
        />
        <Route
          path="/feedback-detail"
          element={<PrivateRouting Component={Feedbackdetail} />}
        />
        <Route
          path="/exam-details"
          element={<PrivateRouting Component={Manageexamdetail} />}
        />
        <Route
          path="/edit-mange-exam"
          element={<PrivateRouting Component={Editmanageexam} />}
        />
        <Route
          path="/edit-subadmin"
          element={<PrivateRouting Component={Editsubadmin} />}
        />
        <Route
          path="/edit-quotation/:userid"
          element={<PrivateRouting Component={EditQuotation} />}
        />

        <Route
          path="/delete-quotation/:deleteid"
          element={<PrivateRouting Component={DeleteSubjectPopup} />}
        />

        <Route
          path="/delete-pop-up"
          element={<PrivateRouting Component={DeleteSubjectPopup} />}
        />
        <Route
          path="/mange-details"
          element={<PrivateRouting Component={Managedetails} />}
        />
        <Route
          path="/edit-mange"
          element={<PrivateRouting Component={Editmanageexam} />}
        />
        <Route
          path="/add-subject"
          element={<PrivateRouting Component={Addsubject} />}
        />
        <Route
          path="/add-plan"
          element={<PrivateRouting Component={AddPlan} />}
        />
        <Route
          path="/edit-plan"
          element={<PrivateRouting Component={Editplan} />}
        />
        <Route
          path="/register_user"
          element={<PrivateRouting Component={RegisterUser} />}
        />
      </Routes>
    </Fragment>
  );
};

export default Routing;
