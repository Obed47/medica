import React, { useEffect } from "react";
import DoctorFigure from "./doctorFigure";
import dr1 from "../others/assets/dr1.png";
import dr2 from "../others/assets/dr2.png";
import dr3 from "../others/assets/dr3.png";
import dr4 from "../others/assets/dr4.png";
import "./collaborators.css";
const Collaborators = () => {
  return (
    <div className="collaborators-container">
      <h1>In Collaboration With Highly Trained Medical personnel</h1>
      <div className="scroll">
        <div className="figures">
          <DoctorFigure
            background={dr1}
            name={"Dr Kalera H"}
            post={"Ophtamologist"}
          />
          <DoctorFigure
            background={dr4}
            name={"Dr Kalera H"}
            post={"Ophtamologist"}
          />
          <DoctorFigure
            background={dr3}
            name={"Dr Kalera H"}
            post={"Ophtamologist"}
          />
          <DoctorFigure
            background={dr2}
            name={"Dr Kalera H"}
            post={"Ophtamologist"}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaborators;