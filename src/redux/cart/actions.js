import {
    ADDED, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVED
} from "./actionTypes"

export const addedCartItem = (product) => {
    return {
        type: ADDED,
        payload: product
    }
}

export const removedCartItem = (productId) => {
    return {
        type: REMOVED,
        payload: productId
    }
}

export const incrementQuantity = (productId) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: productId
    }
}

export const decrementQuantity = (productId) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: productId
    }
}