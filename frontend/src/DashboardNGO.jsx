import { useState } from "react";
import ReactDOM from "react-dom";

import "./DashboardNGO.css";
import NGODataPopup from "./NGODataPopup.jsx";
import UserInfoPopup from "./UserInfoPopup.jsx";

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
        <button
          type="button"
          className="prof_btn"
          onClick={() => setuDetailsPopup(true)}
        >
          img
        </button>
      </div>
      <div className="reqbtn">
        {/* adding + sign img */}
        <button
          type="button"
          className="all_accepted_btn"
          // onClick={() => }
        >
          All Accepted Reqs.
        </button>
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

      <NGODataPopup trigger={detailsPopup} setTrigger={setDetailsPopup}>
        <h1>ID</h1>
      </NGODataPopup>

      <UserInfoPopup trigger={udetailsPopup} setTrigger={setuDetailsPopup}>
        <h1>User details form</h1>
      </UserInfoPopup>
    </div>
  );
}

export default DashhboardNGO;
