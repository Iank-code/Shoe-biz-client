"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { selectTotalAmount } from "@/lib/store/slices/workflows/cart.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  // const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  const totalAmount = useSelector(selectTotalAmount);
  const cartData = cartState;
  return (
    <div>
      <Navbar />
      <div className="flex gap-3 px-5 justify-center my-[3em]">
        <div className="flex flex-col p-[2em] w-[75%]">
          {cartData &&
            cartData.map((product, index) => {
              console.log(product);
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
                    <span>{product.product.name}</span>
                    <span>{product.product.newPrice}</span>
                  </div>
                  <div className="flex items-center justify-between ml-[30em] mr-[10em]">
                    <button>X</button>

                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-white py-[1]px px-3 outline-none rounded-sm text-lg">
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button className="bg-blue-500 text-white py-[1]px px-3 outline-none rounded-sm text-lg">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col shadow-xl p-[2em] w-[25%] items-start h-[10%]">
          <span>Cart summary</span>
          <div className="flex items-center gap-[1em]">
            <span>Total</span>
            <span>
              {/* Total Price */}
              {totalAmount}
            </span>
          </div>
          <button className="bg-blue-500 text-white py-1 px-3 outline-none rounded-md">
            {/* Total Price */}
            Pay {totalAmount}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
