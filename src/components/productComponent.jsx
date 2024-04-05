import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ product }) => {
  return (
    <div className=" w-auto h-[20rem] flex flex-col justify-center items-center rounded-md">
      <Link to={`/product/${product.id}`}>
        <img width={100} src={product.image}></img>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </Link>
    </div>
  );
};

export default ProductComponent;
