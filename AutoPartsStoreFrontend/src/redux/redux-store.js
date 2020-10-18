import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import autoPartsCatalogReducer from "./autoPartsCatalogReducer";
import relatedProductsReducer from "./relatedProductsReducer";
import modelCarsReducer from "./modelCarsReducer";

let reducers = combineReducers({
  autoPartsCatalog: autoPartsCatalogReducer,
  relatedProducts: relatedProductsReducer,
  auth: authReducer,
  modelCars: modelCarsReducer,
});

let store = createStore(reducers);

export default store;
