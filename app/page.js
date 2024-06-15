import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="w-[90%] h-screen mx-auto ">
      <Navbar />
      <Offers />

      <Products />
    </main>
  );
}
