import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers";
import { PropsWithChildren } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoe Game",
  description: "Best shoe seller in Africa",
};

export default function RootLayout({ children }: PropsWithChildren ) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <AppProviders>{children}</AppProviders>
        </body>
      </html>
  );
}