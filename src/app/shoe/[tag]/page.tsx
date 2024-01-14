"use client"

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useEffect } from "react";

const ProductPage = ({ params }: any) => {
  useEffect(() => {
    // You can send the tag to your backend here
    // Replace this with your actual API call to send data to the backend
    fetch(`http://localhost:5000/api/v1/product/shop?tag=${params.tag}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend response:", data.data);
      })
      .catch((error) => {
        console.error("Error sending tag to backend:", error);
      });
  }, [params.tag]);
 
  // Your component rendering logic goes here

  return (
    <div>
      <Navbar />

      <div>
        <div></div>
        <div></div>
      </div>
      <h1>Product Page</h1>
      <p>Tag: {params.tag}</p>

      <Footer />
    </div>
  );
};

export default ProductPage;
