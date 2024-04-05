import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionTypes } from "../redux/constants/actionTypes";

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  return (
    <div className=" w-auto h-[20rem] flex flex-col justify-center items-center rounded-md">
      <Link to={`/product/${product.id}`}>
        <img width={100} src={product.image}></img>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </Link>
      <button
        onClick={() => {
          dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
          console.log(cartProducts);
        }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductComponent;
