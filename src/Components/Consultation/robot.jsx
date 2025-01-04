import React, { useState, useEffect } from "react";
import robotImage from "../../assets/robot.png";
import tick from "../../assets/tick.png";
import "./robot.css";
import { Link } from "react-router-dom";
import Options from "./options";
export default function Robot() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const userIdentifier = localStorage.getItem("user").split(",")[0];
    const userid = userIdentifier;
    setUserId(userid);
    console.log("User id: ", userId);
  }, []);

  const openRobot = (userId)=>{
    window.open(`https://medica.smartcloudservices.cloud/medica/params?id=${userId}`,'_blank')
  }


  return (
    <div className="principalMain">
      <Options />

      <div className="mainRobot">
        <img className="w-50 h-50" src={robotImage} alt="" />
        <div className="flex items-center m-5 w-30">
          <input className="w-10 h-10 rounded-md p-5" type="checkbox" />
          <p className="p-10 justify-start">
            Be rest assured we value your privacy and confidentiality and
            strictly respect and keep that private. Please conscent to allow
            Medica access your personal data for better performance
          </p>
        </div>
        {/*<Link
          to={`https://medica.smartcloudservices.cloud/medica/params?id=${userId}`}
        >*/}
          <button className="Button" onclick={openRobot(userId)}
          
          > Get Consuted</button>
        {/*</Link>*/}
      </div>
    </div>
  );
}
