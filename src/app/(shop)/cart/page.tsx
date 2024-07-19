"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import {
  selectTotalAmount,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "@/lib/store/slices/workflows/cart.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import trashIcon from "./../../../../public/navbar/trash.svg";
import Image from "next/image";
import { ProductType } from "@/utils/helpers/types";

export default function Page() {
  const dispatch = useDispatch();

  const cartState = useSelector((state: any) => {
    return state.cart;
  });

  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const totalAmount = useSelector(selectTotalAmount);
  const cartData = cartState;

  const createOrder = () => {
    fetch("http://localhost:4000/api/v1/order/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginState.accessToken}`,
      },
      body: JSON.stringify({
        productsInfo: cartData,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    dispatch(clearCart());
  };
  return (
    <div>
      <Navbar />
      <div className="flex gap-3 px-5 justify-center my-[3em] mobile:flex-col mobile:justify-between">
        <div className="flex flex-col p-[2em] w-[75%] mobile:w-[100vw] mobile:p-[20px]">
          {cartData &&
            cartData.map(
              (
                product: {
                  product: ProductType;
                  quantity: number;
                  size: string;
                },
                index: number
              ) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col my-[2em] shadow-md py-[2em]"
                  >
                    <div className="flex justify-evenly">
                      <img
                        src={product.product.images[0]}
                        alt={product.product.images[0]}
                        className="w-[200px]"
                      />
                      <div className="flex flex-col">
                        <span>{product.product.name}</span>
                        <span>size: {product.size}</span>
                      </div>
                      <span>{product.product.newPrice}</span>
                    </div>
                    <div className="flex items-center justify-between ml-[30em] mr-[10em]">
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(product.product.id))
                        }
                      >
                        <Image
                          src={trashIcon}
                          alt={`${trashIcon}.svg`}
                          width={30}
                          height={30}
                        />
                      </button>

                      <div className="flex gap-2">
                        <button
                          className="bg-blue-500 text-white py-[1]px px-3 outline-none rounded-sm text-lg"
                          onClick={() => dispatch(decreaseQuantity(product))}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="bg-blue-500 text-white py-[1]px px-3 outline-none rounded-sm text-lg"
                          onClick={() => dispatch(increaseQuantity(product))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
        <div className="flex flex-col shadow-xl p-[2em] w-[25%] items-start h-[10%] mobile:w-[100vw]">
          <span>Cart summary</span>
          <div className="flex items-center gap-[1em]">
            <span>Total</span>
            <span>
              {/* Total Price */}
              {totalAmount}
            </span>
          </div>
          <button
            className="bg-blue-500 text-white py-1 px-3 outline-none rounded-md"
            onClick={createOrder}
          >
            {/* Total Price */}
            Pay {totalAmount}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
