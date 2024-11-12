"use client";

import Footer from "@/components/footer/Footer";
import LandingTop from "@/components/landing-top/LandingTop";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/product/Products";
import { ProductType } from "@/utils/helpers/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<ProductType[]>([]);

  // Fetching data when page loads
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/product/getall")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setChangeableData(data.data);
      });
  }, []);

  return (
    <div className="mx-28">
      <Navbar />
      <LandingTop />
      <Products data={data} />
      <Footer />
    </div>
  );
}
