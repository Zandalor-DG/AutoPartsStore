import { combineReducers, createStore } from "redux";
import autoPartsCatalogReducer from "./autoPartsCatalogReducer";
import relatedProductsReducer from "./relatedProductsReducer";

let reducers = combineReducers({
  autoPartsCatalog: autoPartsCatalogReducer,
  relatedProducts: relatedProductsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
