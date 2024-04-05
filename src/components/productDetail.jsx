import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";

const API_ENDPOINT = "https://fakestoreapi.com/products";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductData = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/${productId}`);
      const data = await res.json();
      dispatch(selectedProduct(data));
    } catch (error) {
      console.log("detail fetch error", error);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return (
    product && (
      <div>
        <img width={200} src={product.image}></img>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>${product.price}</div>
      </div>
    )
  );
};

export default ProductDetail;
