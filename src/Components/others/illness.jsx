import React from "react";
import "./illness.css";
import remove from "../../assets/delete.svg";

const Illness = ({ illness, removeIllness }) => {
  const handdleRemove = () => {
    removeIllness(illness);
  };
  return (
    <div className="illness">
      <input type="text" value={illness} />
      <img src={remove} alt="remove" onClick={handdleRemove} />
    </div>
  );
};

export default Illness;
