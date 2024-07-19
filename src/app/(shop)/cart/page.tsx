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
      {/* <div className="flex gap-3 px-5 justify-center my-[3em] mobile:flex-col mobile:justify-between">
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
              {totalAmount}
            </span>
          </div>
          <button
            className="bg-blue-500 text-white py-1 px-3 outline-none rounded-md"
            onClick={createOrder}
          >
            Pay {totalAmount}
          </button>
        </div>
      </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

              <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {cartData && cartData.map((
                product: {
                  product: ProductType;
                  quantity: number;
                  size: string;
                },
                index: number
              ) => {
                return(
                  <li className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <Image src={product.product.images[0]} alt={product.product.images[0]} className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" width={60} height={60} priority />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href="#" className="font-medium text-gray-700 hover:text-gray-800">{ product.product.name }</a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">Sienna</p>
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">Size {product.size}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-900 font-bold">Ksh {product.product.newPrice}</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
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

                          <div className="absolute right-0 top-0">
                            <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-red-500" onClick={() =>
                            dispatch(removeFromCart(product.product.id))
                            }>
                              <span className="sr-only">Remove</span>
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        <span>In stock</span>
                      </p>
                    </div>
                  </li>
                )
              })}

                
              </ul>
            </section>

            {/* <!-- Order summary --> */}
            <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">{totalAmount}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how shipping is calculated</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">100</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how tax is calculated</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">50</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">{totalAmount + 50 + 100 }</dd>
                </div>
              </dl>

              <div className="mt-6">
                <button type="submit" className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
