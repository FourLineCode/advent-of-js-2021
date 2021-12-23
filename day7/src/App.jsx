import { useState } from "react";
import "./App.css";

function App() {
	const [bill, setBill] = useState(0);
	const [person, setPerson] = useState(0);
	const [tip, setTip] = useState(15);
	const [tipAmount, setTipAmount] = useState(0);
	const [perPerson, setPerPerson] = useState(0);

	const getTipAmount = () => parseFloat((bill * (tip * 0.01)).toFixed(2));
	const getPerPerson = () => parseFloat((parseInt(bill) + getTipAmount()) / person);
	const calculate = () => {
		setTipAmount(getTipAmount());
		setPerPerson(getPerPerson());
	};

	return (
		<div className="wrapper">
			<div className="tip-amount">
				<div className="label">Tip Amount</div>
				<div className="dollars">
					<sup>$</sup>
					<span id="tip-amount">{tipAmount.toFixed(2)}</span>
				</div>
			</div>
			<div className="total-per-person">
				<div className="label">Total Per Person</div>
				<div className="dollars">
					<sup>$</sup>
					<span id="total-per-person">{perPerson.toFixed(2)}</span>
				</div>
			</div>

			<div className="input-fields">
				<div className="bill-amount">
					<div className="field">
						<input
							type="text"
							id="bill-amount"
							name="bill-amount"
							value={bill}
							onChange={(e) => setBill(e.target.value)}
						/>
					</div>
					<div className="label">Bill Amount</div>
				</div>
				<div className="number-of-people">
					<div className="field">
						<input
							type="text"
							id="number-of-people"
							name="number-of-people"
							value={person}
							onChange={(e) => setPerson(e.target.value)}
						/>
					</div>
					<div className="label">Number of People</div>
				</div>
			</div>

			<div className="tip-percentages">
				<div>
					<input
						type="radio"
						value={5}
						name="tip"
						id="five-percent"
						onChange={(e) => setTip(e.target.value)}
					/>
					<label htmlFor="five-percent">5%</label>
				</div>
				<div>
					<input
						type="radio"
						value={10}
						name="tip"
						id="ten-percent"
						onChange={(e) => setTip(e.target.value)}
					/>
					<label htmlFor="ten-percent">10%</label>
				</div>
				<div>
					<input
						type="radio"
						value={15}
						name="tip"
						defaultChecked
						id="fifteen-percent"
						onChange={(e) => setTip(e.target.value)}
					/>
					<label htmlFor="fifteen-percent">15%</label>
				</div>
				<div>
					<input
						type="radio"
						value={20}
						name="tip"
						id="twenty-percent"
						onChange={(e) => setTip(e.target.value)}
					/>
					<label htmlFor="twenty-percent">20%</label>
				</div>
			</div>
			<div className="button-wrapper">
				<button id="calculate" onClick={calculate}>
					Calculate
				</button>
			</div>
		</div>
	);
}

export default App;
