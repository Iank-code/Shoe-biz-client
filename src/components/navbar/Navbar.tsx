"use client";

import React, { useState } from "react";
import { IconMenu, IconUserCircle } from "@tabler/icons-react";
import arrowDown from "./../../../public/navbar/arrow_down.svg";
import search from "./../../../public/navbar/search.svg";
import Image from "next/image";
import Cart from "@/utils/icons/cart.icon";
import { nav_top_url } from "@/utils/helpers/url.helper";
import Link from "next/link";
import AuthModal from "@/utils/authModal/Auth.modal";

export default function Navbar() {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between px-[3em] pt-[2em] mobile:gap-5 mobile:px-[20px]">
        <div className="flex items-center gap-3">
          <IconMenu className="hidden mobile:flex" />
          <span className="flex nowrap mobile:text-lg gap-3">Shoe</span>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="I'm shopping for..."
              className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
            />
            <Image
              src={search}
              width={30}
              alt={search}
              className="absolute right-[13em] z-[999] bg-white pl-[5px] mobile:absolute mobile:right-[2em]"
            />
          </div>

          <div className="flex flex-col gap-[2em]">
            <div
              className="flex cursor-pointer items-center mobile:hidden"
              onClick={() => {
                console.log("clicked");
                setOpenAuthModal(!openAuthModal);
              }}
            >
              <IconUserCircle size={40} />
              <Image src={arrowDown} width={20} alt={arrowDown} />
            </div>

            {openAuthModal && <AuthModal />}
          </div>

          <Cart />
        </div>
      </div>

      <div className="flex items-center gap-[5em] justify-center py-[2em] mt-[2em] mobile:gap-3 bg-[#D9D9D9]">
        {nav_top_url.map((link, index) => {
          return (
            <Link href={link} key={index}>
              {link}
            </Link>
          );
        })}
      </div>
    </>
  );
}
