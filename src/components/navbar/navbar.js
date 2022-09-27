import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "./hamburger-menu/hamburger";

import "./navbar.css";

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <div onClick={() => handleMenuClick()} className="nav__hamburger-menu">
          <Hamburger />
        </div>
        <ul className="nav__container">
          <li>
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="nav__link">
              Favorites
            </NavLink>
          </li>
          <li>
            <div
              onClick={() => props.handleRandomize()}
              className="nav__link cta"
            >
              Randomize
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
