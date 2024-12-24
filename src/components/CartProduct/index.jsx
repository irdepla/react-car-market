import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../store/cartSlice";

const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container m-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 ">
            <h1 className="font-bold text-xl">
              {cartItem.product.name}: 
              <span className="ml-2">
              {cartItem.quantity}
              </span>
            </h1>
            <img src={cartItem.product.image} alt="" />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => dispatch(increaseQuantity(cartItem.product.id))}
              variant="contained"
            >
              +
            </Button>

            <Button
              onClick={() => dispatch(decreaseQuantity(cartItem.product.id))}
              variant="contained"
            >
              -
            </Button>


            <Button
              onClick={() => dispatch(removeFromCart(cartItem.product.id))
              }
              variant="contained"
            >
              delete
            </Button>


          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
