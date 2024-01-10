"use client";
import { useEffect, useState } from "react";
import { ProductType } from "@/utils/helpers/types";

export default function ProductViewPage({ params }: any) {
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    fetch(`${process.env.serverApi}course/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, []);
  return <div>page</div>;
}
