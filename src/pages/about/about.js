import React from "react";

import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <picture className="about__picture">
        <img src="./icons/cooking.png" alt="girl cooking" />
      </picture>
      <div className="about__text-container">
        <h1 className="about__text-title">About this Project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          euismod a neque a bibendum. Vestibulum molestie turpis et ligula
          mattis vehicula. Donec quis sagittis ex. Donec ullamcorper ligula at
          fermentum mattis. Quisque tincidunt enim nec nisl varius, a aliquam
          neque venenatis. Vivamus facilisis elit a nisi volutpat laoreet.
          Nullam tellus tortor, pellentesque aliquam congue non, congue nec.
        </p>
      </div>
      <picture className="about__picture">
        <img src="./icons/cooking1.png" alt="boy cooking" />
      </picture>
    </div>
  );
}
