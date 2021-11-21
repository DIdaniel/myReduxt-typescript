import React from "react";
import "./App.css";
import Repositories from "./components/Repositories";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Search For a Package</h1>
      <Repositories />
    </div>
  );
};

export default App;
