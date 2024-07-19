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
  const [value, setValue] = useState<string>("40");

  const colors: string[] = ["red", "blue", "green", "black"];

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/product/product/${params.id}`)
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
        <div className="flex gap-4 justify-center items-center mobile:mt-[15em]">
          <div className="flex  justify-items-start gap-[1em] py-[2em]">
            <div className="flex flex-col items-start justify-center mt-[2em] gap-4">
              <img src={product.images[0]} className="rounded-lg" />
              <Select
                label="Size"
                placeholder="Pick a size"
                data={product && product.shoeSize}
                defaultValue="40"
                allowDeselect={false}
                onChange={(value) => {
                  setValue(value);
                }}
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
                  onClick={() => {
                    dispatch(
                      addToCart({
                        product: product,
                        quantity: numericValue,
                        size: value,
                      })
                    );
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[600px] mt-[1.8em]">
              <h2>
                <strong>{product.name}</strong>
              </h2>
              <h3>{product.description}</h3>
              <div className="flex gap-3">
                {product.tag.map((item, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: `${colors[index]}` }}
                    className="text-white px-2 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
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
