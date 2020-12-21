import React from "react";

export function Button(props) {
	return props.atr.map((a, key) => (
		<button
			style={{
				backgroundColor: props.hoverType.includes(a)
					? "#00FF00"
					: "white",
			}}
			onClick={props.onclick}
			className="btn"
			key={key}
		>
			{a}
		</button>
	));
}
