import React from "react";
import  { Q } from "./type.js";
import "../App.css"

const CF = ["Se-Ni", "Si-Ne", "Ti-Fe", "Te-Fi"];
const IS = [
  "Direct",
  "Informative",
  "Initiating",
  "Responding",
  "Control",
  "Movement",
];
const Temps = [
  "Affiliative",
  "Pragmatic",
  "Concrete",
  "Abstract",
  "Systematic",
  "Interest",
];
const Quadra = Object.keys(Q).map((a) => a);

export function LeftSide(props) {
  const clickHandler = (event) => {
    event.classList.toggle("btnClick");
    props.addBtn(event.target.innerText);
  };
  return (
    <div className="section1">
      <div className="CF-section">
        {CF.map((a, key) => (
          <button onClick={clickHandler} className="btn" key={key}>
            {a}
          </button>
        ))}
      </div>

      <div className="Quadra-section">
        {Quadra.map((a, key) => (
          <button className="btn" onClick={clickHandler} key={key}>
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

export function RightSide(props) {
  const clickHandler = (event) => {
    props.addBtn(event.target.innerText);
  };

  return (
    <div className="section2">
      <div className="IS-section">
        {IS.map((a, key) => (
          <button onClick={clickHandler} key={key} className="btn">
            {a}
          </button>
        ))}
      </div>

      <div className="Temp-section">
        {Temps.map((a, key) => (
          <button onClick={clickHandler} key={key} className="btn">
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
