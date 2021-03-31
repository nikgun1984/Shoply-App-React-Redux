import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
	const addedProducts = useSelector((store) => store.products);
	const total = addedProducts.length
		? addedProducts.reduce((acc, val) => {
				console.log("Price: " + val.price);
				acc += val.price;
				console.log(acc);
				return acc;
		  })
		: 0;
	console.log(addedProducts);
	console.log(total);
	return (
		<aside className="Cart">
			<h1 className="Cart-title">Shopping Card</h1>
			<div>
				<i className="fas fa-shopping-cart fa-2x"></i>
			</div>
			<hr />
			{addedProducts.map((item) => (
				<div className="Cart-item">
					<div>
						<img className="Cart-image" src={item.image} alt="" />
					</div>
					<div className="Cart-item-data">
						<p>
							<b>Price:</b> ${item.price}
						</p>
						<p>
							{" "}
							<b>#Items:</b> {item.quantity}
						</p>
					</div>
				</div>
			))}
			<hr />
			{/* <p>Total Cost: $ {total}</p> */}
		</aside>
	);
};

export default Cart;
