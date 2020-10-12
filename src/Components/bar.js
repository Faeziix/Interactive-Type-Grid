import React from "react";

export default function Bar(props) {
  return (
    <div className="name-bar">
      <button onClick= {props.reset} className="reset">Reset</button>
    </div>
  );
}
