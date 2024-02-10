import React from "react";
import "./NewDonationsPopup.css";

function NewDonationsPopup(props) {
  return props.trigger ? (
    <div className="NewDonationsPopup">
      <div className="ndpopup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewDonationsPopup;
