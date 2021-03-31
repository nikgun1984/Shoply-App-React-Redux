import Item from "./Item";
import "./Store.css";
import items from "../reducers/data";

const Store = () => {
	const products = items.products;
	const modifiedJSON = Object.keys(items.products).forEach((item) => {
		items.products[item].count = 0;
	});
	console.log(items);
	return (
		<div>
			<h1 className="Store-title"> Welcome to Shoply Web Store</h1>
			<section className="Store">
				{Object.keys(products).map((item) => (
					// <div className="Store-wrap">
					<Item
						key={item}
						id={item}
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
