import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import autoPartsCatalogReducer from "./autoPartsCatalogReducer";
import relatedProductsReducer from "./relatedProductsReducer";

let reducers = combineReducers({
  autoPartsCatalog: autoPartsCatalogReducer,
  relatedProducts: relatedProductsReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
