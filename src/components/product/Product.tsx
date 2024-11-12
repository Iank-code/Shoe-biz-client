import { ProductType } from "@/utils/helpers/types";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "@/lib/store/slices/workflows/cart.slice";
import { useDispatch } from "react-redux";
import React from "react";

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

  // const dispatch = useDispatch();
  // function addToWishList(id: string) {}
  return (
    <div className="cursor-pointer rounded-lg p-4 relative group">
      <img
        src={images[0]}
        alt="first.jpg"
        className="w-[300px] mobile:w-[350px] rounded-md"
      />
      <strong>{name}</strong>

      <div className="flex gap-3 mobile:flex-col mobile:gap-1">
        <span className="line-through mobile:text-[12px] text-[16px] text-gray-600">
          Ksh: {oldPrice}
        </span>
        <strong>Ksh: {newPrice}</strong>
      </div>

      {/* <div className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md">
        <FaHeart className="text-green-500 text-xl" onClick={addToWishList(id)}/>
      </div> */}

    </div>
  );
}
