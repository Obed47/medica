import React from "react";
import "./doctorFigure.css";

const DoctorFigure = ({ background, name, post }) => {
  return (
    <div className="container" style={style}>
      <div className="infos">
        <p className="name">{name}</p>
        <p className="profession">{post}</p>
      </div>
    </div>
  );
};

export default DoctorFigure;
