"use client";

import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import linkedIn from "./../../../../public/auth/linkedin.svg";
import facebook from "./../../../../public/auth/facebook.svg";
import google from "./../../../../public/auth/google.svg";
import Image from "next/image";

export default function LoginPage() {
  const images = [
    {
      image: google,
      href: "google.com",
    },
    {
      image: facebook,
      href: "facebook.com",
    },
    {
      image: linkedIn,
      href: "linkedin.com",
    },
  ];

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col justify-center items-center gap-4 pt-[5em]"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ email, password });
        }}
      >
        <div className="flex flex-col gap-[2em]">
          <div className="flex flex-col gap-1">
            <span>Login with</span>
            <div className="flex gap-2">
              {images.map((image, index) => {
                return (
                  <a href={image.href}>
                    <Image src={image.image} height={45} alt="image" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <label>
              Email:
              <br />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
              />
            </label>

            <label>
              Password:
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
              />
            </label>

            <div className="flex flex-col">
              <input
                type="submit"
                className="cursor-pointer bg-blue-500 outline-none text-white py-2 px-4 rounded-md"
              />
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
