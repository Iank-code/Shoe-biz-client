"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import AppProviders from "@/components/providers";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const loginState = useSelector((state: any) => {
    return state.login;
  });
  console.log(loginState);

  useEffect(() => {
    if (!loginState.accessToken) {
      router.push("/");
      window.location.reload();
    }
  }, [loginState.accessToken]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
