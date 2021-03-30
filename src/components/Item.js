import "./Item.css";
import Counter from "./Counter";

const Item = ({ name, price, description, image, quantity }) => {
	return (
		<div className="Item">
			<div className="Item-top">
				<h3>{name.toUpperCase()}</h3>
				<img src={image} alt="Img is unavailable..." className="Item-img" />
				<br />
			</div>
			<div className="Item-block">
				<small>
					<b>Price:</b> ${price}
				</small>
				<br />
				<p>
					<small>{description}</small>
				</p>
				<Counter quantity={quantity} />
			</div>
		</div>
	);
};

export default Item;
