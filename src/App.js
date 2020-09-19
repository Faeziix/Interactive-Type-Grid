import React from "react";
import TypeGrid from "./Components/TypeGrid.js";
import { RightSide, LeftSide } from "./Components/sidebar.js";
import Bar from "./Components/bar.js";

function App() {
  return (
    <div className="TypeGrid-Setup">
      <Bar />
      <LeftSide />
      <TypeGrid />
      <RightSide />
    </div>
  );
}

export default App;
