import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import WelcomePage from "./welcomePage";
import Robot from "./Components/Consultation/robot";
import ConsultationHistory from "../src/Components/Consultation/consultationHistory";
export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/illnesses" element={<GetSymptoms />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </div>
  );
}
