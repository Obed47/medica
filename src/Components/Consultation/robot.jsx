import React from "react";
import robotImage from "../../assets/robot.png";
import tick from "../../assets/tick.png";
import "./robot.css";
import Options from "./options";
export default function Robot() {
  return (
    <div className="principalMain">
      <Options />

      <div className="mainRobot">
        <img className="w-50 h-50" src={robotImage} alt="" />
        <div className="flex items-center m-10">
          <input className="w-20 h-20 rounded-md p-5" type="checkbox" />
          <p className="p-10">
            Be rest assured we value your privacy and confidentiality and
            strictly respect and keep that private. Please conscent to allow
            Medica access your personal data for better performance
          </p>
        </div>
        <button className="Button"> Get Consuted</button>
      </div>
    </div>
  );
}
