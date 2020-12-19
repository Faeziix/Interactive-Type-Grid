import React from "react";
import { Q } from "./type.js";
import "../index.css";

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
					{CF.map((a, key) => (
						<button
						style = {{
							backgroundColor: props.hoverType.includes(a)? '#00FF00': 'white'
						}}
							onClick={clickHandler}
							className="btn"
							key={key}
						>
							{a}
						</button>
					))}
				</div>
				<div className="Quadra-section">
					{Quadra.map((a, key) => (
						<button
						style = {{
							backgroundColor: props.hoverType.includes(a)? '#00FF00': 'white'
						}}
							className="btn"
							onClick={clickHandler}
							key={key}
						>
							{a}
						</button>
					))}
				</div>
			</div>

			<div className="section2">
				<div className="IS-section">
					{IS.map((a, key) => (
						<button
						style = {{
							backgroundColor: props.hoverType.includes(a)? '#00FF00': 'white'
						}}
							onClick={clickHandler}
							key={key}
							className="btn"
						>
							{a}
						</button>
					))}
				</div>

				<div className="Temp-section">
					{Temps.map((a, key) => (
						<button
						style = {{
							backgroundColor: props.hoverType.includes(a)? '#00FF00': 'white'
						}}
							onClick={clickHandler}
							key={key}
							className="btn"
						>
							{a}
						</button>
					))}
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
