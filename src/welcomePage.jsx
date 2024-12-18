import React from "react";
import Header from "../src/Components/others/Header";
import MainHeader from "./Components/others/MainHeader";
import Qualities from "./Components/others/Qualities";
import AllRounds from "./Components/others/allrouds";
import BotMessage from "../src/Components/others/BotMessage";
import Collaborators from "./Components/others/Collaborators";
import Footer from "./Components/others/Footer";
export default function WelcomePage() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Qualities />
      <BotMessage />
      <AllRounds />
      <Collaborators />
      <Footer />
    </div>
  );
}
