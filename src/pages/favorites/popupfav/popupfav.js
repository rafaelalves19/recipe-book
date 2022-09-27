import React, { useEffect } from "react";

export default function PopupFav(props) {
  useEffect(() => {
    console.log("render");
  });
  return (
    <div className="popup">
      <div className="popup-container">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <img src="./icons/cross.png" alt="cross" />
        </button>
        {props.children}
      </div>
    </div>
  );
}
