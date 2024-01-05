"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState<string>("");
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center gap-4 py-[5em]"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ email });
        }}
      >
        <div className="flex flex-col gap-[2em]">
          <div className="flex flex-col gap-1">
            <span>Enter email address to recieve OTP</span>
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
