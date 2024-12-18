import React, { useState } from "react";
import "./getSymptoms.css";
import BotImage from "./BotImage";
import Allergies from "./Allergies";
import Inherited from "./Inherited";
import validate from "../../assets/validate.png";
import { useNavigate } from "react-router-dom";
const GetSymptoms = () => {
  const [allAllergies, setAllergies] = useState([]);
  const [allIllnesses, setAllIllnesses] = useState([]);
  const handleSetAllergies = (data) => {
    setAllergies(data);
    console.log(allAllergies);
  };
  const handleSetIllnesses = (data) => {
    setAllIllnesses(data);
    console.log(allIllnesses);
  };
  const navigate = useNavigate();
  return (
    <div className="getSymptoms">
      <BotImage />
      <div className="get">
        <h1>We are happy to have you with us</h1>
        <h3>We will need some vital information about your health</h3>
        <Allergies sendToParent={handleSetAllergies} />
        {console.log(allAllergies)}
        <Inherited sendAbove={handleSetIllnesses} />
        <button
          onClick={() => navigate("/welcome")}
          type="submit"
          className="submit"
        >
          <img src={validate} alt="proceed" />
          <span>Proceed</span>
        </button>
      </div>
    </div>
  );
};

export default GetSymptoms;
