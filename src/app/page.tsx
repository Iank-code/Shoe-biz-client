import Footer from "@/components/footer/Footer";
import LandingTop from "@/components/landing-top/LandingTop";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/product/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingTop />
      <Products />
      <Footer />
    </div>
  );
}
