import { ProductType } from "@/utils/helpers/types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/slices/workflows/cart.slice";

export default function Product({
  id,
  name,
  description,
  newPrice,
  oldPrice,
  images,
  tag,
  shoeSize,
}: ProductType) {
  const product = {
    id,
    name,
    description,
    newPrice,
    oldPrice,
    images,
    tag,
    shoeSize,
  };
  const dispatch = useDispatch();
  return (
    <div className="shadow-md hover:shadow-xl cursor-pointer rounded-lg p-4">
      <img src={images[0]} alt="first.jpg" className="w-[300px] mobile:w-[350px] rounded-md" />
      <strong>{name}</strong>

      <div className="flex gap-3 mobile:flex-col mobile:gap-1">
        <span className="line-through mobile:text-[12px] text-[16px] text-gray-600">
          Ksh: {oldPrice}
        </span>
        <strong>Ksh: {newPrice}</strong>
      </div>

      {/* <button
        className="bg-[blue] text-white outline-none py-2 px-3 rounded-md mobile:py-1 mobile:text-[15px]"
        onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
      >
        Add To Cart
      </button> */}
    </div>
  );
}
