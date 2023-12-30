import React from "react";
import cart from "./../../../public/navbar/cart.svg";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex cursor-pointer items-center inherit">
      <Image src={cart} width={50} alt={cart} />
      <div
        className="bg-black text-white rounded-[50%] p-[8px]"
        style={{
          position: "absolute",
          top: "1em",
          right: "2.6em",
        }}
      >
        <span>23</span>
      </div>
    </div>
  );
}
