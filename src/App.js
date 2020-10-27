import React, { useState } from "react";
import TypeGrid from "./Components/TypeGrid.js";
import { Side } from "./Components/sidebar.js";
import Bar from "./Components/bar.js";
import TypesData, { types } from "./Components/type.js";
import anime from "animejs"

let typesName = TypesData.map((i) => i.type);
let filteredBtn = [];
let btn = [];

function App() {
  let [type, setType] = useState([]);

  function filter(theBtn) {
    theBtn.classList.toggle('btnClick')
    let clickedBtn = theBtn.innerText

    if (!btn.includes(clickedBtn)) {
      btn.push(clickedBtn);
      filteredBtn = typesName.filter((e) => types[clickedBtn].includes(e));

      if(filteredBtn.length === 0) {
        theBtn.classList.remove('btnClick')
        btn.pop()
        filteredBtn = typesName;
        animation(theBtn)
      }else {
        typesName = filteredBtn;
      }
    } else {
      btn.splice(btn.indexOf(clickedBtn), 1);
      typesName = TypesData.map((i) => i.type);
      filteredBtn = [];
      btn.forEach((i) => {
        filteredBtn = typesName.filter((e) => types[i].includes(e));
        typesName = filteredBtn;
      });
    }

    setType(filteredBtn);
  }

  function reset() {
    const buttons = document.querySelectorAll('.btnClick')
    buttons.forEach(i => i.classList.remove('btnClick'))
    typesName = TypesData.map((i) => i.type);
    filteredBtn = [];
    btn = [];
    setType([])
  }

  return (
    <div className="TypeGrid-Setup">
      <Bar reset = {reset}/>
      <Side addBtn={filter} />
      <TypeGrid type={type} />
    </div>
  );
}

function animation(target) {
  anime({
    targets: target,
    duration: 400,
    keyframes: [
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 0 },
    ],
    easing: "linear",
  });
}

export default App;
