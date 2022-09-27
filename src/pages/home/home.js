import React from "react";

import Recipe from "../../components/recipe/recipe";
import Suggested from "../../components/suggested/suggested";


export default function Home(props) {
  return (
    <div className="home__container">
      <Recipe randomize={props.randomize}/> 
      <Suggested className="suggested-container" />
    </div>
  );
}
