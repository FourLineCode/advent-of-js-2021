import { useState } from "react";
import "./App.css";

function App() {
	const [value, setValue] = useState(50);

	return (
		<div className="wrapper">
			<div className="amount">
				<sup>$</sup>
				<span className="dollars">{value}</span>
			</div>
			<input
				type="range"
				id="priceRange"
				min={0}
				max={100}
				step={0.01}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<br />
			<button>Buy Now</button>
		</div>
	);
}

export default App;
