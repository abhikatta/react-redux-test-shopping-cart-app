import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  fetchSingleProduct,
} from "../redux/actions/productActions";
import { actionTypes } from "../redux/constants/actionTypes";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div className="w-auto h-screen justify-around items-center mx-4 flex flex-row">
      <img width={200} src={product.image}></img>
      <div className="w-[40%]">
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>Price: ${product.price}</div>
        <button
          className=" bg-slate-200 hover:bg-slate-700 hover:text-white duration-300 rounded-md my-2 px-4 py-2"
          onClick={() => {
            dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
