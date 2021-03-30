import Item from "./Item";
import "./Store.css";
import items from "../reducers/data";

const Store = () => {
	const products = items.products;
	console.log(products);
	return (
		<div>
			<h1> Welcome to Shoply Web Store</h1>
			<section className="Store">
				{Object.keys(products).map((item) => (
					// <div className="Store-wrap">
					<Item
						name={products[item].name}
						price={products[item].price}
						description={products[item].description}
						image={products[item].image_url}
						quantity={0}
					/>
					// </div>
				))}
				{/* <Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item /> */}
			</section>
		</div>
	);
};

export default Store;
