import { useState } from "react";
import "./user.css";
import DonorForm from "./components/donorForm.jsx";
import NgoForm from "./components/NGOform";
import NGO from "./components/NGO.jsx";
import Donor from "./components/Donor.jsx";
import Background from "./Background.jsx";
import "./components/NGO.css";
import "./components/DonorForm.css";

function User() {
  const [showForm, setShowForm] = useState(false);
  const [showNGOForm, setShowNGOForm] = useState(false);
  const [showDonor, setShowDonor] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
  };

  const toggleDonorForm = () => {
    console.log("Toggling Donor Form");
    setShowForm(!showForm);
    setShowNGOForm(false);
    setShowDonor(!showDonor);
  };

  const toggleNGOForm = () => {
    console.log("Toggling NGO Form");
    setShowNGOForm(!showNGOForm);
    setShowForm(false);
    setShowDonor(false);
  };

  return (
    <>
      <Background />
      <div className="user">
        <div className="button-container">
          {!showNGOForm && <button onClick={toggleDonorForm}>Donor</button>}
          {!showForm && <button onClick={toggleNGOForm}>NGO</button>}
        </div>
        {showForm && (
          <DonorForm onSubmit={handleFormSubmit} onBack={toggleDonorForm} />
        )}
        {showNGOForm && (
          <NgoForm onSubmit={handleFormSubmit} onBack={toggleNGOForm} />
        )}
      </div>
    </>
  );
}

export default User;
