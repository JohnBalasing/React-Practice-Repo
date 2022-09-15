import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, selectedItemReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    itemCounter: selectedItemReducer
});