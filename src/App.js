import React, { useState } from "react";
import "./app.css";
import data from "./data.jsx";
import "./card.css";

export default function App() {
  const [sub, setSub] = useState(0);
  const [selectedOption, setOp] = useState("");
  const [result, setResult] = useState(0);
  var optionsArray = data[sub] ? data[sub].options : [];

  function handleChange(option) {
    console.log("Selected Option:", option);
    setOp(option);
  }
  
  function handleSubmit() {
    if (selectedOption === data[sub].answer) {
      setResult(result + 1);
    }
    console.log("Current score is:", result);
    setOp("");
    setSub(sub + 1);
  }

  function resetQuiz() {
    setSub(0);
    setResult(0);
  }
  if (sub < data.length) {
    return (
      <div className="card">
        <div className="question">
          <span className="Number">{data[sub].id}) </span>
          {data[sub].question}
        </div>
        <div className="options">
          {optionsArray.map((item, index) => (
            <React.Fragment key={index}>
              <label htmlFor={item}>
                <input
                  type="radio"
                  name="selectedAnswer"
                  id={item}
                  checked={selectedOption === item}
                  onChange={() => handleChange(item)}
                />
                {item}
              </label>
              <br />
            </React.Fragment>
          ))}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div className="show-result">
        <span className="result-text">Hello there, You have successfully attended the quiz
        <br/>Your Result is : {result} out of {data.length}</span><br/>
        <button className="reset-quiz" type="submit" onClick={resetQuiz}>Restart the quiz</button>
      </div>
    )
  }
}
