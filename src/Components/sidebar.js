import React from "react";
import TypesData, { IS, Q, Temps } from "./type.js";

const cf = ["Se-Ni", "Si-Ne", "Ti-Fe", "Te-Fi"];

export function LeftSide() {
  return (
    <div className="section1">
      <div className="CF-section">
        {cf.map((a, key) => (
          <button className="btn" key={key}>
            {a}
          </button>
        ))}
      </div>

      <div className="Quadra-section">
        {Object.keys(Q).map((a, key) => (
          <button className="btn" key={key}>
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

export function RightSide() {
  return (
    <div className="section2">
      <div className="IS-section">
        <button className="btn">Direct</button>
        <button className="btn">Informative</button>
        <button className="btn">Initiating</button>
        <button className="btn">Responding</button>
        <button className="btn">Control</button>
        <button className="btn">Movement</button>
      </div>

      <div className="Temp-section">
        <button className="btn">Affiliative</button>
        <button className="btn">Pragmatic</button>
        <button className="btn">Concrete</button>
        <button className="btn">Abstract</button>
        <button className="btn">Systematic</button>
        <button className="btn">Interest</button>
      </div>
    </div>
  );
}
