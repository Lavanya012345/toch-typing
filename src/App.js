import React from "react";
import TypingBox from "./TypingBox";
import "./style.css";

const App = () => {
  return (
    <div className="bg-container">
      <h1 className="heading">Touch Typing Practice</h1>
      <TypingBox />
    </div>
  );
};

export default App;
