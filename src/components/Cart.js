import "./Cart.css";
import CartCounter from "./CartCounter";
import DiscountCode from "./DiscountCode";
import { taxFromTotal, totalWithTax } from "../utility";

const Cart = ({
	addItem,
	deleteItem,
	applyCode,
	isApplied,
	products,
	total,
	codeApplied,
	getDiscount,
	discountedTotal,
	amountOff,
}) => {
	return (
		<aside className="Cart">
			<h1 className="Cart-title">Shopping Card</h1>
			<div>
				<i className="fas fa-shopping-cart fa-2x"></i>
			</div>
			{products.length ? (
				products.map((item) => (
					<div className="Cart-item" key={item.id}>
						<div className="Cart-image-container">
							<img className="Cart-image" src={item.image} alt="" />
						</div>
						<div className="Cart-item-data">
							<p>
								<b>Price:</b> ${item.price}
							</p>
							{/* <p> */} <b>#Items: {item.quantity}</b>{" "}
							<CartCounter
								id={item.id}
								price={item.price}
								image={item.image}
								addItem={addItem}
								deleteItem={deleteItem}
								quantity={item.quantity}
								btnTitle="Edit Quantity"
							/>
							{/* </p> */}
							<button onClick={() => deleteItem(item.id, item.quantity)}>
								Remove
							</button>
						</div>
					</div>
				))
			) : (
				<p>Cart is empty</p>
			)}
			{products.length ? (
				<>
					<p>
						<small>
							<b>Only one PROMO Code per order</b>
						</small>
					</p>
					<DiscountCode
						applyCode={applyCode}
						isApplied={isApplied}
						codeApplied={codeApplied}
						getDiscount={getDiscount}
						discountedTotal={discountedTotal}
						amountOff={amountOff}
					/>
					{!isApplied && (
						<>
							<p>
								<b>Tax:</b> $ {taxFromTotal(total).toFixed(2)}
							</p>
							<hr />
						</>
					)}
					<p>
						<b>Subtotal:</b> $ {totalWithTax(total).toFixed(2)}
					</p>
					{isApplied && (
						<>
							<p>
								<b>Discount: </b>${amountOff}
							</p>
							<p>
								<b>Tax:</b> $ {taxFromTotal(total).toFixed(2)}
							</p>
							<hr />
							<p>
								<b>Discounted Price: </b>$
								{totalWithTax(discountedTotal).toFixed(2)}
							</p>
						</>
					)}
				</>
			) : (
				""
			)}
		</aside>
	);
};

export default Cart;
