import React from "react";

import "./popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-container">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <img src="./icons/cross.png" alt="cross" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
