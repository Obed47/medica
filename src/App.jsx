import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainHeader from "./Components/MainHeader";
import Qualities from "./Components/Qualities";
function App() {
  return (
    <div>
      <Header />
      <MainHeader />
      <Qualities />
    </>
  );
}

export default App;
