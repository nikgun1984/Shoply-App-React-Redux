import {
	ADD_ITEM,
	DELETE_ITEM,
	UPDATE_ITEM,
	APPLY_DISCOUNT,
	TOTAL_AMOUNT,
	IS_APPLIED,
	DISCOUNT,
} from "./actionTypes";
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

export function applyDiscount(discountCode) {
	return { type: APPLY_DISCOUNT, discountCode };
}

export function discount(code) {
	return { type: DISCOUNT, code };
}

export function totalAmount() {
	return { type: TOTAL_AMOUNT };
}

export function isCodeApplied() {
	return { type: IS_APPLIED };
}
