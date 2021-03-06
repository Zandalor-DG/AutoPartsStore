import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import autoPartsCatalogReducer from "./autoPartsCatalogReducer";
import relatedProductsReducer from "./relatedProductsReducer";
import modelCarsReducer from "./modelCarsReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  manufacturerCar: autoPartsCatalogReducer,
  relatedProducts: relatedProductsReducer,
  auth: authReducer,
  modelCars: modelCarsReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
