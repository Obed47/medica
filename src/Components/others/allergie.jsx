import React, { useState } from "react";
import "./allergie.css";
import remove from "../../assets/delete.svg";
const Allergie = ({ allergie, deleteAlergy }) => {
  const handleDelete = () => {
    deleteAlergy(allergie);
    console.log("delete item");
  };
  return (
    <div className="allergie">
      <input type="text" value={allergie} />
      <img src={remove} alt="remove" onClick={handleDelete} />
    </div>
  );
};
export default Allergie;
