import { BASE_URL } from "../../components/fakeStoreApi";
import { actionTypes } from "../constants/actionTypes";
const fetchProducts = async (products) => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  console.log(data);
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export { setProducts, selectedProduct, removeSelectedProduct, fetchProducts };
