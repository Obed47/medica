import React, { useState } from "react";
import "./inherited.css";
import add from "../../assets/add-btn.png";
import Illness from "./illness";

const Inherited = () => {
  const [inherited, setInherited] = useState(["hello"]);
  const [currentIllness, setCurrentIllness] = useState("");

  const deleteIllness = (toRemove) => {
    setInherited(inherited.filter((item) => item !== toRemove));
  };
  const handleChange = (e) => {
    setCurrentIllness(e.target.value);
  };
  const addNewillness = (illnessToAdd) => {
    if (currentIllness.length != 0) {
      setInherited([...inherited, illnessToAdd]);
    } else {
      alert("can't add empty heriditary illness");
    }
  };
  return (
    <div className="inherited">
      <h3>Inheritted Illnesses</h3>
      <div className="content">
        <div className="props">
          {inherited.map((item) => {
            return (
              <Illness
                illness={item}
                key={item}
                removeIllness={deleteIllness}
              />
            );
          })}
        </div>
        <div className="button">
          <input
            type="text"
            placeholder="Type illness"
            onChange={handleChange}
          />
          <button onClick={() => addNewillness(currentIllness)}>
            <img src={add} alt="add" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inherited;
