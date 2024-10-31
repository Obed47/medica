import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import AllRounds from "./Components/allrouds";
function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <Qualities />
      <AllRounds />
    </>
  );
}

export default App;
