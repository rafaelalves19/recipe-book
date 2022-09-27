import React from "react";

import "./popupvideo.css";

export default function PopupVideo(props) {
  return props.trigger ? (
    <div className="popupvideo">
      <div className="popup-video-container">
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
