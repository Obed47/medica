import { useState, createContext } from "react";
import "./App.css";
export const userIdentifier = createContext();
import Navigation from "./Navigation";
function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
