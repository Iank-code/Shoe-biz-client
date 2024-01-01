import React from "react";
import cart from "./../../../public/navbar/cart.svg";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex cursor-pointer items-center inherit mobile:hidden">
      <Image src={cart} width={50} alt={cart} />
      <div
        style={{
          position: "absolute",
          backgroundColor: "black !important",
          top: "1em",
          right: "2.6em",
          padding: "8px",
          borderRadius: "50%",
          color: "white",
        }}
        className="mobile:hidden"
      >
        <span>0</span>
      </div>
    </div>
  );
}
