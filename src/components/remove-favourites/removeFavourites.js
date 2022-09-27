import React from "react";

import "./removeFavourites.css";

export default function RemoveFavourite(props) {
  return (
    <div
      onClick={() => {
        localStorage.removeItem(props.id);
      }}
      className="remove-container"
    >
      <img className="remove-icon" src="./icons/cross.png" alt="cross" />
    </div>
  );
}
