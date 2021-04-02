import Item from "./Item";
import "./Store.css";
import items from "../reducers/data";

const Store = (props) => {
	const products = items.products;
	Object.keys(items.products).forEach((item) => {
		items.products[item].count = 0;
	});
	console.log(items);
	return (
		<div>
			<h1 className="Store-title"> Welcome to Shoply Web Store</h1>
			<section className="Store">
				{Object.keys(products).map((item) => (
					<Item
						key={item}
						id={item}
						price={products[item].price}
						image={products[item].image_url}
						add={props.add}
						delete={props.delete}
					/>
				))}
			</section>
		</div>
	);
};

export default Store;
