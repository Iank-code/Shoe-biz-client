"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import {
  IconMenu,
  IconUserCircle,
  IconX,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";
import Cart from "@/utils/icons/cart.icon";
import { nav_top_url } from "@/utils/helpers/url.helper";
import AuthModal from "@/utils/authModal/Auth.modal";
import UserDash from "@/utils/authModal/User.dash";

export default function Navbar() {
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const authType = loginState.accessToken ? <UserDash /> : <AuthModal />;
  return (
    <div
      data-testid="navbar"
      className="flex w-full items-center justify-between px-4 py-6"
    >
      <div className="flex gap-4 items-center w-2/3">
        <div className="text-2xl font-semibold italic text-indigo-600">
          Stride
        </div>

        <form action="/search" method="post" className="flex w-1/2">
          <input
            type="search"
            placeholder="Search..."
            className="p-2 outline-none rounded-l-md border border-gray-300 focus:outline-none w-full"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex gap-6 items-center w-1/3 justify-end">
        <IconUser size={40} />
        <div className="relative">
          <IconShoppingBag size={40} />
          <span className="absolute -top-1 right-0 bg-red-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </div>
      </div>
    </div>
  );
}
