import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import BotMessage from "./Components/BotMessage";
import AllRounds from "./Components/allrouds";
function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <Qualities />
      <AllRounds />
      <BotMessage />
    </>
  );
}

export default App;
