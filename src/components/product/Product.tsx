import { ProductType } from "@/utils/helpers/types";
import Image from "next/image";
import React from "react";

export default function Product({ name, images, oldPrice, newPrice }: ProductType) {
  return (
    <div className="shadow-md hover:shadow-xl cursor-pointer rounded-lg p-4">
      <img src={images[0]} alt="first.jpg" className="w-[300px] rounded-md" />
      <strong>{name}</strong>

      <div className="flex gap-3">
        <span className="line-through">Ksh: {oldPrice}</span>
        <strong>Ksh: {newPrice}</strong>
      </div>
    </div>
  );
}
