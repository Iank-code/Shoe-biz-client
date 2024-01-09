"use client";
import { useState, useEffect } from "react";
import Product from "./Product";
import { ProductType } from "@/utils/helpers/types";

export default function Products() {
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/getall")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="py-[2em] grid grid-cols-4 px-4 gap-9">
      {data.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}
