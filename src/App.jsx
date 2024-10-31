import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import BotMessage from "./Components/BotMessage";


function App() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Qualities />
      <BotMessage />

    </div>
  );
}

export default App;
