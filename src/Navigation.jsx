import React from "react";
import { Routes, Route } from "react-router-dom";
import Allergies from "./Components/others/allergie";
import Inherited from "./Components/others/Inherited";
import LoginPage from "./Components/LoginPage";
import ConsultationPage from "./Components/Consultation/consultationPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import Map from "./Components/others/map";
import DoctorFigure from "./Components/doctorFigure";
export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DoctorFigure />} />
        <Route path="illnesses" element={<GetSymptoms />} />
      </Routes>
    </div>
  );
}
