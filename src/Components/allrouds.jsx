import React from "react";
import Round from "./Round";
import "./allRounds.css";
import round1 from "../assets/round1.png";
import round2 from "../assets/round2.png";
import round3 from "../assets/round3.png";
export default function AllRounds() {
  const text1 =
    "Fill in info about your symtoms, heriditary illnesses and others";
  const text2 =
    "Get appropriate and valid medicine prescription corresponding to the illness";
  const text3 =
    "Visit a Pharmacy and purchase the medicines as prescribed. Follow the right dose and get well";
  return (
    <div className="allRounds">
      <Round image={round1} text={text1} />
      <Round image={round2} text={text2} />
      <Round image={round3} text={text3} />
    </div>
  );
}
