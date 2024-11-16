import React from "react";
import "./botMessage.css";

const BotMessage = () => {
  const consult = "Consult";
  return (
    <div className="botMessage">
      <p>We Consult And Prescribe Medical Advice And Remedies</p>
      <div className="options">
        <span>{consult}</span>
        <span>Get prescriptions</span>
        <span>Buy Drugs</span>
      </div>
    </div>
  );
};

export default BotMessage;
