import React from "react";
import "./mainHeader.css";
import man from "../assets/man.png";
export default function MainHeader() {
  return (
    <div className="mainHeader">
      <div className="leftImage">
        <img className="image" src={man} alt="illustration image" />
      </div>
      <div className="textRight">
        <h1 className="mainText">You May Not Have To Meet A Doctor Again</h1>
        <h4 className="subText">
          Self Consultation Has Never Been Easier And Better Done From Home With
          No Effort With Medica
        </h4>
        <button className="buttonStart">Get Started</button>
        <p>Lootie here to scroll</p>
      </div>
    </div>
  );
}
