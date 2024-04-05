import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

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
    } catch (error) {}
  };
  useEffect(() => {
    if (productId) {
      fetchProductData();
    }
  }, [productId]);
  return (
    <div>
      <h1>ProductDetail</h1>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductDetail;
