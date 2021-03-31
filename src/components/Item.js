import "./Item.css";
import Counter from "./Counter";
import { React, useState } from "react";

const Item = ({ id, name, price, description, image, quantity }) => {
	return (
		<div id={id} className="Item">
			<h3>{name.toUpperCase()}</h3>
			<div className="Item-top">
				<img src={image} alt="Img is unavailable..." className="Item-img" />
				<br />
				<small>
					<b>Price:</b> ${price}
				</small>
			</div>
			<div className="Item-block">
				<p>{description}</p>
				<Counter price={price} image={image} quantity={quantity} />
			</div>
		</div>
	);
};

export default Item;
