import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export function addProduct(name, price, quantity) {
	return {
		type: ADD_ITEM,
		item: { name, price, quantity },
	};
}

export function deleteProduct(id, quantity) {
	return { type: DELETE_ITEM, id, quantity };
}
