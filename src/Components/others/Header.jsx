import React from "react";
import "./Header.css";
import logo from "../others/assets/Logo.png";

export default function Header() {
  const principalColor = "#B3B3FA";

  return (
    <div className="mainHead">
      <div className="headLeft">
        <img src={logo} alt="logo here" />
        <h3 className="title">Medica</h3>
      </div>
      <div className="headRight">
        <ul>
          <li>About</li>
          <li>Process</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
