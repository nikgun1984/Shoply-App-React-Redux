import "./Counter.css";
import { useRef } from "react";
import { addProduct, deleteProduct, updateProduct } from "../actions";
import { useDispatch } from "react-redux";

const Counter = ({ id, image, price, quantity }) => {
	const refCounter = useRef(quantity);
	const dispatch = useDispatch();
	const handleAddProduct = (evt) => {
		evt.preventDefault();
		refCounter.current.value = +refCounter.current.value + 1;
		console.log(refCounter.current.value);
		if (+refCounter.current.value === 1) {
			dispatch(addProduct(id, image, price, refCounter.current.value));
		} else {
			dispatch(updateProduct(id, refCounter.current.value));
		}
	};

	const handleDeleteProduct = (evt) => {
		evt.preventDefault();
		if (+refCounter.current.value - 1 >= 0) {
			refCounter.current.value = +refCounter.current.value - 1;
			dispatch(deleteProduct(id, refCounter.current.value));
		}
	};

	return (
		<form>
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
