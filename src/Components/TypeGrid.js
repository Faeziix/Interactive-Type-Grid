import React, { useState } from "react";
import TypesData from "./type.js";

export default function TypeGrid(props) {
	const showTypeDes = id => {
			let name = [
				...TypesData[id]["InteractionStyle"],
				...TypesData[id]["Temperament"],
				...TypesData[id]["Quadra"],
				TypesData[id]["QName"],
			];
			props.hoverType(name);
	};
	return (
		<div className="Grid">
			{TypesData.map((a, key) => (
				<div className="Type" key={key}>
					<h1
						onMouseEnter={() => showTypeDes(key)}
						onMouseLeave={() => props.hoverType([])}
						className="TypeName"
						style={{
							color: props.type.includes(a.type)
								? "red"
								: "black",
							fontSize: props.type.includes(a.type)
								? "clamp(2.3em,3.25vw,2.5em)"
								: 'clamp(1.5em,4vw,2.3em)',
						}}
					>
						{a.type}
					</h1>
					<h1 className="Type-Des" >{a.typeDes}</h1>
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
