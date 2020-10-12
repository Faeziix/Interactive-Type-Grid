import React from "react";
import TypesData from "./type.js";

export default function TypeGrid(props) {
  return (
    <div className="Grid">
      {TypesData.map((a, key) => (
        <div className="Type" key={key}>
          <h1
            className="TypeName"
            style={{
              color:
                props.type !== undefined
                  ? props.type.includes(a.type)
                    ? "red"
                    : "black"
                  : null,
            }}
          >
            {a.type}
          </h1>
          <h1 className="Type-Des">{a.typeDes}</h1>
          <div className="CF-container">
            {a.CF.map((b, key) => (
              <div className="CF" key={key}>
                <h2>{b}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
