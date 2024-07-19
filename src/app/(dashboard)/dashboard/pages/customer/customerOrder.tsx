"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CustomerOrder() {
  const [orders, setOrders] = useState([]);
  const loginState = useSelector((state: any) => state.login);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/order/", {
      headers: {
        Authorization: `Bearer ${loginState.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Token is not valid") {
          // notifications.show({
          //   title: data,
          //   message: "Token has expired, login to proceed.",
          // });
          localStorage.clear();
          window.location.reload();
        }
        setOrders(data.orders);
      });
  }, []);

  return (
    <div className="flex flex-col gap-[4em] items-start justify-center mt-[3em]">
      {orders &&
        orders.map((order: any, index) => {
          const calculateTotalAmount = order.items.reduce(
            (total: number, item: any) => {
              // Parse the price of the product
              const price = parseFloat(item.product.newPrice);
              // Calculate the total price for this item (price * quantity)
              const totalItemPrice = price * item.quantity;
              // Add the total price for this item to the overall total price
              return total + totalItemPrice;
            },
            0
          );
          return (
            <div key={index}>
              <h2 className="font-bold">Order Id: {order.id}</h2>
              <h3>Total Price: {calculateTotalAmount}</h3>
              {order.items.map((shoe: any) => {
                return (
                  <div key={shoe.id} className="flex flex-col gap-[1em] mt-5">
                    <div key={shoe.product.id} className="flex gap-4">
                      <Image
                        src={shoe.product.images[0]}
                        alt={shoe.product.images[0]}
                        width={200}
                        height={200}
                      />
                      <span>Name: {shoe.product.name}</span>
                      <span>Units: {shoe.quantity}</span>
                      <span>size: {shoe.size}</span>
                      <div className="flex gap-[20px]">
                        <span>Ksh: {shoe.product.newPrice}</span>
                        <span>
                          Total: {shoe.product.newPrice * shoe.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
