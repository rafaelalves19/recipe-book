import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <p>
          Flag-Project || Recipe Book made with
          <span>
            <img src="./icons/heart.png" alt="heart" />
          </span>
          by Rafael Alves
        </p>
      </div>
      <picture className="footer__social-links">
        <a
          href="https://gitlab.com/rafa3lalv3s19"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/gitlab.png" alt="gitlab" />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-alves-03b00a235/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/rafaelalves19/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/instagram.png" alt="instagram" />
        </a>
      </picture>
    </footer>
  );
}
