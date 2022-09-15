import { ActionTypes } from "../Constants/action-types"

const initialState = {
    products : []
}

export const productReducer = (state = initialState , {type, payload}) => {
    
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }

}

export const selectedProductReducer = (state = {}, {type, payload} ) => {

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const selectedItemReducer = (state = 0 , action) => {

    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return state + 1;
        case ActionTypes.REMOVE_ITEM:
            return state - 1;
        default:
            return state;
    }
}