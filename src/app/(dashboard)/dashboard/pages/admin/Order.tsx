"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

type adminOrders = [
  {
    items: [];
    user: {
      name: string;
      email: string;
    };
  }
];

export default function AdminOrderPage() {
  const [data, setData] = useState<adminOrders | []>([]);
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/order/all/admin", {
      headers: {
        Authorization: `Bearer ${loginState.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <div>
      {data &&
        data.map((order: adminOrders[0], index: number) => {
          return (
            <div key={index}>
              <h1 className="flex gap-2">
                {order.items.length}{" "}
                {order.items.length > 1 ? "orders" : "order"} from{" "}
                <Link href="#" className="underline hover:text-blue-600">{order.user.name}</Link>
                {order.user.email}
              </h1>
            </div>
          );
        })}
    </div>
  );
}
