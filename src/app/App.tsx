import React from "react";
import Navbar from "./Navbar/Navbar";
import DisplayItem from "./Home/DisplayItems";
import "./App.css";
import Home from "./Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Home />
      </div>
    </div>
  );
};

export default App;
