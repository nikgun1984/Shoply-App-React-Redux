import {
	ADD_ITEM,
	DELETE_ITEM,
	UPDATE_ITEM,
	APPLY_DISCOUNT,
	TOTAL_AMOUNT,
	IS_APPLIED,
	DISCOUNT,
} from "../actionTypes";

const codes = { REMOVE10: 0.1, REMOVE20: 0.2, REMOVE30: 0.3 };

const INITIAL_STATE = {
	products: [],
	total: 0,
	discountedTotal: 0,
	discount: 0,
	appliedDiscount: false,
};

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
		case TOTAL_AMOUNT:
			return {
				...state,
				total: state.products.reduce((acc, val) => {
					return acc + +(val.price * val.quantity).toFixed(2);
				}, 0),
			};

		case APPLY_DISCOUNT:
			return {
				...state,
				discountedTotal:
					action.discountCode in codes
						? +(state.total - state.total * codes[action.discountCode]).toFixed(
								2
						  )
						: state.total,
			};
		case DISCOUNT:
			return {
				...state,
				discount:
					action.code in codes
						? +(state.total * codes[action.code]).toFixed(3)
						: 0,
			};
		case IS_APPLIED:
			return {
				...state,
				appliedDiscount: true,
			};

		default:
			return state;
	}
}
