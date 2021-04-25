import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          className="github"
          href="https://github.com/Aneta21/Weather-app-project"
          target="_blank"
        >
          Open-source code
        </a>
        by{" "}
        <a
          className="aneta"
          href="https://www.linkedin.com/in/aneta-stepankova"
          target="_blank"
        >
          Aneta
        </a>
      </footer>
    </div>
  );
}
