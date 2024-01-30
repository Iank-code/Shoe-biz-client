"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Product from "@/components/product/Product";
import { ProductType } from "@/utils/helpers/types";
import Link from "next/link";
import { Profiler, useEffect, useState } from "react";

const ProductPage = ({ params }: any) => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/shop?tag=${params.tag}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error sending tag to backend:", error);
      });
  }, [params.tag]);

  // Your component rendering logic goes here

  return (
    <div>
      <Navbar />
      <div className="py-[2em] grid grid-cols-4 px-4 gap-9 mobile:gap-3 mobile:grid-cols-2">
        {data &&
          data.map((product, index) => (
            <Link
              key={index}
              href={`/product/${product.id}`}
              className="shadow-md hover:shadow-xl"
            >
              <Profiler id="App" onRender={onRender}>

              <Product {...product} />
              </Profiler>
            </Link>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
