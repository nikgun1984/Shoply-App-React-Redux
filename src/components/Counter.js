import "./Counter.css";
import { useState, useRef } from "react";
import { addProduct, deleteProduct } from "../actions";
import { useDispatch } from "react-redux";

const Counter = ({ id, image, cost, quantity }) => {
	const refCounter = useRef(0);
	const dispatch = useDispatch();
	const handleAddProduct = (evt) => {
		refCounter.current = refCounter.current + 1;
		dispatch(addProduct(id, image, cost, refCounter.current));
		evt.preventDefault();
	};

	const handleDeleteProduct = (evt) => {
		if (refCounter.current - 1 >= 0) {
			evt.preventDefault();
			refCounter.current = refCounter.current - 1;
			dispatch(deleteProduct(id, refCounter.current));
		}
	};

	return (
		<form>
			<input type="hidden" id="img-hidden" value={image} />
			<input type="hidden" id="price-hidden" value={cost} />
			<div className="Counter-container">
				<button
					type="submit"
					className="Counter-btn"
					onClick={handleAddProduct}
				>
					<i className="fas fa-plus-circle fa-2x"></i>
				</button>
				<input
					className="Counter-group-field"
					type="number"
					name="quantity"
					ref={refCounter}
					value={refCounter.current}
				/>
				<button
					type="submit"
					className="Counter-btn"
					onClick={handleDeleteProduct}
				>
					<i className="fas fa-minus-circle fa-2x"></i>
				</button>
			</div>
		</form>
	);
};

export default Counter;
