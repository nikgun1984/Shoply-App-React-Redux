import Store from "./Store";
import Cart from "./Cart";
import "./WebStore.css";

const WebStore = () => {
	return (
		<div className="WebStore-container">
			<Store />
			<Cart />
		</div>
	);
};

export default WebStore;
