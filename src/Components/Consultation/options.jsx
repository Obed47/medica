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
      <ul>
        <li onClick={() => navigate("/toChatbot")}>
          <img src={heart} alt="" />
          <p>Get Consulted</p> <span></span>
        </li>
        <li onClick={() => navigate("/consultation")}>
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
