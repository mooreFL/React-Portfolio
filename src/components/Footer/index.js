import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <footer>
    <container>
    <a href="https://www.linkedin.com/in/patrick-moore-4ba75b20b/" className="bi bi-linkedin">
    <a href="https://github.com/mooreFL" className="bi bi-github"></a>
    <a href="mailto:moorepr09@gmail.com" className="bi bi-envelope-fill"></a>
    </a>
    <a id="emailAddress">moorepr09@gmail.com</a>
      </container>
    </footer>
  );
}

export default Footer;
