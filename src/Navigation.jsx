import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import WelcomePage from "./welcomePage";
import ConsultationPage from "./Components/Consultation/consultationPage";
import Robot from "./Components/Consultation/robot";
import MapComp from "./Components/others/map";
export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MapComp />} />
        <Route path="/illnesses" element={<GetSymptoms />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/toChatbot" element={<Robot />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/map" element={<MapComp />} />
      </Routes>
    </div>
  );
}
