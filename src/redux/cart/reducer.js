import { ADDED, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVED } from "./actionTypes";

import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED: {
            const { id, name, quantity, price, category, image } = action.payload;

            if (quantity < 1) {
                return [
                    ...state
                ]
            }
            const cartItem = {
                id,
                name,
                quantity: 1,
                price,
                category,
                image
            }
            return [
                ...state,
                {
                    ...cartItem
                }
            ]
        }
        case REMOVED: {
            return state.filter((product) => product.id !== action.payload)
        }
        case INCREMENT_QUANTITY: {
            return [...state.map((product) => product.id === action.payload ? {
                ...product,
                quantity: product.quantity + 1
            } : {...product})]
        }
        case DECREMENT_QUANTITY: {
            let cartItems = state.map(product => product.id === action.payload ? {
                ...product,
                quantity: product.quantity - 1
            } : { ...product })
            return [...cartItems.filter((product) => product.quantity > 0)]
        }
        default:
            return state
    }
}

export default reducer