import "./Cart.css";
import { useSelector } from "react-redux";
import CartCounter from "./CartCounter";
import ItemDetails from "./ItemDetails";

const Cart = ({ addItem, deleteItem, products }) => {
	console.log(products);
	// const total = products.length
	// 	? products.reduce((acc, val) => {
	// 			console.log("Price: " + val.price);
	// 			acc += val.price;
	// 			console.log(acc);
	// 			return acc;
	// 	  })
	// 	: 0;
	// console.log(products);
	// console.log(total);
	return (
		<aside className="Cart">
			<h1 className="Cart-title">Shopping Card</h1>
			<div>
				<i className="fas fa-shopping-cart fa-2x"></i>
			</div>

			{products.length ? (
				products.map((item) => (
					<div className="Cart-item">
						<div className="Cart-image-container">
							<img className="Cart-image" src={item.image} alt="" />
						</div>
						<div className="Cart-item-data">
							<p>
								<b>Price:</b> ${item.price}
							</p>
							<p>
								{" "}
								<b>#Items: {item.quantity}</b>{" "}
								<CartCounter
									id={item.id}
									price={item.price}
									image={item.image}
									addItem={addItem}
									deleteItem={deleteItem}
									quantity={item.quantity}
									btnTitle="Edit Quantity"
								/>
							</p>
							<button>Remove</button>
						</div>
					</div>
				))
			) : (
				<p>Cart is empty</p>
			)}
			{/* <hr /> */}
			{/* <p>Total Cost: $ {total}</p> */}
		</aside>
	);
};

export default Cart;
