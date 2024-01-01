import React from "react";

export default function AuthModal() {
  return (
    <div
      className="bg-white text-black flex flex-col gap-3 rounded-md"
      style={{
        position: "absolute",
        top: "5em",
        padding: "16px",
      }}
    >
      <span className="cursor-pointer hover:text-[blue]">Login</span>
      <span className="cursor-pointer hover:text-red-500">Register</span>
    </div>
  );
}
