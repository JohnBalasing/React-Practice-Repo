import { legacy_createStore as createStore } from "redux";
import { reducers } from "./Reducers";

const store = createStore(reducers,{},window.__redux_devtools_extension__ && window.__redux_devtools_extension__());

export default store;