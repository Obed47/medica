import React from "react";
import heart from "../../assets/Heart.png";
import timeLogo from "../../assets/Past.png";
import "./options.css";
export default function Options() {
  return (
    <div  className="mainOptions">
      <ul>
        <li>
          <img src={heart} alt="" />
          <p>Get Consulted</p> <span></span>
        </li>
        <li>
          <img src={timeLogo} alt="" />
          <p>Past consultations</p> <span> </span>
        </li>
      </ul>
    </div>
  );
}
