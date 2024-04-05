import { BASE_URL } from "../../components/fakeStoreApi";
import { actionTypes } from "../constants/actionTypes";
// const fetchProducts = () => {

//   return async function (dispatch) {
//     const response = await fetch(`${BASE_URL}/products`);
//     const data = await response.json();
//     console.log(data);
//     dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
//   };
// };

// better way of writing above func:

const fetchProducts = () => async (dispatch) => {
  // if we do it like this, we get error:

  // **********
  // react-dom.development.js:12056  Uncaught Error: Actions must be plain objects. Instead,
  // the actual type was: 'Promise'. You may need to add middleware to your store setup to
  // handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
  // **********

  // when making async api call in actioncreators, need to convert sync action creator to
  // async action creator, this is only possible through a middleware aka redux-thunk
  // ***********
  // DO NOT ADD ASYNC TO PARENT FUNCTION, AS IT WILL NOT RETURN A PLAIN JS OBJECT THEN.
  // ***********
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
};

const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

const fetchSingleProduct = (id) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();

  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: data });
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

const addToCartProduct = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartProduct,
  };
};

const removeProuctFromCart = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartProduct,
  };
};

export {
  setProducts,
  selectedProduct,
  removeSelectedProduct,
  fetchProducts,
  fetchSingleProduct,
  addToCartProduct,
  removeProuctFromCart,
};
