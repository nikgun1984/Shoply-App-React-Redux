import "./Counter.css";

const Counter = (props) => {
	return (
		<div className="Counter-container">
			<button type="button" className="Counter-btn" onClick={0}>
				<i class="fas fa-plus-circle fa-2x"></i>
			</button>
			<input
				className="Counter-group-field"
				type="number"
				name="quantity"
				value={props.quantity}
			/>
			<button type="button" className="Counter-btn" onClick={0}>
				<i class="fas fa-minus-circle fa-2x"></i>
			</button>
		</div>
	);
};

export default Counter;
