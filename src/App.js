import React, { useState } from "react";
import TypeGrid from "./Components/TypeGrid.js";
import { RightSide, LeftSide } from "./Components/sidebar.js";
import Bar from "./Components/bar.js";
import TypesData, { types } from "./Components/type.js";

let typesName = TypesData.map((i) => i.type);
let btnTypes = [];
let btn = [];

function App() {
  let [type, setType] = useState([]);

  function filter(clickedBtn) {
    if (!btn.includes(clickedBtn)) {
      btn.push(clickedBtn);
      btnTypes = typesName.filter((e) => types[clickedBtn].includes(e));
      typesName = btnTypes;
    } else {
      btn.splice(btn.indexOf(clickedBtn), 1);
      typesName = TypesData.map((i) => i.type);
      btn.forEach((i) => {
        btnTypes = typesName.filter((e) => types[i].includes(e));
        typesName = btnTypes;
      });
    }
    setType(btnTypes);
  }

  function reset() {
    typesName = TypesData.map((i) => i.type);
    btnTypes = [];
    btn = [];
    setType([])
  }

  return (
    <div className="TypeGrid-Setup">
      <Bar reset = {reset}/>
      <RightSide addBtn={filter} />
      <TypeGrid type={type} />
      <LeftSide addBtn={filter} />
    </div>
  );
}

export default App;
