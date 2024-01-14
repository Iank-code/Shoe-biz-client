"use client";
import { useEffect, useState } from "react";
import { ProductType } from "@/utils/helpers/types";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Select } from "@mantine/core";
import { addToCart } from "@/lib/store/slices/workflows/cart.slice";
import { useDispatch } from "react-redux";

export default function ProductViewPage({ params }: any) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType>();
  const [unit, setUnit] = useState<string>("1");

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, []);
  const numericValue: number = parseFloat(unit);

  return (
    <div>
      <Navbar />
      {product && (
        <div className="flex gap-4 px-[2em] mobile:mt-[15em]">
          <div></div>
          <div>
            <div className="flex flex-col items-start">
              <Select
                label="Size"
                placeholder="Pick a size"
                data={product && product.shoeSize}
                defaultValue="40"
                allowDeselect={false}
              />

              <div className="flex gap-4">
                <span className="line-through mobile:text-[12px] text-[15px] text-gray-600">
                  Ksh {product && product.oldPrice}
                </span>

                <strong>Ksh {product && product.newPrice}</strong>
              </div>

              <div className="flex gap-4">
                <input
                  type="number"
                  className="border-2 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md w-[6em]"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUnit(e.target.value)
                  }
                  value={unit}
                />
                <button
                  className="bg-[blue] text-white outline-none py-2 px-3 rounded-md mobile:py-1 mobile:text-[15px]"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        product: product,
                        quantity: numericValue,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
            {/* <button className="border-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-blue-500 outline-none py-2 px-7 rounded-md mobile:py-1 mobile:text-[15px]">
              Buy Now
            </button> */}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
