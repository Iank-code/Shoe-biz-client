// import { notifications } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const loginState = useSelector((state: any) => state.login);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/order/", {
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
        console.log(data);
        setOrders(data.orders);
      });
  }, []);

  return (
    <div className="flex flex-col gap-[4em] items-start justify-center mt-[3em]">
      {orders &&
        orders.map((order: any, index) => {
          // const calculateTotalAmount = order.customerOrderInfo.reduce(
          //   (total: any, item: any) => {
          //     // const numericValue = parseFloat
          //     // console.log(item.productsInfo.map((shoe:any) => shoe.newPrice));
          //     let price: number;
          //     item.productsInfo.forEach((shoe: any) => {
          //       price = parseFloat(shoe.newPrice);
          //     });

          //     const units = item.units
          //   }
          // );
          return (
            <div key={index}>
              <div>
                <h2>Order Id: {order.id}</h2>
                {order.items.map((shoe: any) => {
                  console.log(shoe);
                  return (
                    <div key={shoe.id} className="flex flex-col gap-[1em] mt-5">
                      <div key={shoe.product.id} className="flex gap-4">
                        <span>Name: {shoe.product.name}</span>
                        <span>Units: {shoe.quantity}</span>
                        <span>size: {shoe.size}</span>
                        <div className="flex gap-[20px]">
                          <span>Ksh: {shoe.product.newPrice}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
