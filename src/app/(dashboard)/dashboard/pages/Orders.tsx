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
        console.log(data);
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
          return (
            <div key={index}>
              <div>
                <h2>{order.id}</h2>
                {order.customerOrderInfo.map((shoe: any) => {
                  console.log(shoe);
                  return (
                    <div key={shoe.id}>
                      {shoe.productsInfo.map((info: any) => {
                        return (
                          <div key={info.id}>
                            <span>{info.name}</span>
                          </div>
                        );
                      })}
                      <div>
                        <span>size {shoe.shoeSize}</span>
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
