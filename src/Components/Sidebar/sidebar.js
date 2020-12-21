import React from "react";
import { Q } from "../type.js";
import { Button } from "./Buttons.js";
import "../../index.css";

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
const Quadra = Object.keys(Q).map(a => a);

export function Side(props) {
	const clickHandler = event => {
		props.addBtn(event.target);
	};

	return (
		<>
			<div className="section1">
				<div className="CF-section">
					
					<Button
						atr={CF}
						onclick={clickHandler}
						hoverType={props.hoverType}
					/>
				</div>
				<div className="Quadra-section">
					<Button
						atr={Quadra}
						onclick={clickHandler}
						hoverType={props.hoverType}
					/>
				</div>
			</div>

			<div className="section2">
				<div className="IS-section">
					<Button
						atr={IS}
						onclick={clickHandler}
						hoverType={props.hoverType}
					/>
				</div>

				<div className="Temp-section">
					<Button
						atr={Temps}
						onclick={clickHandler}
						hoverType={props.hoverType}
					/>
				</div>
			</div>
			<footer
				style={{
					color: "#FF0050",
					fontSize: "1rem",
					fontFamily: "monospace",
					fontWeight: "bold",
					position: "relative",
					bottom: "0",
				}}
			>
				created by Faezix
			</footer>
		</>
	);
}
