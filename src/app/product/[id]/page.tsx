"use client";
import { useEffect, useState } from "react";
import { ProductType, colorVariant } from "@/utils/helpers/types";
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
        <div className="flex gap-4 justify-center items-center my-4">
          <div className="flex flex-col-reverse px-4 sm:flex-row gap-5 md:gap-[2em] py-4 sm:py-[2em]">
            <div className="flex flex-col items-start justify-center mt-4 sm:mt-[2em] gap-4 flex-grow">
              <div className="flex w-full flex-col gap-3 items-start">
                <img
                  src={product.colorVariants[0].image}
                  className="rounded-lg w-full h-auto max-h-[400px] object-contain"
                />

                {/* Sub Images */}
                <div className="flex gap-2 w-full overflow-x-auto">
                  {product.colorVariants.map(
                    (colorVariant: colorVariant, index: number) => {
                      return (
                        <img
                          key={index}
                          src={colorVariant.image}
                          alt={`Color variant ${index}`}
                          className="rounded-md w-[80px] h-[80px] object-contain cursor-pointer"
                        />
                      );
                    }
                  )}
                </div>
              </div>

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
                <strong>Ksh {product && product.colorVariants[0].price}</strong>
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

            <div className="flex flex-col w-[600px] mt:4 sm:mt-[1.8em] flex-grow">
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
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
