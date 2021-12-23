import { useEffect, useState } from "react";
import "./App.css";

const items = [
	{
		name: "French Fries with Ketchup",
		price: 223,
		image: "plate__french-fries.png",
		alt: "French Fries",
		count: 0,
	},
	{
		name: "Salmon and Vegetables",
		price: 512,
		image: "plate__salmon-vegetables.png",
		alt: "Salmon and Vegetables",
		count: 0,
	},
	{
		name: "Spaghetti Meat Sauce",
		price: 782,
		image: "plate__spaghetti-meat-sauce.png",
		alt: "Spaghetti with Meat Sauce",
		count: 0,
	},
	{
		name: "Bacon, Eggs, and Toast",
		price: 599,
		image: "plate__bacon-eggs.png",
		alt: "Bacon, Eggs, and Toast",
		count: 0,
	},
	{
		name: "Chicken Salad with Parmesan",
		price: 698,
		image: "plate__chicken-salad.png",
		alt: "Chicken Salad with Parmesan",
		count: 0,
	},
	{
		name: "Fish Sticks and Fries",
		price: 634,
		image: "plate__fish-sticks-fries.png",
		alt: "Fish Sticks and Fries",
		count: 0,
	},
];

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prev) => {
			for (const i of prev) if (i.name === item.name) return prev;
			return [...prev, item];
		});
	};

	const isInCart = (item) => {
		for (const i of cart) if (i.name === item.name) return true;
		return false;
	};

	const parsePrice = (num) => parseFloat((num * 0.01).toFixed(2));
	const getTotal = () => parsePrice(cart.reduce((s, i) => s + i.price * i.count, 0));
	const getTax = () => parseFloat((getTotal() * 0.0975).toFixed(2));
	const getTotalWithTax = () => parseFloat((getTotal() + getTax()).toFixed(2));

	useEffect(() => {
		const newCart = cart.filter((i) => !!i.count);
		if (newCart.length !== cart.length) setCart(newCart);
	}, [cart]);

	return (
		<div className="wrapper menu">
			<div className="panel">
				<h1>To Go Menu</h1>
				<ul className="menu">
					{items.map((item) => (
						<li key={item.name}>
							<div className="plate">
								<img
									src="/plate__french-fries.png"
									alt="French Fries"
									className="plate"
								/>
							</div>
							<div className="content">
								<p className="menu-item">{item.name}</p>
								<p className="price">${parsePrice(item.price)}</p>
								<button
									className={isInCart(item) ? "in-cart" : ""}
									onClick={() => {
										addToCart({ ...item, count: 1 });
									}}
								>
									{isInCart(item) && <img src="/check.svg" alt="Check" />}
									{isInCart(item) ? "In Cart" : "Add to Cart"}
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className="panel cart">
				<h1>Your Cart</h1>
				{cart.length === 0 ? (
					<p className="empty">Your cart is empty.</p>
				) : (
					<ul className="cart-summary">
						{cart.map((item) => (
							<li key={item.name}>
								<div className="plate">
									<img
										src="/plate__fish-sticks-fries.png"
										alt="Fish Sticks and Fries"
										className="plate"
									/>
									<div className="quantity">{item.count}</div>
								</div>
								<div className="content">
									<p className="menu-item">{item.name}</p>
									<p className="price">${parsePrice(item.price)}</p>
								</div>
								<div className="quantity__wrapper">
									<button
										className="decrease"
										onClick={() =>
											setCart((prev) =>
												prev.map((i) => {
													if (i.name !== item.name) return i;
													return {
														...i,
														count: i.count - 1,
													};
												})
											)
										}
									>
										<img src="/chevron.svg" />
									</button>
									<div className="quantity">{item.count}</div>
									<button
										className="increase"
										onClick={() =>
											setCart((prev) =>
												prev.map((i) => {
													if (i.name !== item.name) return i;
													return {
														...i,
														count: i.count + 1,
													};
												})
											)
										}
									>
										<img src="/chevron.svg" />
									</button>
								</div>
								<div className="subtotal">
									${parsePrice(item.price * item.count)}
								</div>
							</li>
						))}
					</ul>
				)}

				<div className="totals">
					<div className="line-item">
						<div className="label">Subtotal:</div>
						<div className="amount price subtotal">${getTotal()}</div>
					</div>
					<div className="line-item">
						<div className="label">Tax:</div>
						<div className="amount price tax">${getTax()}</div>
					</div>
					<div className="line-item total">
						<div className="label">Total:</div>
						<div className="amount price total">${getTotalWithTax()}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
