import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInput,
  checkInput,
  resetPractice,
  updateTimeRemaining,
} from "./actions";
import "./style.css";

const TypingBox = () => {
  const dispatch = useDispatch();
  const targetKey = useSelector((state) => state.targetKey);
  const feedback = useSelector((state) => state.feedback);
  const statistics = useSelector((state) => state.statistics);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (statistics.timeRemaining > 0) {
      const timer = setInterval(() => {
        dispatch(updateTimeRemaining());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [statistics.timeRemaining, dispatch]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    dispatch(updateInput(inputValue));
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(checkInput(input));
      setInput("");
    }
  };

  const handleReset = () => {
    dispatch(resetPractice());
    setInput("");
  };

  return (
    <div className="container">
      <p>Target Key: {targetKey}</p>
      <input
        className="input-box"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <p>{feedback}</p>
      <p>Keys Pressed: {statistics.keysPressed}</p>
      <p>Accuracy: {statistics.accuracy}%</p>
      <p>Time Remaining: {statistics.timeRemaining}s</p>
      <button className="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TypingBox;
