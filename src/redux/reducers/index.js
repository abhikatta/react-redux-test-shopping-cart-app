import { combineReducers } from "redux";
import {
  cartReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cartProducts: cartReducer,
});

export default reducers;
