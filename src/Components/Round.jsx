import React from "react";
import "./Round.css";
export default function Round({ image, text }) {
  return (
    <div className="oneRound">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}
