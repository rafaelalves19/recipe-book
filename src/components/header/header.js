import React from "react";
/* import { Link } from "react-router-dom";
 */
import Nav from "../navbar/navbar";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header__container">
      <div className="header__logo-container">
        <img
          className="header__img-logo"
          src="./icons/recipe-logo.png"
          alt="site-logo"
        />
        <h1 className="header__name">
          <b>Recipe</b>book.com
        </h1>
      </div>
      <Nav handleRandomize={props.handleRandomize} />
    </header>
  );
}
