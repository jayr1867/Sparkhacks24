import { useState } from "react";
import ReactDOM from "react-dom";

import "./DashboardDoner.css";

function DashhboardDoner() {
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
        <button
          type="button"
          className="prof_btn"
          onClick={() => setDetailsPopup(true)}
        >
          img
        </button>
      </div>
      <div className="reqbtn">
        {/* adding + sign img */}
        <button type="button" className="new_donation_btn">
          New Donation
        </button>
      </div>
      <div className="active_requests_header">Active requests</div>
      <div className="active_requests_table">
        <table className="data_active">
          <th className="table_header">
            <td className="id">ID</td>
            <td className="request_details"> Request Details</td>
            <td className="status">Status</td>
            <td className="expiry">Expiry</td>
          </th>
          <tr className="table_data">
            <td>id</td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
        </table>
      </div>
      <div className="other_requests_header">Other requests requests</div>
      <table className="data_others">
        {/* <tr><td>data to be fetched from table</td></tr> */}
      </table>
      <UserInfoPopup trigger={udetailsPopup}>
        <h1>User details form</h1>
      </UserInfoPopup>
    </div>
  );
}

export default DashhboardDoner;
