import { useState } from "react";
import "./App.css";
import Allergies from "./Components/others/allergie";
import Inherited from "./Components/others/Inherited";
import LoginPage from "./Components/LoginPage";
import ConsultationPage from "./Components/Consultation/consultationPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import Map from "./Components/others/map";
function App() {
  //note that the GetSymthoms component has all about allergies and inheritted illnesses
  return (
    <>
      {/* note that this is just to test. We will rende these components conditionally */}
      <LoginPage />
    </>
  );
}

export default App;
