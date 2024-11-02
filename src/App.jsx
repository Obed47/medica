import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import BotMessage from "./Components/BotMessage";
import AllRounds from "./Components/allrouds";
import Collaborators from "./Components/Collaborators";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <Qualities />
      <AllRounds />
      <BotMessage />
      <Collaborators />
      <Footer/>
    </>
  );
}

export default App;
