import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import BotMessage from "./Components/BotMessage";
import AllRounds from "./Components/allrouds";
import Collaborators from "./Components/Collaborators";

function App() {
  return (
    <>
      {/* note that this is just to test. We will rende these components conditionally */}
      <Header />
      <MainHeader />
      <Qualities />
      <AllRounds />
      <BotMessage />
      {/*<Collaborators />*/}
    </>
  );
}

export default App;
