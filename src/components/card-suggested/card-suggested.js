import React from "react";
import { useEffect, useState } from "react";

import "./card-suggested.css";

export default function Card(props) {
  const [meal, setMeal] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        });
    }
  }, []);

  return loading ? (
    "Loading..."
  ) : (
    <a href="#" className="card-container">
      <div className="card__recipe-info">
        <h4 className="card__recipe-name">{meal.strMeal}</h4>
        <ul className="card__recipe-ingredients">
          <li>{meal.strIngredient1}</li>
          <li>{meal.strIngredient2}</li>
          <li>{meal.strIngredient3}</li>
        </ul>
        <div className="card__recipe-icon">
          <img
            className="card__icon"
            src={`./icons/${meal.strCategory}.png`}
            alt={meal.strCategory}
          />
        </div>
      </div>
      <div className="card__recipe-img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </a>
  );
}
