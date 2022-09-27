import React, { useState, useEffect } from "react";

import Card from "../../components/card-suggested/card-suggested";
import PopupFav from "./popupfav/popupfav";
import Recipe from "../../components/recipe/recipe";

import "./favorites.css";

export default function Favorites() {
  const [cardPopupFav, setCardPopupFav] = useState(false);
  const [id, setId] = useState(-1);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );

  const setTrigger = (bool) => {
    setCardPopupFav(bool);
  };

  useEffect(() => {
    console.log(cardPopupFav);
  });

  return (
    <div className="favorites">
      {favorites &&
        favorites.map((id, i) => {
          return (
            <div
              onClick={() => {
                setCardPopupFav(true);
                setId(id);
              }}
              key={i}
            >
              <Card id={id} />
            </div>
          );
        })}

      {cardPopupFav && (
        <PopupFav setTrigger={setTrigger}>
          <Recipe id={id} />
        </PopupFav>
      )}
    </div>
  );
}
