import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import { clearCart, removeItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/Constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  if(cartItems.length === 0){
    return <h1 className="mt-[20vh] text-center text-2xl text-orange-400">Please Add Food For You!</h1>
  }
  return (
    <div className="w-[100%] pb-8 mt-[20vh] flex flex-col items-center">
      <div className="w-[80%]">
        {cartItems.map((data) => (
          <div
            key={data.card.info.id}
            className="w-full h-56 border-b border-black flex justify-between items-center"
          >
            <div className="w-[70%] bg-white">
              <p className="text-sm font-bold text-orange-500">
                {data.card.info.category}
              </p>
              <h3 className="text-lg font-bold">{data.card.info.name}</h3>
              <h5 className="text-base font-semibold">
                RS.{data.card.info.price / 100}
              </h5>
              <p className="text-base mt-4">{data.card.info.description}</p>
            </div>
            <div className="w-[18%] h-[70%] bg-white rounded-md flex flex-col items-center">
              <img
                className="w-full h-full rounded-md"
                src={CDN_URL + data.card.info.imageId}
                alt="koi img"
              />
              <button
                className=" bg-red-400 -mt-6 w-[80%] py-2 rounded-md text-white cursor-pointer"
                onClick={() => {
                  dispatch(removeItems(data.card.info.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 w-fit px-8 py-2 bg-orange-300 text-white rounded-lg"
      onClick={() => {
        dispatch(clearCart());
      }}>Remove All</button>
    </div>
  );
};

export default Cart;
