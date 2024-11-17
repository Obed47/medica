import React, { useState } from "react";
import "./allergies.css";
import add from "../../assets/add-btn.png";
import Allergie from "./allergie";

const Allergies = () => {
  const [allergies, setAllergies] = useState([]);
  const [currentAllergy, setCurrentAllergy] = useState("");
  const AddAllergy = (allergy) => {
    console.log(allergies);
    if(currentAllergy.length!=0){
        setAllergies([...allergies, allergy]);
    }
    else{
        alert('Cant add empty allergy')
    }
    
    setCurrentAllergy("");
  };
  const removeAlergy = (alergy) => {
    setAllergies(allergies.filter((item) => item !== alergy));
  };
  const handleChange = (e) => {
    setCurrentAllergy(e.target.value);
  };
  return (
    <div className="allergies">
      <h3>Allergies</h3>
      <div className="content">
        <div className="props">
          {allergies.map((item) => {
            return (
              <Allergie
                allergie={item}
                key={item}
                deleteAlergy={removeAlergy}
              />
            );
          })}
        </div>
        <div className="button">
          <input
            type="text"
            placeholder='Enter allergy'
            onChange={handleChange}
          />
          <button onClick={() => AddAllergy(currentAllergy)}>
            <img src={add} alt="add" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
