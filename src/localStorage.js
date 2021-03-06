import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("card", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
	try {
		const serialisedState = localStorage.getItem("card");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(
	rootReducer,
	// compose will accept multiple enhanced functions in the store
	compose(loadFromLocalStorage(), composeWithDevTools())
);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
