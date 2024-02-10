import React, { useState } from "react";

function NgoForm({ onSubmit, onBack }) {
  const [formValues, setFormValues] = useState({
    name: "",
    addressline1: "",
    addressline2: "", // This field is not mandatory
    city: "",
    contact: "",
    registrationId: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for presence of all fields except addressline2
    if (
      !formValues.ngoname ||
      !formValues.addressline1 ||
      !formValues.city ||
      !formValues.contact ||
      !formValues.registrationid
    ) {
      setErrorMessage("All fields required.");
      return;
    }
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(formValues.contact)) {
      setErrorMessage("Please enter a valid phone number (10 digits).");
      return;
    }

    setErrorMessage(""); // Clear any error message
    onSubmit(formValues); // Pass form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ngo-form">
        <label>NGO Name:</label>
        <input
          type="text"
          name="ngoname" // Correct the name attribute to match the state key
          value={formValues.ngoname}
          onChange={handleInputChange}
        />
      </div>
      <div className="ngo-form">
        <label>Address line1:</label>
        <input
          type="text"
          name="addressline1" // Correct the name attribute to match the state key
          value={formValues.addressline1}
          onChange={handleInputChange}
        />
      </div>

      <div className="ngo-form">
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
        />
      </div>

      <div className="ngo-form">
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formValues.contact}
          onChange={handleInputChange}
        />
      </div>
      <div className="ngo-form">
        <label>Registration Id:</label>
        <input
          type="text"
          name="registrationid"
          value={formValues.registrationid}
          onChange={handleInputChange}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">Submit</button>
      <button type="button" onClick={onBack}>
        Back
      </button>
    </form>
  );
}

export default NgoForm;
