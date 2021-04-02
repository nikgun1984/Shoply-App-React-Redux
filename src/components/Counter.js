import "./Counter.css";
import { useState } from "react";

const Counter = ({ id, image, price, addItem, quantity, btnTitle }) => {
	const [count, setCount] = useState(quantity ?? 0);

	const handleMinus = (evt) => {
		if (count >= 2) {
			setCount((count) => count - 1);
		}
	};

	const submitForm = (evt) => {
		evt.preventDefault();
		addItem(id, image, price, count);
	};

	return (
		<form onSubmit={submitForm}>
			<div className="Counter-container">
				<button
					type="button"
					className="Counter-btn"
					onClick={(count) => setCount((count) => count + 1)}
				>
					<i className="fas fa-plus-circle fa-2x"></i>
				</button>
				<input
					className="Counter-group-field"
					type="number"
					name="quantity"
					min="1"
					value={count}
					onChange={() => count}
				/>
				<button type="button" className="Counter-btn" onClick={handleMinus}>
					<i className="fas fa-minus-circle fa-2x"></i>
				</button>
			</div>
			<button type="submit">{btnTitle}</button>
		</form>
	);
};

export default Counter;
