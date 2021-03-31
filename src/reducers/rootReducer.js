import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actionTypes";

const INITIAL_STATE = { products: [] };
export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, products: [...state.products, { ...action.item }] };
		case DELETE_ITEM:
			return {
				...state,
				products: state.products.filter((item) => item.id !== action.id),
			};
		case UPDATE_ITEM:
			return {
				...state,
				products: state.products.map((item) => {
					if (item.id === action.id) {
						item.quantity = action.quantity;
						return item;
					} else {
						return item;
					}
				}),
			};
		default:
			return state;
	}
}
