import { useState } from "react";
import ReactDOM from "react-dom";

import "./DashboardDoner.css";

function DashhboardDoner() {
  const [errorMessage, seterrorMessage] = useState("");
  const [udetailsPopup, setuDetailsPopup] = useState(false);
  const [nddetailsPopup, setndDetailsPopup] = useState(false);


  const [formValues, setFormValues] = useState({
    addressline1: "", // Ensure the state keys match the input name attributes
    addressline2: "", // This field is not mandatory
    city: "",
    country: "", // Corrected to lowercase to match the naming convention
    contact: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Correctly use the state key based on the input's name attribute
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for presence of all fields except addressline2
    if (
      !formValues.addressline1 ||
      !formValues.city ||
      !formValues.contact ||
      (formValues.dietry-rest == "Selected" ) ||
      (formValues.exp == "Selected" )||
      !formValues.qty
    ) {
      seterrorMessage("All fields are required.");
      return;
    }


  };

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
        <button type="button" className="new_donation_btn" onClick={() => setndDetailsPopup(true)}>
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
          <tr className="table_data">
            <td>id</td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
          <tr className="table_data">
            <td>id</td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
          <tr className="table_data">
            <td>id</td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
          <tr className="table_data">
            <td>id</td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
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
      <UserInfoPopup trigger={udetailsPopup} setTrigger={setuDetailsPopup}>
        <h1>User details form</h1>
      </UserInfoPopup>
      <NewDonationsPopup trigger={nddetailsPopup} setTrigger={setndDetailsPopup}>
        <div className="form-donerdash">
          <form action="post" className="donerDash-from" onSubmit={handleSubmit}>
            <div className="address donor-form">
              <label className="addresslbl">Address line 1:</label>
                <input type="text" name="addressline1" className="addressinp" onChange={handleInputChange}/>
            </div>
            <div className="city donor-form">
              <label className="citylbl ">City:</label>
                <input type="text" name="city" className="cityinp" onChange={handleInputChange}/>
            </div>
            <div className="contact donor-form">
              <label className="contactlbl">Contact:</label>
                <input type="text" name="contact" className="contactinp" onChange={handleInputChange}/>
            </div>
            <div className="dietry-rest donor-form">
              <label className="dietry-restlbl">Dietry Restriction:</label>
              <select name="dietry-rest" className="dietry-rest" onChange={handleInputChange}>
                <option value="Selected" className="selected" selected>Select Dietry rest.</option>
                <option value="veg" className="veg">Veg.</option>
                <option value="non-veg" className="non-veg">Non-Veg.</option>
              </select>
            </div>
            <div className="exp donor-form">
              <label className="explbl">Dietry Restriction:</label>
              <select name="exp" className="exp" onChange={handleInputChange}>
                <option value="Selected" className="selected" selected>Select Estimated pickup time.</option>
                <option value="veg" className="veg">30 mins</option>
                <option value="60min" className="60min">60 mins</option>
                <option value="90min" className="90min">90 mins</option>
                <option value="120min" className="120min">120 mins</option>
                <option value="180min" className="180min">180 mins</option>
              </select>
            </div>
            <div className="qty donor-form">
              <label className="qtylbl">No of servings:</label>
                <input type="text" name="qty" className="qtyinp" onChange={handleInputChange}/>
            </div>
            {errorMessage && <p style = {{color: "red"}}>{errorMessage}</p>}
            <button type="Submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </NewDonationsPopup>
    </div>
  );
}

export default DashhboardDoner;
