import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionTypes } from "../redux/constants/actionTypes";

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  return (
    <div className=" w-auto h-auto flex flex-col bg-slate-100 rounded-2xl justify-center items-center">
      <Link
        className=" min-h-[20rem] flex flex-col items-center"
        to={`/product/${product.id}`}>
        <img className="my-2" width={100} src={product.image}></img>
        <div className="w-[15rem]">
          <p className=" my-2">{product.title}</p>
          <p className=" my-2">Category: {product.category}</p>
          <p className=" my-2">Price: ${product.price}</p>
        </div>
      </Link>
      <button
        className=" bg-slate-200 hover:bg-slate-700 hover:text-white duration-300 rounded-md my-2 px-4 py-2"
        onClick={() => {
          dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
        }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductComponent;
