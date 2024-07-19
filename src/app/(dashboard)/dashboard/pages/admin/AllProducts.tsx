"use client";
import { ProductType } from "@/utils/helpers/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function AllProducts() {
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/product/getall")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const deleteProduct = (productId: string) => {
    fetch(`http://localhost:4000/api/v1/product/${productId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginState.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="py-[2em] grid grid-cols-4 px-4 gap-9 mobile:gap-3 mobile:grid-cols-2">
      {data.map((product, index) => (
        <div className="rounded-lg p-4">
          <img
            src={product.images[0]}
            alt="first.jpg"
            className="w-[300px] mobile:w-[350px] rounded-md"
          />
          <strong>{product.name}</strong>

          <div className="flex gap-3 mobile:flex-col mobile:gap-1">
            <span className="line-through mobile:text-[12px] text-[16px] text-gray-600">
              Ksh: {product.oldPrice}
            </span>
            <strong>Ksh: {product.newPrice}</strong>
          </div>

          <div className="flex gap-3 mobile:flex-col mobile:gap-1">
            <button className="bg-green-500 px-3 text-white outline-none rounded">
              Edit
            </button>
            <button
              className="bg-red-500 px-3 text-white outline-none rounded"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
