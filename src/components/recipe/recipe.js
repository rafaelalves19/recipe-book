import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

import Popup from "./popup/popup";
import PopupVideo from "./popupvideo/popupvideo";
import AddFavourite from "../add-favourites/addFavourites";

import "./recipe.css";

export default function Recipe(props) {
  const [meal, setMeal] = useState([]);
  const [id, setId] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupVideo, setButtonPopupVideo] = useState(false);
  const strIngredientsArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    console.log(props.id);
    setLoading(true);

    if (props.id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals[0]);
          setLoading(false);
        });
    } else {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals[0]);
          setLoading(false);
          setInstructions(data.meals[0].strInstructions.split("."));
        });
    }
  }, [props.randomize, id]);

  return loading ? (
    "Loading..."
  ) : (
    <div className="recipe-container">
      <div className="recipe__image-container">
        <img
          className="recipe__image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <AddFavourite id={meal.idMeal} />
      </div>

      <div className="recipe__info">
        <div className="recipe__name">
          <h2>{meal.strMeal}</h2>
        </div>
        <div className="recipe__ingredients">
          <p>Ingredients: </p>
          <ul>
            {strIngredientsArray.map((item, i) => {
              return (
                meal[`strIngredient${item}`] && (
                  <li key={i}> {meal[`strIngredient${item}`]}</li>
                )
              );
            })}
          </ul>
        </div>
        <div className="recipe__instructions">
          <button
            onClick={() => setButtonPopupVideo(true)}
            className="recipe__button-video"
          >
            <img
              className="recipe__video"
              src="./icons/play-button.png"
              alt="icon video"
            />
          </button>
          <PopupVideo
            trigger={buttonPopupVideo}
            setTrigger={setButtonPopupVideo}
          >
            <ReactPlayer
              controls
              width="100%"
              height="380px"
              url={meal.strYoutube}
            />
          </PopupVideo>
          <div className="recipe__preparation">
            <p>Preparation:</p>
            <ol>
              {instructions.map((instruction, index) =>
                index !== instructions.length - 1 ? <li>{instruction}</li> : ""
              )}
            </ol>
            <button
              onClick={() => setButtonPopup(true)}
              className="recipe__full-recipe"
            >
              See more
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <ol>
                {instructions.map((instruction, index) =>
                  index !== instructions.length - 1 ? (
                    <li>{instruction}</li>
                  ) : (
                    ""
                  )
                )}
              </ol>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
