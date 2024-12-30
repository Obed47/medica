import React,{useState} from "react";
import robotImage from "../../assets/robot.png";
import tick from "../../assets/tick.png";
import "./robot.css";
import { Link } from "react-router-dom";
import Options from "./options";
export default function Robot() {
  const [userId, setUserId] = useState("")
  setUserId(parseInt(localStorage.getItem("user").split(',')[0]))

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
        <Link to={`http://37.60.244.227:2002/params?id=${userId}`}>
          <button className="Button"> Get Consuted</button>
        </Link>
      </div>
    </div>
  );
}
