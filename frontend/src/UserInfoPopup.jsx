import React from "react";

function UserInfoPopup(props) {
  return props.trigger ? (
    <div className="UserInfoPopup">
      <div className="upopup-inner">
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

export default UserInfoPopup;
