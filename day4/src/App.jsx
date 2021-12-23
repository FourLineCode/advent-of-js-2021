import { useEffect, useState } from "react";
import "./App.css";

const keys = [
	"`",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"-",
	"=",
	"BACKSPACE",
	"TAB",
	"Q",
	"W",
	"E",
	"R",
	"T",
	"Y",
	"U",
	"I",
	"O",
	"P",
	"[",
	"]",
	"\\",
	"CAPSLOCK",
	"A",
	"S",
	"D",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	";",
	"'",
	"ENTER",
	"SHIFT",
	"Z",
	"X",
	"C",
	"V",
	"B",
	"N",
	"M",
	",",
	".",
	"/",
	"SHIFT",
];

function App() {
	const [key, setKey] = useState("R");

	const setRandomKey = () => {
		let index = Math.floor(Math.random() * keys.length);
		while (keys[index] === key) index = Math.floor(Math.random() * keys.length);
		setKey(keys[index]);
	};

	const listener = (e) => {
		e.preventDefault();
		if (e.key.toUpperCase() === key) setRandomKey();
	};

	useEffect(() => {
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, [key]);

	return (
		<div className="keyboard">
			<h1>Eyes on the Screen</h1>
			<div className="row">
				<button className={`key ${key === "`" ? "jiggle" : ""}`}>`</button>
				<button className={`key ${key === "1" ? "jiggle" : ""}`}>1</button>
				<button className={`key ${key === "2" ? "jiggle" : ""}`}>2</button>
				<button className={`key ${key === "3" ? "jiggle" : ""}`}>3</button>
				<button className={`key ${key === "4" ? "jiggle" : ""}`}>4</button>
				<button className={`key ${key === "5" ? "jiggle" : ""}`}>5</button>
				<button className={`key ${key === "6" ? "jiggle" : ""}`}>6</button>
				<button className={`key ${key === "7" ? "jiggle" : ""}`}>7</button>
				<button className={`key ${key === "8" ? "jiggle" : ""}`}>8</button>
				<button className={`key ${key === "9" ? "jiggle" : ""}`}>9</button>
				<button className={`key ${key === "0" ? "jiggle" : ""}`}>0</button>
				<button className={`key ${key === "-" ? "jiggle" : ""}`}>-</button>
				<button className={`key ${key === "=" ? "jiggle" : ""}`}>=</button>
				<button className={`key ${key === "BACKSPACE" ? "jiggle" : ""}`}>DEL</button>
			</div>
			<div className="row">
				<button className={`key utility ${key === "TAB" ? "jiggle" : ""}`}>Tab</button>
				<button className={`key ${key === "Q" ? "jiggle" : ""}`}>Q</button>
				<button className={`key ${key === "W" ? "jiggle" : ""}`}>W</button>
				<button className={`key ${key === "E" ? "jiggle" : ""}`}>E</button>
				<button className={`key ${key === "R" ? "jiggle" : ""}`}>R</button>
				<button className={`key ${key === "T" ? "jiggle" : ""}`}>T</button>
				<button className={`key ${key === "Y" ? "jiggle" : ""}`}>Y</button>
				<button className={`key ${key === "U" ? "jiggle" : ""}`}>U</button>
				<button className={`key ${key === "I" ? "jiggle" : ""}`}>I</button>
				<button className={`key ${key === "O" ? "jiggle" : ""}`}>O</button>
				<button className={`key ${key === "P" ? "jiggle" : ""}`}>P</button>
				<button className={`key ${key === "[" ? "jiggle" : ""}`}>[</button>
				<button className={`key ${key === "]" ? "jiggle" : ""}`}>]</button>
				<button className={`key ${key === "\\" ? "jiggle" : ""}`}>\</button>
			</div>
			<div className="row">
				<button className={`key utility ${key === "CAPSLOCK" ? "jiggle" : ""}`}>
					CAPS
				</button>
				<button className={`key ${key === "A" ? "jiggle" : ""}`}>A</button>
				<button className={`key ${key === "S" ? "jiggle" : ""}`}>S</button>
				<button className={`key ${key === "D" ? "jiggle" : ""}`}>D</button>
				<button className={`key ${key === "F" ? "jiggle" : ""}`}>F</button>
				<button className={`key ${key === "G" ? "jiggle" : ""}`}>G</button>
				<button className={`key ${key === "H" ? "jiggle" : ""}`}>H</button>
				<button className={`key ${key === "J" ? "jiggle" : ""}`}>J</button>
				<button className={`key ${key === "K" ? "jiggle" : ""}`}>K</button>
				<button className={`key ${key === "L" ? "jiggle" : ""}`}>L</button>
				<button className={`key ${key === ";" ? "jiggle" : ""}`}>;</button>
				<button className={`key ${key === "'" ? "jiggle" : ""}`}>'</button>
				<button className={`key utility ${key === "ENTER" ? "jiggle" : ""}`}>ENTER</button>
			</div>
			<div className="row">
				<button className={`key utility ${key === "SHIFT" ? "jiggle" : ""}`}>SHIFT</button>
				<button className={`key ${key === "Z" ? "jiggle" : ""}`}>Z</button>
				<button className={`key ${key === "X" ? "jiggle" : ""}`}>X</button>
				<button className={`key ${key === "C" ? "jiggle" : ""}`}>C</button>
				<button className={`key ${key === "V" ? "jiggle" : ""}`}>V</button>
				<button className={`key ${key === "B" ? "jiggle" : ""}`}>B</button>
				<button className={`key ${key === "N" ? "jiggle" : ""}`}>N</button>
				<button className={`key ${key === "M" ? "jiggle" : ""}`}>M</button>
				<button className={`key ${key === "," ? "jiggle" : ""}`}>,</button>
				<button className={`key ${key === "." ? "jiggle" : ""}`}>.</button>
				<button className={`key ${key === "/" ? "jiggle" : ""}`}>/</button>
				<button className={`key utility ${key === "SHIFT" ? "jiggle" : ""}`}>SHIFT</button>
			</div>
		</div>
	);
}

export default App;
