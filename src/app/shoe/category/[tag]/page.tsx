"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Product from "@/components/product/Product";
import { ProductType } from "@/utils/helpers/types";
import { Profiler, useEffect, useState } from "react";

const CategoryPage = ({ params }: any) => {
  const [data, setData] = useState<ProductType[]>([]);

  console.log(params.tag.toLowerCase().replace("-", " "));

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default CategoryPage;
