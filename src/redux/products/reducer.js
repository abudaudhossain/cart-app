import { ADDED } from "./actionTypes";
import initialState from "./initialState";

const nextProductId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1)
    return maxId + 1;
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextProductId(state),
                    ...action.payload
                }
            ]

        default:
            return state
    }
}

export default reduce;