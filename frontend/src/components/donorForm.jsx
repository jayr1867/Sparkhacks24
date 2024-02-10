import React, { useState } from "react";

function DonorForm({ onSubmit, onBack }) {
  const [formValues, setFormValues] = useState({
    addressline1: "", // Ensure the state keys match the input name attributes
    addressline2: "", // This field is not mandatory
    city: "",
    country: "", // Corrected to lowercase to match the naming convention
    contact: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Correctly use the state key based on the input's name attribute
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for presence of all fields except addressline2
    if (!formValues.addressline1 || !formValues.city || !formValues.contact) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Simple validation for phone number format
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
      <div className="donor-form">
        <label>Address line1:</label>
        <input
          type="text"
          name="addressline1" // Correct the name attribute to match the state key
          value={formValues.addressline1}
          onChange={handleInputChange}
        />
      </div>

      <div className="donor-form">
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
        />
      </div>

      <div className="donor-form">
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formValues.contact}
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

export default DonorForm;
