import { useState } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import GetSymptoms from "./Components/others/GetSymptoms";

function App() {
  return (
    <>
      {/* note that this is just to test. We will rende these components conditionally */}
      <GetSymptoms/>
      
    </>
  );
}

export default App;
