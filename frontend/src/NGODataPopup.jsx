import React from 'react'

function NGODataPopup(props) {
  return (props.trigger)?(
    <div className='NGODataPopup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default NGODataPopup