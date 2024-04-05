import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/actions/productActions";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  console.log("cartProducts", cartProducts);
  return cartProducts.products.length !== 0 ? (
    <div className="  grid grid-cols-5 gap-3">
      {cartProducts.products.map((product) => {
        return (
          <div
            className="bg-slate-100 flex flex-col items-center justify-center rounded-2xl "
            key={product.id}>
            <img src={product.image} width={50}></img>
            <p>{product.title}</p>
            <p>${product.price}</p>

            <button onClick={() => dispatch(removeProductFromCart(product))}>
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="mb-4">No items in cart...</p>
  );
};

export default Cart;
