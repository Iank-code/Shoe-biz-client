import { ProductType } from "@/utils/helpers/types";
import Image from "next/image";
import React from "react";
// import { addToCart } from "@/lib/store/slices/workflows/cart.slice";
// import { useDispatch } from "react-redux";

export default function Product({
  name,
  images,
  oldPrice,
  newPrice,
}: ProductType) {
  // const dispatch = useDispatch();
  return (
    <div className="shadow-md hover:shadow-xl cursor-pointer rounded-lg p-4">
      <img src={images[0]} alt="first.jpg" className="w-[300px] rounded-md" />
      <strong>{name}</strong>

      <div className="flex gap-3">
        <span className="line-through text-[16px] text-gray-600">
          Ksh: {oldPrice}
        </span>
        <strong>Ksh: {newPrice}</strong>
      </div>

      <button
        className="bg-[blue] text-white outline-none py-2 px-3 rounded-md"
        // onClick={() => dispatch(addToCart({ product: name, quantity: 1 }))}
      >
        Add To Cart
      </button>
    </div>
  );
}
