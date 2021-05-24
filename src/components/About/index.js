import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function About() {
  return (
    <main>
      <div>
        <h1 className="sign">
          Hi! I'm Patrick Moore.
        </h1>
        <p>
          I am currently attending the University of Central Florida full-stack developer boot camp.
        </p>
      </div>
    </main>
  );
}

export default About;
