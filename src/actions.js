import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./actionTypes";
export function addProduct(id, image, price, quantity) {
	return {
		type: ADD_ITEM,
		item: { id, image, price, quantity },
	};
}

export function deleteProduct(id, quantity) {
	return { type: DELETE_ITEM, id, quantity };
}

export function updateProduct(id, quantity) {
	return { type: UPDATE_ITEM, id, quantity };
}
