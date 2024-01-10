import React from "react";
import cart from "./../../../public/navbar/cart.svg";
import Image from "next/image";
import Link from "next/link";
import "./icons.css";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartState = useSelector((state: any) => state.cart);
  const cartData = cartState;
  console.log(cartData.length);
  return (
    <Link href="cart">
      <div className="flex cursor-pointer items-center inherit">
        <Image src={cart} width={50} alt={cart} className="mobile:w-[36px]" />
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
          className="cart-icon"
        >
          <span>{cartData ? cartData.length : 0}</span>
        </div>
      </div>
    </Link>
  );
}
