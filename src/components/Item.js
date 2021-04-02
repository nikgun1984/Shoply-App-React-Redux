import "./Item.css";
import { useHistory } from "react-router-dom";

const Item = ({ id, price, image }) => {
	const history = useHistory();
	return (
		<div id={id} className="Item">
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
			</div>
		</div>
	);
};

export default Item;
