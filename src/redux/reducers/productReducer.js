import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};
const addToCartInitialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export const addToCartReducer = (state = addToCartInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        products: [...state.products, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
