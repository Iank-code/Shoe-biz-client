"use client";

import React, { useState } from "react";
import { IconMenu, IconUserCircle, IconX } from "@tabler/icons-react";
import arrowDown from "./../../../public/navbar/arrow_down.svg";
import search from "./../../../public/navbar/search.svg";
import Image from "next/image";
import Cart from "@/utils/icons/cart.icon";
import { nav_top_url } from "@/utils/helpers/url.helper";
import Link from "next/link";
import AuthModal from "@/utils/authModal/Auth.modal";
import Sidebar from "./sidebar/Sidebar";
import { useSelector } from "react-redux";
import UserDash from "@/utils/authModal/User.dash";

export default function Navbar({ searchInput, setSearchInput }: {searchInput?: string, setSearchInput?: any}) {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const authType = loginState.accessToken ? <UserDash /> : <AuthModal />;
  return (
    <div data-testid="navbar">
      {openSideBar ? (
        <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      ) : null}

      <div className="flex justify-between px-[3em] pt-[2em] mobile:gap-3 mobile:justify-evenly mobile:px-[15px]">
        <div className="flex items-center gap-2">
          <IconMenu
            className="hidden mobile:flex"
            onClick={() => {
              setOpenSideBar(true);
            }}
          />

          <Link
            href="/"
            className="flex nowrap mobile:text-lg gap-3 mobile:text-[13px] mobile:w-[38px]"
          >
            Shoe
          </Link>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center mobile:ml-[1em]">
            {/* Input for search */}
            <input
              type="text"
              placeholder="I'm shopping for..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
            />
            <Image
              src={search}
              width={30}
              alt={search}
              className="relative right-[3em] z-[999] bg-white pl-[5px] mobile:relative mobile:right-[1.8em] mobile:w-[25px]"
            />
          </div>

          <div className="flex flex-col gap-[2em] mobile:hidden">
            <div
              className="flex cursor-pointer items-center mobile:hidden"
              onClick={() => {
                setOpenAuthModal(!openAuthModal);
              }}
            >
              <IconUserCircle size={40} />
              <Image src={arrowDown} width={20} alt={arrowDown} />
            </div>

            {openAuthModal && authType}
          </div>

          <Cart />
        </div>
      </div>

      <div className="flex items-center gap-[5em] justify-center py-[2em] mt-[2em] mobile:gap-3 bg-[#D9D9D9]">
        {nav_top_url.map((link, index) => {
          return (
            <Link href={`/shoe/${link}`} key={index}>
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
