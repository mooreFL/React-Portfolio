import React from "react";
import "./style.css";
import resume from "./updatedresume.pdf";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav({setPage, pages}) {
  return (
    <nav className="container">
      <a className="about" onClick={()=>setPage(pages[0])}>
        About{" "}
      </a>
      <a className="about" onClick={()=>setPage(pages[1])}>
        Work{" "}
      </a>
      <a className="about" onClick={()=>setPage(pages[2])}>
        Contact{" "}
      </a>
      <a className="about" href={resume}>Resume</a>
    </nav>
  );
}

export default Nav;
