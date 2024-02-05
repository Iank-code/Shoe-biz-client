"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import usePost from "@/lib/hooks/usePost.hook";
import { updateLoginState } from "@/lib/store/slices/workflows/login.slice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState();
  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col justify-center items-center gap-4 py-[5em]"
        onSubmit={(e) => {
          e.preventDefault();
          // const { userData } = usePost(
          //   email,
          //   password,
          //   "http://localhost:5000/api/v1/customer/login"
          // );
          fetch("http://localhost:5000/api/v1/customer/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("Could not fetch data from server");
              }
              return res.json();
            })
            .then((data) => {
              if (data.status !== 200) {
              }

              dispatch(
                updateLoginState({
                  name: data.data.user.name,
                  email: data.data.user.email,
                  phoneNumber: data.data.user.phoneNumber,
                  profileImage: data.data.user.profileImage,
                  accessToken: data.data.access_token,
                })
              );

              // setUserData(data);
            });

          console.log(userData);
        }}
      >
        <div className="flex flex-col gap-[2em]">
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
      <Footer />
    </div>
  );
}
