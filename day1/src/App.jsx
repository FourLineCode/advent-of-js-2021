import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [running, setRunning] = useState(false);
	const [editing, setEditing] = useState(false);
	const [ended, setEnded] = useState(false);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(5);
	let interval;

	useEffect(() => {
		if (running && !ended) {
			if (minute === 0 && second === 0) setSecond(5);
			interval = setInterval(() => {
				setSecond((p) => (p === 0 ? 59 : p - 1));
				if (second === 0) setMinute((p) => p - 1);
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [running, ended, second, minute]);

	useEffect(() => {
		if (minute === 0 && second === 0) {
			clearInterval(interval);
			setRunning(false);
			setEnded(true);
			setMinute(0);
			setSecond(0);
			setTimeout(() => {
				alert("Time's Up!");
			}, 100);
		}
	}, [minute, second]);

	return (
		<div className="wrapper">
			<div className={`ring ${ended && "ending"}`}>
				<svg width="518" height="518" viewBox="0 0 518 518">
					<circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
				</svg>
			</div>
			<div className="timer">
				<div className="time">
					<div className="minutes">
						<input
							type="text"
							value={("0" + minute).slice(-2)}
							disabled={!editing}
							onChange={(e) => setMinute(Math.min(99, parseInt(e.target.value)))}
						/>
					</div>
					<div className="colon">:</div>
					<div className="seconds">
						<input
							type="text"
							value={("0" + second).slice(-2)}
							disabled={!editing}
							onChange={(e) => setSecond(Math.min(59, parseInt(e.target.value)))}
						/>
					</div>
				</div>
				<button
					className="start"
					onClick={() => {
						setRunning((p) => !p);
						setEditing(false);
						setEnded(false);
					}}
				>
					{running ? "pause" : "start"}
				</button>
				<button
					className="settings"
					onClick={() => {
						setEditing((p) => !p);
						setRunning(false);
					}}
				>
					<img src="/gear.svg" alt="Settings" />
				</button>
			</div>
		</div>
	);
}

export default App;
