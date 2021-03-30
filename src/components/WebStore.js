import Store from "./Store";
import Card from "./Card";
import "./WebStore.css";

const WebStore = () => {
	return (
		<div className="WebStore-container">
			<Store />
			<Card />
		</div>
	);
};

export default WebStore;
