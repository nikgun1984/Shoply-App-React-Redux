import "./DiscountCode.css";
import { useRef } from "react";

const DiscountCode = ({ applyCode, isApplied, codeApplied, getDiscount }) => {
	const codeVal = useRef("");

	const submitCode = (evt) => {
		evt.preventDefault();
		const enteredCode = codeVal.current.value;
		applyCode(enteredCode);
		codeApplied();
		getDiscount(enteredCode);
	};
	return (
		<div>
			<form onSubmit={submitCode} className="DiscountCode-form">
				<input
					type="text"
					id="code"
					placeholder="ORDER PROMO CODE"
					ref={codeVal}
					required
				/>
				<input type="submit" />
				<br />
				{isApplied ? (
					<>
						<small>Code Applied!!!</small>
						<hr />
					</>
				) : (
					""
				)}
				<br />
			</form>
		</div>
	);
};

export default DiscountCode;
