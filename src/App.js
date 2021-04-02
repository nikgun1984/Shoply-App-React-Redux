import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import { useDispatch, useSelector } from "react-redux";
import {
	addProduct,
	deleteProduct,
	updateProduct,
	totalAmount,
	applyDiscount,
	isCodeApplied,
	discount,
	getTax,
} from "./actions";

function App() {
	const dispatch = useDispatch();
	const products = useSelector((store) => store.products);
	const total = useSelector((store) => store.total);
	const isApplied = useSelector((store) => store.appliedDiscount);
	const discountedTotal = useSelector((store) => store.discountedTotal);
	const amountOff = useSelector((store) => store.discount);

	const addToStore = (id, image, price, count) => {
		const product = products.filter((item) => item.id === id)[0];
		if (!product) {
			dispatch(addProduct(id, image, price, count));
			dispatch(totalAmount());
		} else {
			dispatch(updateProduct(id, count));
			dispatch(totalAmount());
		}
	};

	const deleteFromStore = (id, count) => {
		dispatch(deleteProduct(id, count));
		dispatch(totalAmount());
	};

	const applyCode = (code) => {
		dispatch(applyDiscount(code));
	};

	const getDiscount = (code) => {
		dispatch(discount(code));
	};

	const codeApplied = () => {
		dispatch(isCodeApplied());
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
						total={total}
						applyCode={applyCode}
						isApplied={isApplied}
						codeApplied={codeApplied}
						getDiscount={getDiscount}
						discountedTotal={discountedTotal}
						amountOff={amountOff}
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
