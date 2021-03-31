import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-container">
					<Switch>
						<Route exact path="/:id">
							<ItemDetails />
						</Route>
						<Route exact path="/">
							<Store />
						</Route>
						<Redirect to="/" />
					</Switch>
					<Cart />
				</div>
			</header>
		</div>
	);
}

export default App;
