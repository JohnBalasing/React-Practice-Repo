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

export const addSelectedItems = (itemSelected) => {
    return{
        type: ActionTypes.ADD_ITEM,
        payload: itemSelected
    }
}

export const removeSelectedItems = (itemSelected) => {
    return{
        type: ActionTypes.REMOVE_ITEM,
        payload: itemSelected
    }
}