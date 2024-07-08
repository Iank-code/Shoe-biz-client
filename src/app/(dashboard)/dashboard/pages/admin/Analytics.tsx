"use client";
import { userOrderType } from "@/utils/helpers/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Analytics() {
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const [data, setData] = useState<userOrderType>();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/analytic/users-orders", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginState.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) alert("Error fetching");
        return res.json();
      })
      .then((data: userOrderType) => setData(data));
  }, []);

  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="py-6 px-8 bg-blue-500 rounded text-white">
          {data && data.customers} Customers
        </h1>
        <h1 className="py-6 px-8 bg-red-500 rounded text-white">
          {data && data.orders} Orders
        </h1>

        <h1 className="py-6 px-8 bg-green-500 rounded text-white">
          {data && data.products} Shoes
        </h1>
      </div>
    </div>
  );
}
