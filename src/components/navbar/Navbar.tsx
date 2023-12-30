import React from "react";
import { IconMenu, IconUserCircle } from "@tabler/icons-react";
import arrowDown from "./../../../public/navbar/arrow_down.svg";
import cart from "./../../../public/navbar/cart.svg";
import Image from "next/image";
import Cart from "@/utils/icons/cart.icon";

export default function Navbar() {
  return (
    <div className="flex justify-between px-[3em] pt-[2em]">
      <div>
        {/* <IconMenu /> */}
        <span>Shoe Biz</span>
      </div>

      <div className="flex gap-5">
        <div>
          <input type="text" placeholder="I'm shopping for..." />
        </div>
        <div className="flex cursor-pointer items-center">
          <IconUserCircle size={40} />
          <Image src={arrowDown} width={20} alt={arrowDown} />
        </div>

        <Cart />
      </div>
    </div>
  );
}
