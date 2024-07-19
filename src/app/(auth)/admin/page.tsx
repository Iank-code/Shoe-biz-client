"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { updateLoginState } from "@/lib/store/slices/workflows/login.slice";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPasswordConfirmation] = useState<string>("");
  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col justify-center items-center gap-4 py-[5em]"
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/api/v1/seller/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
              // password_confirmation,
              // name,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status !== 20) {
              }
              dispatch(
                updateLoginState({
                  name: data.data.user.name,
                  email: data.data.user.email,
                  role: data.data.user.role,
                  phoneNumber: data.data.user.phoneNumber,
                  profileImage: data.data.user.profileImage,
                  accessToken: data.data.access_token,
                })
              );
            });
        }}
      >
        <div className="flex flex-col gap-[2em]">
          <h1 className="font-bold text-3xl">Join now to start selling</h1>
          <div className="flex flex-col items-start gap-4">
            {/* <label>
              Username:
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username"
                className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
              />
            </label> */}

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

            {/* <label>
              Confirm Your Password:
              <br />
              <input
                type="password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Enter your password"
                className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md px-4 py-2 mobile:px-2 mobile:w-[200px]"
              />
            </label> */}
            <div className="flex flex-col">
              <input
                type="submit"
                value="Login"
                className="cursor-pointer bg-blue-500 outline-none text-white py-2 px-4 rounded-md"
              />
              {/* <Link href="/forgot-password">Forgot Password?</Link> */}
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
