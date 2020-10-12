import React, { useState } from "react";
import TypeGrid from "./Components/TypeGrid.js";
import { RightSide, LeftSide } from "./Components/sidebar.js";
import Bar from "./Components/bar.js";

function App() {
  const[type, setType] = useState('')
  const addBtn = (btn) => {
    setType(btn)
    console.log(type)
  }
  return (
    <div className="TypeGrid-Setup">
      <Bar />
      <LeftSide addBtn={addBtn}/>
      <TypeGrid />
      <RightSide addBtn={addBtn} />
    </div>
  );
}

export default App;
