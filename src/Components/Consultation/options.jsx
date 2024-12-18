import React from "react";
import heart from "../../assets/Heart.png";
import timeLogo from "../../assets/Past.png";
import mapLogo from "../../assets/map.svg";
import "./options.css";
import { useNavigate } from "react-router-dom";
export default function Options() {
  const navigate = useNavigate();
  return (
    <div className="mainOptions">
      <ul onClick={() => navigate("/consultation")}>
        <li>
          <img src={heart} alt="" />
          <p>Get Consulted</p> <span></span>
        </li>
        <li onClick={() => navigate("/consultationHistory")}>
          <img src={timeLogo} alt="" />
          <p>Past consultations</p> <span> </span>
        </li>
        <li onClick={() => navigate("/map")}>
          <img src={mapLogo} alt="" />
          <p>Pharmacies Around</p> <span> </span>
        </li>
      </ul>
    </div>
  );
}
