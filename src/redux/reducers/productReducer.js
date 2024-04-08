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

export const cartReducer = (state = addToCartInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // if product exists in list, update its quantity else just add the product with quantity = 1
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + 1,
        };

        return {
          products: updatedProducts,
        };
      } else {
        return {
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const productIndexToRemove = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // same as adding, reduce quantity by 1 or splice the element out of array
      if (productIndexToRemove !== -1) {
        const updatedProducts = [...state.products];
        const productToRemoveQuantity =
          updatedProducts[productIndexToRemove].quantity;
        if (productToRemoveQuantity > 1) {
          updatedProducts[productIndexToRemove] = {
            ...updatedProducts[productIndexToRemove],
            quantity: updatedProducts[productIndexToRemove].quantity - 1,
          };
        } else {
          updatedProducts.splice(productIndexToRemove, 1);
        }
        return { products: updatedProducts };
      }
      return state;
    case actionTypes.DELETE_PRODUCT_FROM_CART:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
