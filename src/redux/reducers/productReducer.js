import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Title",
      category: "categoryA",
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
