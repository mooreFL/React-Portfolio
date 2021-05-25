import React from "react";
import "./style.css";
import resume from "./updatedresume.pdf";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="container">
      <a className="about" href="/">
        About{" "}
      </a>
      <a className="about" href="/work">
        Work{" "}
      </a>
      <a className="about" href="/contact">
        Contact{" "}
      </a>
      <a className="about" href={resume}>Resume</a>
    </nav>
  );
}

export default Nav;
