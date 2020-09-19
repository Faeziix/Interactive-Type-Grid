import React from "react";
import TypesData from "./type.js";


export default function TypeGrid() {
  return (
    <div className="Grid">
      {TypesData.map((a) => (
        <div className="Type">
          <h1 className="TypeName">{a.type}</h1>
          <h1 className="Type-Des">{a.typeDes}</h1>
          <div className="CF-container">
            {a.CF.map((b) => (
              <div className="CF">
                <h2>{b}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


