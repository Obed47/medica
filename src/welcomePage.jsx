import React from "react";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
import AllRounds from "./Components/allrouds";
import BotMessage from "./Components/BotMessage";
import Collaborators from "./Components/Collaborators";
import Footer from "./Components/Footer";
export default function WelcomePage() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Qualities />
      <AllRounds />
      <BotMessage />
      <Collaborators />
      <Footer />
    </div>
  );
}
