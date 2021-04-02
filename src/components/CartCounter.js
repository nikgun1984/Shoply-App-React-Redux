import "./Counter.css";
import { useRef, useEffect } from "react";

const CartCounter = ({ id, image, price, quantity, addItem, deleteItem }) => {
	const countRef = useRef(quantity);
	useEffect(() => {
		countRef.current = quantity;
	}, [quantity]);

	const handleAddItem = (evt) => {
		evt.preventDefault();
		countRef.current = quantity + 1;
		addItem(id, image, price, countRef.current);
	};

	const handleDeleteItem = (evt) => {
		evt.preventDefault();
		if (countRef.current > 1) {
			countRef.current = quantity - 1;
			addItem(id, image, price, countRef.current);
		} else {
			deleteItem(id, countRef.current);
		}
	};

	return (
		<div className="Counter-container">
			<button
				// type="button"
				className="Counter-btn"
				onClick={handleAddItem}
			>
				<i className="fas fa-plus-circle fa-2x"></i>
			</button>
			<button
				// type="button"
				className="Counter-btn"
				onClick={handleDeleteItem}
			>
				<i className="fas fa-minus-circle fa-2x"></i>
			</button>
		</div>
	);
};

export default CartCounter;
