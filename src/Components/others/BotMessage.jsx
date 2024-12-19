import React from "react";
import "./botMessage.css";
import bot from "../others/assets/bot.png";
import { useNavigate } from "react-router-dom";
const BotMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="second-container">
        <img src={bot} alt="Medica" className="Bot" />
        <div className="container">
          <p>
            Meet Medica. Your medical prescription assistant. He’s here to help
            so you must not stand on the long waiting lines in hospitals hoping
            to see a doctor
          </p>
          <button
            onClick={() => navigate("/toChatbot")}
            className="buttonStart"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotMessage;
