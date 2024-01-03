"use client";

import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col justify-start items-center gap-4 pt-[5em]"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ email, password });
        }}
      >
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
          <span>Forgot Password?</span>
          <input
            type="submit"
            className="cursor-pointer bg-blue-500 outline-none text-white py-2 px-4 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}
