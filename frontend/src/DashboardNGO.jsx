import { useState } from "react";
import ReactDOM from "react-dom";

import "./DashboardNGO.css";
import NGODataPopup from "./NGODataPopup";
import UserInfoPopup from "./UserInfoPopup";

function DashhboardNGO() {
    const [detailsPopup, setDetailsPopup] = useState(false);
    const [udetailsPopup, setuDetailsPopup] = useState(false);
  return (
    <div className="container">
      <div className="logoutbtn">
        {/* adding + sign img */}
        <button type="button" className="lgot_btn">
          Logout
        </button>
      </div>
      <div className="profilebtn">
        {/* adding + sign img */}
        <button type="button" className="prof_btn" onClick={() => setDetailsPopup(true)}>
          img
        </button>
      </div>
      <div className="New_requests_header">New requests</div>
      <div className="new_requests_table">
        <table className="data_new">
          <th className="table_header_new">
            <td className="request_details_new"> Request Details</td>
            <td className="status">Status</td>
            <td className="expiry">Expiry</td>
            <td className="location">Pickup Location</td>
          </th>
          <tr className="table_data">
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
            <td>Location</td>
          </tr>
        </table>
      </div>
      <div className="active_requests_header">Active requests</div>
      <div className="active_requests_table">
        <table className="data_active">
          <th className="table_header">
            <td className="id"></td>
            <td className="request_details"> Request Details</td>
            <td className="status">Status</td>
            <td className="expiry">Expiry</td>
          </th>
          <tr className="table_data">
            <td>
               <a onClick={() => setDetailsPopup(true)}> ID</a>
            </td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
        </table>
      </div>
      <div className="other_requests_header">Other requests requests</div>
      <table className="data_others">{/* <tr><td>data to be fetched from table</td></tr> */}</table>

    <NGODataPopup trigger = {detailsPopup}>
        <h1>ID</h1>
    </NGODataPopup>

    <UserInfoPopup trigger = {udetailsPopup}>
        <h1>User details form</h1>
    </UserInfoPopup>
    </div>
  );
}

export default DashhboardNGO;
