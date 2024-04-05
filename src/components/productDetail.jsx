import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  fetchSingleProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div>
      <img width={200} src={product.image}></img>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>${product.price}</div>
    </div>
  );
};

export default ProductDetail;
