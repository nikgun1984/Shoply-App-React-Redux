import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, updateProduct } from "./actions";

function App() {
	const dispatch = useDispatch();
	const products = useSelector((store) => store.products);
	const addToStore = (id, image, price, count) => {
		const product = products.filter((item) => item.id === id)[0];
		!product
			? dispatch(addProduct(id, image, price, count))
			: dispatch(updateProduct(id, count));
	};

	const deleteFromStore = (count, id) => {
		dispatch(deleteProduct(id, count));
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="App-container">
					<Switch>
						<Route exact path="/:id">
							<ItemDetails
								products={products}
								addItem={addToStore}
								deleteItem={deleteFromStore}
							/>
						</Route>
						<Route exact path="/">
							<Store />
						</Route>
						<Redirect to="/" />
					</Switch>
					<Cart
						addItem={addToStore}
						deleteItem={deleteFromStore}
						products={products}
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
