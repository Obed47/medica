import { useState } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import ConsultationPage from "./Components/Consultation/consultationPage";
function App() {
  return (
    <>
      {/* note that this is just to test. We will rende these components conditionally */}
      <ConsultationPage/>
      
    </>
  );
}

export default App;
