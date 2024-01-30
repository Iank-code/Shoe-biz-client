import Link from "next/link";
import React from "react";

export default function UserDash() {
  return (
    <div
      className="bg-white text-black flex flex-col gap-3 rounded-md"
      style={{
        position: "absolute",
        top: "5em",
        padding: "16px",
      }}
    >
      <Link href="/dashboard" className="cursor-pointer hover:text-[blue]">
        Dashboard
      </Link>
      <Link href="#" className="cursor-pointer hover:text-red-500">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}
