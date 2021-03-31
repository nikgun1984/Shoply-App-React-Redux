import "./Item.css";
import Counter from "./Counter";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";

const Item = ({ id, price, image }) => {
	const history = useHistory();
	return (
		<div id={id} className="Item">
			{/* <h3>{name.toUpperCase()}</h3> */}
			<div className="Item-top">
				<img src={image} alt="Img is unavailable..." className="Item-img" />
				<br />
				<small>
					<b>Price:</b> ${price}
				</small>
			</div>
			<div className="Item-block">
				<button class="Item-button" onClick={() => history.push(`/${id}`)}>
					More Details...
				</button>
				{/* <p>{description}</p>
				<Counter id={id} price={price} image={image} quantity={quantity} /> */}
			</div>
		</div>
	);
};

export default Item;
