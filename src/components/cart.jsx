import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartProduct,
  removeProductFromCart,
} from "../redux/actions/productActions";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  let totalPrice = 0;
  return cartProducts.products.length !== 0 ? (
    <div className=" w-auto h-auto flex flex-col justify-center items-center">
      <div className="  grid grid-cols-5 gap-3">
        {cartProducts.products.map((product) => {
          totalPrice += product.price * product.quantity;
          return (
            <div
              className="bg-slate-100 flex flex-col items-center justify-center rounded-2xl "
              key={product.id}>
              <img src={product.image} width={50}></img>
              <p>{product.title}</p>
              <p>${product.price}</p>
              <div className="flex  justify-center items-center flex-row gap-4">
                <button
                  className=" bg-slate-200 hover:bg-slate-700 hover:text-white
            duration-300 rounded-md my-2 px-4 py-2"
                  onClick={() => dispatch(addToCartProduct(product))}>
                  +
                </button>
                <p>{product.quantity}</p>
                <button
                  className=" bg-slate-200 hover:bg-slate-700 hover:text-white
            duration-300 rounded-md my-2 px-4 py-2"
                  onClick={() => dispatch(removeProductFromCart(product))}>
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p>Total price: ${totalPrice}</p>
    </div>
  ) : (
    <p className="mb-4">No items in cart...</p>
  );
};

export default Cart;
