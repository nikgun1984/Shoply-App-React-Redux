import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const INITIAL_DETAILS = { items: [] };
export default function details(state = INITIAL_DETAILS, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, items: [...state.items, { ...action.item }] };
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.id),
			};
		default:
			return state;
	}
}
