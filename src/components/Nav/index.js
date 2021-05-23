import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    
    <nav className="container">
        <a class="about" href="#about">About </a>
        <a class="about" href="#work">Work </a>
        <a class="about" href="#contact">Contact </a>
        <a class="about" href="./assets/updatedresume.pdf">Resume </a>
      </nav>
  );
}

export default Nav;
