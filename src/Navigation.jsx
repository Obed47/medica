import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import GetSymptoms from "./Components/others/GetSymptoms";
import WelcomePage from "./welcomePage";
import ConsultationPage from "./Components/Consultation/consultationPage";
import Robot from "./Components/Consultation/robot";
import MapComp from "./Components/others/map";
import { Suspense } from "react";
import Spinner from "./Spinner";
export default function Navigation() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/illnesses" element={<GetSymptoms />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/toChatbot" element={<Robot />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/map" element={<MapComp />} />
      </Routes>
    </Suspense>
  );
}
