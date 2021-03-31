import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const INITIAL_STATE = { products: [] };
export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, products: [...state.products, { ...action.item }] };
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.id),
			};
		default:
			return state;
	}
}
