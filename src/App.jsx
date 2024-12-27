import { useState, useContext, createContext } from "react";
import "./App.css";
export const userIdentifier = createContext();

import Navigation from "./Navigation";
function App() {
  const [global, setGlobal] = useState(1010);
  return (
    <>
      <userIdentifier.Provider value={global}>
        <Navigation />
      </userIdentifier.Provider>
    </>
  );
}

export default App;
