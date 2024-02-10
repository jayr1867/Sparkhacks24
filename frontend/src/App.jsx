import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./DashboardDoner.css";

function App() {
  const [count, setCount] = useState(0);

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
          <tr className="table_header">
            <th className="id">ID</th>
            <th className="request_details"> Request Details</th>
            <th className="status">Status</th>
            <th className="expiry">Expiry</th>
          </tr>
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
      {/* <UserInfoPopup trigger={udetailsPopup}>
        <h1>User details form</h1>
      </UserInfoPopup> */}
    </div>
  );
}

export default App;
