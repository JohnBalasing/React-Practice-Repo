import {ActionTypes} from '../Constants/action-types'

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const setSelectedProducts = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProducts = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}