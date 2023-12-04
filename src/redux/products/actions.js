import { ADDED } from "./actionTypes";

export const added = (product) => {
    return {
        type: ADDED,
        payload: product
    }
}