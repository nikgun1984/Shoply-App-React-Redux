import Counter from "./Counter";
import { useParams, useHistory } from "react-router-dom";
import items from "../reducers/data";
import "./ItemDetails.css";

const ItemDetails = (props) => {
	const history = useHistory();
	const { id } = useParams();
	const details = items.products[id];
	return (
		<div>
			<h1 className="Store-title"> Welcome to Shoply Web Store</h1>
			<section className="ItemDetails">
				<div id={id} className="ItemDetails-card">
					<div>
						<h3>{details.name.toUpperCase()}</h3>
						<img
							src={details.image_url}
							alt="Img is unavailable..."
							className="Item-img"
						/>
						<br />
						<small>
							<b>Price:</b> ${details.price}
						</small>
					</div>
					<div className="ItemDetails-form">
						<p>{details.description}</p>
						<Counter
							id={id}
							price={details.price}
							image={details.image_url}
							addItem={props.addItem}
							deleteItem={props.deleteItem}
							btnTitle="Add Item"
							taxed={props.taxed}
						/>
						<button className="Item-button" onClick={() => history.push("/")}>
							Back to the Store
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ItemDetails;
